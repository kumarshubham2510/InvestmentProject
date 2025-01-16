import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment = userInput.initialInvestment;
  console.log(resultsData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((curr) => {
          const totalInterest =
            curr.valueEndOfYear -
            curr.annualInvestment * curr.year -
            initialInvestment;

          const totalInvestment = curr.valueEndOfYear - totalInterest;

          return (
            <tr>
              <td>{curr.year}</td>
              <td>{formatter.format(curr.valueEndOfYear)}</td>
              <td>{formatter.format(curr.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
