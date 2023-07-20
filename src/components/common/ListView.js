import { CardPaymentForm } from "components/cashfree/CardPaymentForm";
import React, { useEffect, useRef, useState } from "react";
import { CARD_PAYMENT_KEY, CASHFREE_PG } from "utils/constants";
import { PaymentList } from "./PaymentList";
import { UpiPaymentForm } from "components/cashfree/UpiPaymentForm";
import { useCashfree } from "hooks";
import { CashfreeView } from "./UIView";

function ListView({ gateway }) {
  const { initialize, selected, setSelected } = useCashfree();
  const paymentContainerRef = useRef();

  // const { theme } = useTheme();
  const handlePaymentOptions = (value) => {
    setSelected(value);
  };


  return (
    <div>
      <div className="hidden h-screen w-screen flex-col justify-center align-middle md:flex">
        <div className="ml-auto mr-auto flex h-3/4 w-3/4 flex-row justify-center align-middle">
          <PaymentList selected={selected} onChange={handlePaymentOptions} />

          {/* Wrapper for Payment Option Display */}
          <div
            ref={paymentContainerRef}
            className={`border-light-100 flex w-1/2 flex-col justify-start overflow-auto rounded-sm border-2 border-l-0 p-4 align-middle`}
          >
            {gateway === CASHFREE_PG && <CashfreeView selected={selected} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListView;
