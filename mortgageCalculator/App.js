import { useRef, useState } from "react";

export default function App() {
  const amountRef = useRef(0);
  const termRef = useRef(0);
  const interestRef = useRef(0);
  const [loanData, setLoanData] = useState({
    mortgage: "",
    total: "",
    apr: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = amountRef.current.value;
    const term = termRef.current.value;
    const interest = interestRef.current.value;
    const months = Math.round((term * 12) * 100) / 100;
    const apr =  Math.round((interest / 12) * 100) / 100;
    const total = Math.round((calculateMortgage(amount, apr, months)) * 100) / 100;
    setLoanData({
      mortgage: total - apr,
      total,
      apr,
    });
  };

  const calculateMortgage = (P, I, N) => {
    result = (P * Math.pow(I * (1 + I), N)) / (Math.pow(1 + I, N) - 1);
    alert("Your mortgage is " + result);
    return result;
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form">
        <label>Loan Amount</label>
        <input name="amount" type="number" step="any" ref={amountRef} />
        <label>Loan Term (in years)</label>
        <input name="term" type="number" step="any" ref={termRef} />
        <label>Interest Rate (%)</label>
        <input name="interest" type="number" step="any" ref={interestRef} />
        <input type="submit" value="Calculate" />
      </form>
      <div>
        <p>Monthly payment: {loanData.morgage}</p>
        <p>Total payment amount: {loanData.total}</p>
        <p>Total interest paid: {loanData.apr}</p>
      </div>
    </div>
  );
}
