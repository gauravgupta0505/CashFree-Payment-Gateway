import { useCashfree } from "hooks";
import React from "react";

function UpiQr() {
  const { openQrPaymentSession } = useCashfree();
  const handleClick = () => {
    openQrPaymentSession();
  };
  return (
    <div class="overflow-y-auto">
      <div class="card w-72">
        <div class="flex flex-col items-center justify-center pb-0">
          <h5 class="mb-3 flex flex-col justify-center text-base font-bold">
            <button
              class="justify-center rounded-md border-2 border-pink-400 p-1 align-middle hover:border-white hover:bg-pink-400 hover:text-white"
              id="showqr"
              type="button"
              onClick={handleClick}
            >
              Show QR
            </button>
            <div className="flex flex-wrap text-xs mt-2 font-normal text-center">
              Please click the button to generate a QR for the payment
            </div>
          </h5>

          <div class="flex flex-col items-center w-72 ml-auto mr-auto">
            <div class="bank col w-72 overflow-auto" bfor="qr">
              <div id="qr" class="icon qrmount w-72"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpiQr;
