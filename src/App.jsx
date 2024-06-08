import { useState } from "react";
import InputForm from "./components/InputForm";
import usecurrencyinfo from "./hooks/usecurrencyinfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [time, setTime] = useState(new Date());
  const [rate,setRate]=useState(0);
  const currencyInfo = usecurrencyinfo(from);
  const option = Object.keys(currencyInfo);
  

  const swap = () => {
    setFrom(to);
    setTo(from);
    
  };

  const convert = () => {
    console.log("amount", amount);
    console.log("currency info ", currencyInfo);
    const result = amount * currencyInfo[to];
    const r= 1*currencyInfo[to];
    setRate(r);
    setConvertedAmount(Number(result.toFixed(2)));
    setTime(new Date());
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${"https://images.unsplash.com/photo-1607728285423-a94d41a4d2f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}')`,
      }}
    >
      <h1 className="text-center font-serif font-extrabold text-white text-4xl -mt-16 ">CURRENCY CONVERTER</h1>
      <div className="w-full -mt-24">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputForm
                label="From"
                amount={amount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute font-bold mt-1 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5 transition duration-300 ease-in-out hover:bg-white hover:border-zinc-100 hover:text-black"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <div className="bg-gray-800 p-3 rounded-lg text-sm flex font-bold">
                <div className="w-full">
                  <label className="text-white mb-2 inline-block">To</label>
                  <select
                    className="w-full rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  >
                    {option.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-900 px-4 py-3  rounded-lg font-extrabold border-4 border-blue-900 transition duration-300 ease-in-out hover:text-blue-500 hover:border-blue-500"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            <div className="w-full font-bold mt-3 text-white text-center text-2xl">
              <p>
                {amount} {from.toUpperCase()} = {convertedAmount}{" "}
                {to.toUpperCase()}
              </p>
              <p className="text-sm mt-2 font-semibold">
                Rate - {rate.toFixed(2)} {to.toUpperCase()}
              </p>
            </div>
            <div className="w-full mt-4 text-gray-300 text-sm text-center">
              <p>
                Last Update -{" "}
                {time.toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              {time.toLocaleDateString()}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
