import { CardPaymentForm } from "components/cashfree/CardPaymentForm";
import React, { useEffect, useRef, useState } from "react";
import {
  CARD_PAYMENT_KEY,
  UPI_PAYMENT_KEY,
  NET_BANKING_PAYMENT_KEY,
  WALLET_PAYMENT_KEY,
} from "utils/constants";

import { PaymentList } from "./PaymentList";
import { UpiPaymentForm } from "components/cashfree/UpiPaymentForm";
import { useCashfree, useTheme } from "hooks";
import NetBankingPaymentForm from "components/cashfree/NetBankingPaymentForm";
import WalletPaymentForm from "components/cashfree/WalletPaymentForm";
import AccordionView from "./Accordion/AccordionView.js";
import ListView from "./ListView";

export const CashfreeView = ({ selected }) => {
  const { initialize } = useCashfree();
  // const { theme } = useTheme();
  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <div>{selected === CARD_PAYMENT_KEY && <CardPaymentForm />}</div>
      <div>{selected === UPI_PAYMENT_KEY && <UpiPaymentForm />}</div>
      <div>
        {selected === NET_BANKING_PAYMENT_KEY && <NetBankingPaymentForm />}
      </div>
      <div>{selected === WALLET_PAYMENT_KEY && <WalletPaymentForm />}</div>
    </>
  );
};
// Desktop View
//Mobile view

export const UIView = ({ gateway }) => {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobileView = windowSize[0] <= 768;

  return isMobileView ? (
    <AccordionView gateway={gateway} />
  ) : (
    <ListView gateway={gateway} />
  );
};
