import React, { useState, useEffect } from "react";
import { useCashfree } from "hooks";
import { FEATURED_WALLET_MAP } from "utils/constants";
function WalletPaymentForm() {
  const { generateWalletPayment, openWalletPaymentSession } = useCashfree();
  // UI component
  const [featuredWallets, setFeaturedWallets] = useState({});
  useEffect(() => {
    const _tempObj = {};
    FEATURED_WALLET_MAP.map(async (o) => {
      let wallet = await generateWalletPayment(o);
      _tempObj[o.id] = wallet;
    });
    setFeaturedWallets(_tempObj);
    
  }, []);

  const handleClick = (w) => {
    console.log("CLICKED");

    openWalletPaymentSession(w);
  };
  return (
    <div>
      <div class="col col-lg-4 col-sm-10 overflow-auto">
        <div class="overflow-auto ">
          <div class="relative flex flex-col min-w-0 break-words bg-white bg-clip-border border-1 border-solid border-opacity-10 rounded-md w-full">
            <div class="card-body flex flex-col my-4 mx-auto pb-0 overflow-auto items-center">
              <h5 class="card-title mx-auto text-lg font-bold">Select Wallet</h5>

              <div class="row w-full flex flex-wrap flex-row overflow-auto">
                {FEATURED_WALLET_MAP.map((o, i) => (
                    <div className=" w-full md:w-1/4 p-1 m-1 md:p-4 md:m-4 bg-slate-50 shadow-md" onClick={() => handleClick(featuredWallets[o.id])} bfor={o.id}>
                        <div id={o.id} class="icon walletmount"></div>
                        <div class="btext mt-2 inline lg:block">{o.key}</div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletPaymentForm;
