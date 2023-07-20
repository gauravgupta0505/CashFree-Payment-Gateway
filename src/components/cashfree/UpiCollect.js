import React from "react";
import { useCashfree } from "hooks";
import FormControlDiv from "components/common/FormControlDiv";
import { Button } from "components/common/Button";
function UpiCollect() {
  const { openUpiCollectPaymentSession } = useCashfree();
  const handleClick = () => {
    openUpiCollectPaymentSession();
  };
  return (
    <>
      <div class="card w-96">
        <div class="card-body pb-0">
          <div class="flex flex-col flex-wrap">
            <h4></h4>
            <div class="flex flex-col flex-wrap">
              <div
                id="vpainput"
                class=" block w-full py-2 px-3 font-base font-normal border-2 border-black rounded-md"
              ></div>
            </div>
          </div>
          <br />
          <div class="flex flex-row flex-wrap justify-center items-center">
            <div class="flex flex-col flex-wrap justify-center items-center">
              <button
                id="pay-collect"
                onClick={handleClick}
                className="align-middle justify-center border-pink-400 border-2 rounded-md p-1 hover:bg-pink-400 hover:border-white hover:text-white"
              >
                Send Collect Request
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default UpiCollect;
