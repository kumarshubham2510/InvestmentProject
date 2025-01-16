import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevValue) => {
      return { ...prevValue, [inputIdentifier]: +newValue };
    });
  };

  let isInputValid = userInput.duration >= 1;
  return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isInputValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {isInputValid && <Results userInput={userInput} />}
    </div>
  );
}

export default App;
