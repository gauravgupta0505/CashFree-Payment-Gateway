import React, { useEffect, useState } from "react";
import { useCashfree } from "hooks";
import { NET_BANKINGS_MAP } from "utils/constants";
import { Button } from "components/common/Button";

function NetBankingPaymentForm() {
  const { generateNetBankingPayment, openNetBankingPaymentSession } =
    useCashfree();

  const [featuredNetBankings, setFeaturedNetBankings] = useState({});
  const [selectedNetBanking, setSelectedNetBanking] = useState(
    "AU Small Finance Bank"
  );

  useEffect(() => {
    const _tempObj = {};
    NET_BANKINGS_MAP.map(async (o) => {
      let netBanking = await generateNetBankingPayment(o);
      _tempObj[o.name.toLowerCase()] = netBanking;
    });
    console.log(_tempObj);
    setFeaturedNetBankings(_tempObj);
  }, [selectedNetBanking]);

  const handleClick = (bank) => {
    console.log("CLICKED");
    openNetBankingPaymentSession(bank);
  };

  const findBank = (mp, bankToFind) => {
    return mp.find((obj) => obj.name === bankToFind);
  };

  const getInitialBanksToRender = () => {
    const hdfc = findBank(NET_BANKINGS_MAP, "HDFC Bank - Retail Banking");
    const sbi = findBank(
      NET_BANKINGS_MAP,
      "State Bank of India - Retail Banking"
    );
    const kotak = findBank(NET_BANKINGS_MAP, "Kotak Mahindra Bank");
    const icici = findBank(NET_BANKINGS_MAP, "ICICI Bank");

    return [hdfc, sbi, kotak, icici];
  };

  const foundObject = findBank(NET_BANKINGS_MAP, selectedNetBanking);
  const initialBanksToRender = getInitialBanksToRender();
  return (
    <div>
      <div className="col w-full">
        <div className="">
          <div className="border-1 relative flex w-full min-w-0 flex-col break-words rounded-md border-solid border-opacity-10 bg-white bg-clip-border">
            <div className="flex w-full shrink grow basis-auto flex-col px-4 py-4 pb-0">
              <h5 className="mx-auto mb-2 align-middle text-lg font-bold">
                Select Bank
              </h5>
              <div className="flex w-full flex-row flex-wrap justify-evenly p-2">
                {initialBanksToRender.map((o, i) => (
                  <div
                    className="mx-4 my-4 w-1/3 bg-slate-50 p-4 shadow-md"
                    onClick={() =>
                      handleClick(featuredNetBankings[o.name.toLowerCase()])
                    }
                  >
                    <div
                      className="bank w-1/2 grow basis-auto"
                      key={o.id}
                      bfor={o.name.toLowerCase()}
                    >
                      <div id={o.id} className="icon"></div>
                      <div className="btext mt-2">{o.name}</div>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              <div className="mx-auto">
                <div className="item-center flex w-full flex-col flex-wrap justify-start">
                  <h5 className="my-4 font-bold">Other Banks</h5>
                  <select
                    className="my-4 w-4/5 rounded-md border-2 border-black p-2"
                    onChange={(e) => {
                      setSelectedNetBanking(e.target.value);
                    }}
                  >
                    {NET_BANKINGS_MAP.map((o, i) => (
                      <option value={o.name} className="">
                        {o.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="m-4 flex w-3/4 flex-row items-center justify-between bg-slate-50 p-4 shadow-md">
                  <div
                    className="bank w-1/2 basis-auto"
                    key={foundObject.id}
                    bfor={foundObject.name.toLowerCase()}
                  >
                    <div id={foundObject.id} className="icon"></div>
                    <div className="btext mt-2">{foundObject.name}</div>
                  </div>
                  <div className="py-auto">
                    <Button
                      onClick={() =>
                        handleClick(
                          featuredNetBankings[selectedNetBanking.toLowerCase()]
                        )
                      }
                    >
                      {" "}
                      Proceed
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetBankingPaymentForm;

//NETBANKING
// Wallet
