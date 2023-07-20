import { noop } from "utils";
import { load } from "@cashfreepayments/cashfree-js";
import './cardPayment.css'


export const createCardUI = async (onSuccess = noop, onError = noop) => {
  const cashfree = await load({
    mode: "sandbox", //or production
  });

  //   let version = cashfree.version();

  /*First decalare classes in css, it takes classes and mounts it to the DOM*/

            
  const options = {
    classes: {
      base:  "my-base",
    //   complete: "cf-1",
    //   empty: "cf-1",
    //   focus: "cf-1",
    //   invalid: "cf-1",
    //   disabled: "cf-1",
    },
    fonts: [],
    // style: {
    //   base: {
    //     fontSize: "15px",
    //     border: "1px solid black",
    //     borderRadius: "2px",
    //     margin: "4px 1px",
    //     padding: "8px",
    //     overflow: "auto"
    //   },
    // },
    values: {},
    disabled: false,
    loader: true,
  };

  // Card Number
  let cardNumber = cashfree.create("cardNumber", options);
  let cardHolder = cashfree.create("cardHolder", options);
  let cardExpiry = cashfree.create("cardExpiry", options);
  let cardCvv = cashfree.create("cardCvv", options);

  cardNumber.mount("#cf-cardNumber");
  cardHolder.mount("#cf-cardHolder");
  cardExpiry.mount("#cf-cardExpiry");
  cardCvv.mount("#cf-cardCvv");


  return cardNumber;
};

export const createUpiUI = async () => {
  const cashfree = await load({
    mode: "sandbox", //or production
  });

  //   let version = cashfree.version();
  let style = { 
    base: {
      fontSize: "22px",
    },
  };
  const options = {
    // classes: {
    //   // base: "",
    //   // complete: "cf-1",
    //   // empty: "cf-1",
    //   // focus: "cf-1",
    //   // invalid: "cf-1",
    //   // disabled: "cf-1",
    // },
    fonts: [],
    style: {
      base: {
        fontSize: "22px",
      },
    },
    values: {},
    disabled: false,
    loader: true,
  };
  const allAppNodes = document.getElementsByClassName("icon");
  for (let i = 0; i < allAppNodes.length; i++) {
    const element = allAppNodes[i];

    let upiApp = element.getAttribute("id");
    let component = cashfree.create("upiApp", {
      values: {
        upiApp: upiApp,
      },
      style,
    });
    component.mount("#cf-" + upiApp);
    // component.on("click", function () {
    //   // function to initialize payment
    //   initPay(component);
    // });
    component.on("loaderror", function (data) {
      console.log(data.error.message);
    });
    // element.parentNode.addEventListener("click", function () {
    //   // function to initialize payment
    //   initPay(component);
    // });
  }
};
