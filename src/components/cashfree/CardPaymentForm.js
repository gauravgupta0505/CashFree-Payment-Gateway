import { Button } from "components/common/Button";
import { Input } from "components/common/Input";
import { useApp, useCashfree } from "hooks";
import React, { useEffect, useState } from "react";

// import { _obj } from "utils/defaults";

export const CardPaymentForm = () => {
  const { loading, active, generateCardPayment, openPaymentSession } =
    useCashfree();

  useEffect(() => {
    // initialize card inputs
    if (active) {
      generateCardPayment();
    }
  }, [active]);

  const handleClick = async () => {
    openPaymentSession();
  };

  return (
    <div>
      <div class="ml-auto mr-auto flex flex-col align-top text-textColor">
        <h1 class="text-md ml-auto mr-auto mb-4 font-bold text-lg">Pay Using Card</h1>
        <div id="pay-card" class="ml-auto mr-auto w-full max-w-fit">
          <div id="cardNumber" class="base"></div>
          <div id="cardHolder" class="base"></div>
          <div id="cardExpiry"></div>
          <div id="cardCvv"></div>
          <div id="save" class="base"></div>
          <div class=" ml-auto mr-auto w-fit">
            <Button id="pay-btn" onClick={handleClick}>
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
