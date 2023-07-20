import React from "react";
import { noop } from "utils";
import { getPaymentOptions } from "utils/constants";
import { AiFillCreditCard, AiFillBank, AiFillWallet } from "react-icons/ai";
import { LuPiggyBank } from "react-icons/lu";
export const PaymentList = ({ onChange = noop }) => {
    const items = getPaymentOptions();

    const renderIcon = (iconClass) => {
        switch (iconClass) {
            case "ri-bank-card-fill":
                return <AiFillCreditCard />;
            case "ri-secure-payment-line":
                return <LuPiggyBank />;
            case "ri-bank-line":
                return <AiFillBank />;
            case "ri-wallet-3-line":
                return <AiFillWallet />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col justify-start rounded-sm border-2 border-r-0 border-pink-600 bg-pink-100 p-4 pl-1 pr-0 align-middle text-pink-600">
            {items.map((o, i) => (
                <div className="flex flex-row items-center rounded-l-md justify-between ml-1 px-4 transition-all hover:bg-white hover:text-pink-400">
                    {renderIcon(o.iconClass)}
                    <div
                        onClick={() => onChange(o.key)}
                        className="w-full pb-2 pl-3 pr-4 pt-2 "
                    >
                        {o.name}
                    </div>
                </div>
            ))}
        </div>
    );
};
