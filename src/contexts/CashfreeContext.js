import { createContext, useContext, useEffect, useState } from "react";
import { noop } from "utils";
import { CARD_PAYMENT_KEY } from "utils/constants";
import { defaultTheme } from "utils/defaults";
import "../services/cardPayment.css";
import { load } from "@cashfreepayments/cashfree-js";
import './temp.css'

const AppContext = createContext({
    loading: false,
    cashfree: null,
    cardNumber: null,
    cardHolder: null,
    cardExpiry: null,
    cardCvv: null,
    qr: null,
    hdfc: null,
    sbi: null,
    kotak: null,
    icici: null,
    selected:null,
    setSelected: noop,
    initialize: noop,
    generateCardPayment: noop,
    openPaymentSession: noop,
    generateUpiQrPayment: noop,
    openQrPaymentSession: noop,
    generateUpiCollectPayment: noop,
    openUpiCollectPaymentSession: noop,
    generateNetBankingPayment: noop,
    openNetBankingPaymentSession: noop,
    generateWalletPayment: noop,
    openWalletPaymentSession: noop,
});

export const useCashfree = () => useContext(AppContext);

export const CashfreeProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);
    const [cashfree, setCashfree] = useState(null);
    const [cardNumber, setCardNumber] = useState(null);
    const [cardHolder, setCardHolder] = useState(null);
    const [cardExpiry, setCardExpiry] = useState(null);
    const [cardCvv, setCardCvv] = useState(null);
    const [cardSave, setCardSave] = useState(null);

    const [qr, setQr] = useState(null);

    const [upiCollect, setUpiCollect] = useState(null);

    const [bank, setBank] = useState({});

    const [hdfc, setHdfc] = useState(null);
    const [sbi, setSbi] = useState(null);
    const [kotak, setKotak] = useState(null);
    const [icici, setIcici] = useState(null);

    const [selected, setSelected] = useState(CARD_PAYMENT_KEY);
    useEffect(() => {
        if (cardNumber && cardCvv) {
            cardNumber.on("change", function (data) {
                console.log("on change", data);
                cardCvv.update({ cvvLength: data.value.cvvLength });
            });
        }
    }, [cardNumber, cardCvv]);

    const initialize = async () => {
        setLoading(true);
        const newcashfree = await load({
            mode: "sandbox", //or production
        });

        setCashfree(newcashfree);
        setLoading(false);
        setActive(true);
    };

    // create card payment mode
    const generateCardPayment = async (onSuccess = noop, onError = noop) => {
        try {
            const options = {
                classes: {
                    base: "my-base",
                },

                fonts: [],
                values: {},
                disabled: false,
                loader: true,
            };
            // Card Number
            let cardNumberOptions = {
                ...options,
                values: {
                    placeholder: "Enter Card Number",
                },
            };
            // Card Number
            let _cardNumber = await cashfree.create(
                "cardNumber",
                cardNumberOptions
            );
            _cardNumber.mount("#cardNumber");

            let cardHolderOptions = { ...options };
            let _cardHolder = cashfree.create("cardHolder", cardHolderOptions);
            _cardHolder.mount("#cardHolder");

            let cardExpiryOptions = {
                ...options,
            };
            let _cardExpiry = cashfree.create("cardExpiry", cardExpiryOptions);
            _cardExpiry.mount("#cardExpiry");

            let cvvOptions = {
                ...options,
            };
            let _cardCvv = cashfree.create("cardCvv", cvvOptions);
            _cardCvv.mount("#cardCvv");

            let saveOptions = {
                values: {
                    label: "Save Card for later",
                },
            };
            let _cardSave = cashfree.create(
                "savePaymentInstrument",
                saveOptions
            );
            _cardSave.mount("#save");

            setCardNumber(_cardNumber);
            setCardHolder(_cardHolder);
            setCardExpiry(_cardExpiry);
            setCardCvv(_cardCvv);
            setCardSave(_cardSave);
            onSuccess();
        } catch (err) {
            console.log({ err });
            onError();
        }
    };

    const openPaymentSession = (
        session,
        returnUrl,
        onSuccess = noop,
        onError = noop
    ) => {
        try {
            if (
                !cardExpiry.isComplete() ||
                !cardHolder.isComplete() ||
                !cardNumber.isComplete() ||
                !cardCvv.isComplete()
            ) {
                console.log("Incompleted", {
                    cardExpiry: cardExpiry.isComplete(),
                    cardHolder: cardHolder.isComplete(),
                    cardNumber: cardNumber.isComplete(),
                    cardCvv: cardCvv.isComplete(),
                });
            }

            cashfree
                .pay({
                    paymentMethod: cardNumber,
                    payInParts: null,
                    savePaymentInstrument: cardSave,
                    redirectTarget: "_blank",
                    redirect: "if_required",
                    paymentSessionId:
                        "session_NrDYXifazO6WsCV18feM5PYIVgfTwYdX67ZV5i7K_HBCpqeWan_JuI3yYLCrskIfBwjZPaqe7NHnL8fSgEH_RuAuUQ5P2PCqQqkrvFtD7kXa",
                    returnUrl: `https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}`,
                })
                .then(function (data) {
                    if (data != null && data.error) {
                        onError(data.error);
                    }
                    onSuccess(console.log("Payment Successful!! CARD"));
                });
        } catch (err) {
            console.log("Session Expired!");
            onError(err);
        }
    };

    const generateUpiQrPayment = async (onSuccess = noop, onError = noop) => {
        try {
            let _qr = cashfree.create("upiQr", {
                values: {
                    size: "13.75rem",
                },
                
                classes: {
                    base: "my-base",
                    complete: "my-complete"
                }
            });
            _qr.mount("#qr");
            setQr(_qr);

            onSuccess();
        } catch (err) {
            console.log({ err });
            onError();
        }
    };

    const openQrPaymentSession = (
        session,
        returnUrl,
        onSuccess = noop,
        onError = noop
    ) => {
        try {
            cashfree
                .pay({
                    paymentMethod: qr,
                    paymentSessionId:
                        "session_ypjIf9dIsT3bQdZ_W_CMKmQYe3lJEU35Z7sVwaEXeVMey86B0sM87t5M6QtLV0JkWFftSAWW16cNvwGPgljBbUtY8t0c04FLkk37juXXfyxT",
                    returnUrl: `https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}`,
                })
                .then(function (data) {
                    if (data != null && data.error) {
                        onError(data.error);
                    }
                    onSuccess();
                });
        } catch (err) {
            console.log(err);
            onError();
        }
    };

    const generateUpiCollectPayment = async (
        onSuccess = noop,
        onError = noop
    ) => {
        try {
            let upiOpt = {
                values: {
                    placeholder: "Enter UPI ID",
                },
            };
            let _upiCollect = cashfree.create("upiCollect", upiOpt);
            _upiCollect.mount("#vpainput");

            setUpiCollect(_upiCollect);

            onSuccess();
        } catch (err) {
            console.log({ err });
            onError();
        }
    };

    const openUpiCollectPaymentSession = (
        session,
        returnUrl,
        onSuccess = noop,
        onError = noop
    ) => {
        try {
            if (!upiCollect.isComplete()) {
                console.log("Incompleted: ", {
                    upiCollect: upiCollect.isComplete(),
                });
            }
            cashfree
                .pay({
                    paymentMethod: upiCollect,
                    paymentSessionId:
                        "session_czm--DCn6aBglosyHwH9hA0EL2kqfTuIc9cJ7yTJDytCjsGBUJ_nWkpzNiQ7DxYU8LS47U2DtwwzdBSHUD4_k1sCuaLvq9DBvtom6O1Hq6bj",
                    returnUrl: `https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}`,
                })
                .then(function (data) {
                    if (data != null && data.error) {
                        onError(data.error);
                    }
                    onSuccess();
                });
        } catch (err) {
            console.log(err);
            onError();
        }
    };

    // console.log(FEATURED_NET_BANKINGS_MAP[0].key.slice(0, -1)); // Printing the bank name

    const generateNetBankingPayment = async (o) => {
        // console.log(o);
        let bank = cashfree.create("netbanking", {
            values: {
                netbankingBankName: o.key,
            },
            style: o.style,
        });
        bank.mount(`#${o.id}`);
        return bank;
    };

    // const generateNetBankingPayment = async (
    //   onSuccess = noop,
    //   onError = noop
    // ) => {
    //   let style = {
    //     base: {
    //       fontSize: "22px",
    //     },
    //   };
    //   let _hdfc = cashfree.create("netbanking", {
    //     values: {
    //       netbankingBankName: "HDFCR",
    //     },
    //     style,
    //   });
    //   _hdfc.mount("#hdfcr");

    //   _hdfc.on("paymentrequested", function () {
    //     console.log("waiting for cs");
    //   });

    //   let _icici = cashfree.create("netbanking", {
    //     values: {
    //       netbankingBankName: "ICICR",
    //     },
    //     style,
    //   });
    //   _icici.mount("#icici");

    //   let _sbi = cashfree.create("netbanking", {
    //     values: {
    //       netbankingBankName: "SBINR",
    //     },
    //     style,
    //   });
    //   _sbi.mount("#sbi");

    //   let _kotak = cashfree.create("netbanking", {
    //     values: {
    //       netbankingBankName: "KKBKR",
    //     },
    //     style,
    //   });
    //   _kotak.mount("#kotak");

    //   let bankObj = {
    //     kotak: _kotak,
    //     sbi: _sbi,
    //     icici: _icici,
    //     hdfc: _hdfc,
    //   };

    //   setHdfc(_hdfc);
    //   setKotak(_kotak);
    //   setSbi(_sbi);
    //   setIcici(_icici);
    // };

    const openNetBankingPaymentSession = (
        comp,
        session = "",
        returnUrl = "",
        onSuccess = noop,
        onError = noop
    ) => {
        try {
            cashfree
                .pay({
                    paymentMethod: comp,
                    paymentSessionId:
                        "session_9Srj2KaKhvn-lfjui1I4GHTa5K3g9atpqsbiBIxnj2apunxaOeKkvRrwB4KnLV1wmL1BbHBlh7llW1JF48BnTH2JEvItIJDMS3vt3K6qHC8J",
                    returnUrl: `https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}`,
                })
                .then(function (data) {
                    if (data != null && data.error) {
                        onError(data.error);
                    }
                    onSuccess();
                });
        } catch (err) {
            console.log(err);
            onError();
        }
    };

    const generateWalletPayment = async (o) => {
        let bank = cashfree.create("wallet", {
            values: {
                provider: o.id,
                phone: "8474090589",
            },
            style: o.style,
        });
        bank.mount(`#${o.id}`);
        return bank;
    };
    const openWalletPaymentSession = (
        comp,
        session = "",
        returnUrl = "",
        onSuccess = noop,
        onError = noop
    ) => {
        try {
            cashfree
                .pay({
                    paymentMethod: comp,
                    paymentSessionId:
                        "session_It4fFC58i_xPBfwhUNz_E6H2ZlW5cdi7JtFfwXIAFqBswYmsmym3JhuFUsA4H_-YTH8I2v9QcgfK6fq6lUvq4UxbVOvpcMEJnGCGfzFA3y7n",
                    returnUrl: `https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}`,
                })
                .then(function (data) {
                    if (data != null && data.error) {
                        onError(data.error);
                    }
                    onSuccess();
                });
        } catch (err) {
            console.log(err);
            onError();
        }
    };

    const contextValue = {
        loading,
        active,
        cashfree,
        cardNumber,
        cardHolder,
        cardExpiry,
        cardCvv,
        qr,
        hdfc,
        sbi,
        kotak,
        icici,
        selected,
        setSelected,
        initialize,
        generateCardPayment,
        openPaymentSession,
        generateUpiQrPayment,
        openQrPaymentSession,
        generateUpiCollectPayment,
        openUpiCollectPaymentSession,
        generateNetBankingPayment,
        openNetBankingPaymentSession,
        generateWalletPayment,
        openWalletPaymentSession,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default CashfreeProvider;
