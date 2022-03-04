import React, { useState, useEffect } from "react";
import "./styles.modules.css";
import down from "../../asset/images/down.png";

import SelectCommodity from "./SelectCommodity";
import { data } from "autoprefixer";

export const TradePage = () => {
  const [commodity, setCommodity] = useState("");

  const pull_data = (data) => {
    setCommodity(data);
  };

  const [Inputs, setInputs] = useState({
    amount: "",
  });

  const { amount } = Inputs;

  const onChange = (e) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(amount);
  }, [Inputs]);

  const onSubmitBuy = async (e) => {
    e.preventDefault();
    try {
      const body = { amount };
      const response = await fetch(
        `http://157.245.57.54:5000/buy/${commodity}`,
        {
          method: "PUT",
          headers: {
            token: localStorage.token,
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();
      console.log(parseRes);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmitSell = async (e) => {
    e.preventDefault();
    try {
      const body = { amount };

      const response = await fetch(
        `http://157.245.57.54:5000/sell/${commodity}`,
        {
          method: "PUT",
          headers: {
            token: localStorage.token,
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();
      console.log(parseRes);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col pb-4 mx-12 mt-8 mb-4 md:flex-row place-content-evenly">
        <div className="flex flex-row">
          <SelectCommodity func={pull_data} />
          <div className="w-56 mx-2 ">
            <div className="min-w-[10em] my-2 mx-2 p-2 flex gap-4 m-auto bg-[#13407B] drop-shadow rounded-xl ">
              <div className="bg-[#84C7EF] text-center rounded-md m-auto w-full">
                <p className="font-bold text-white">Price Index</p>
                <div className="inline-flex flex-row justify-center">
                  <img src={down} className="w-4 mr-1" />
                  <p className="text-xl font-bold text-red-600">2516.56</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full mx-2">
            <div className="my-2 mx-2 p-2 w-64 h-[5.1em] m-auto bg-[#13407B] drop-shadow rounded-xl ">
              <input
                placeholder="Insert Amount"
                name="amount"
                value={amount}
                onChange={(e) => onChange(e)}
                className="w-full h-full p-1 px-2 m-auto text-xl font-bold text-center text-gray-800 rounded-md outline-none appearance-none placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="mx-2 p-3 flex gap-4 m-auto bg-[#13407B] drop-shadow rounded-xl ">
            <form onSubmit={onSubmitBuy}>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-sm px-7 py-2.5 text-center font-bold"
              >
                Buy
              </button>
            </form>
            <form onSubmit={onSubmitSell}>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800  rounded-lg text-sm px-7 py-2.5 text-center font-bold"
              >
                Sell
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="h-full mx-20 mt-5 bg-[#075F93] rounded-lg">
          <div className="flex flex-row">
            <p className="flex-grow p-6 ml-8 text-3xl font-bold text-white ">
              Charts Here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
