import { Button } from "components/common/Button";
import React, { useEffect, useRef } from "react";
import { createUpiUI } from "services/cashfree";

import UpiQr from "./UpiQr";
import { useCashfree } from "hooks";
import UpiCollect from "./UpiCollect";
// import { _obj } from "utils/defaults";
// import { Input } from "components/common/Input";
// import { useApp } from "hooks";

export const UpiPaymentForm = () => {
  // const { paymentGateway } = useApp();
  const { active, generateUpiQrPayment, generateUpiCollectPayment } =
    useCashfree();
  useEffect(() => {
    if (active) {
      generateUpiQrPayment();
      generateUpiCollectPayment();
      // initialize inputs
      createUpiUI();
    }
  }, []);

  return (
    <>
      <div className="m-2 flex flex-col my-4 mx-auto items-center justify-center p-4">
        <div>
          <UpiQr />
        </div>
        <div className="">OR</div>
        <div>
          <UpiCollect />
        </div>
      </div>
    </>
  );
};
