import React, { useId } from 'react';

function InputForm({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const amountId = useId();

    return (
        <div className={` bg-gray-800 p-3 rounded-lg text-sm flex ${className} font-bold`}>
            <div className="w-full">
                <label className="text-white font-bold mb-2 inline-block" htmlFor={amountId}>
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-white  py-1.5 mb-2 px-2 rounded-lg"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
                <select
                    className="w-full rounded-lg px-1 py-1  cursor-pointer outline-none"
                    value={selectedCurrency}
                    disabled={currencyDisabled}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputForm;
