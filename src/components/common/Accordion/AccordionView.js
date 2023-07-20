import React, { useState, useEffect, useRef } from "react";
import AccordionLayout from "./AccordionLayout/AccordionLayout";
import {
  CARD_PAYMENT_KEY,
  UPI_PAYMENT_KEY,
  NET_BANKING_PAYMENT_KEY,
  WALLET_PAYMENT_KEY,
  CASHFREE_PG,
  getPaymentOptions,
  renderIcon,
} from "utils/constants";

import { useCashfree } from "hooks";

import { CashfreeView } from "../UIView";

const AccordionView = ({ gateway }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { initialize, selected, setSelected } = useCashfree();
  // const [selected, setSelected] = useState(CARD_PAYMENT_KEY);

  const paymentOptions = getPaymentOptions();

  const handleChange = (selectedOption) => {
    console.log("CLICKED");
    setSelected(selectedOption);
  };

  useEffect(() => {
    initialize();
  }, [selected]);

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center align-middle md:hidden">
        <div className="ml-auto mr-auto flex h-3/4 w-3/4 flex-row justify-center align-middle">
          <div className="flex flex-col items-center">
            {paymentOptions.map((o, i) => (
              <div key={o.key} onClick={() => handleChange(o.key)}>
                <AccordionLayout
                  title={o.name}
                  index={i}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                >
                  {gateway === CASHFREE_PG && (
                    <CashfreeView selected={selected} />
                  )}
                </AccordionLayout>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionView;
