import React, { useState, useEffect } from "react";
import './../styles/App.css';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Calculate sum asynchronously using setTimeout
    const timeoutId = setTimeout(() => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    }, 0);

    // Cleanup timeout on unmount or before next effect
    return () => clearTimeout(timeoutId);
  }, [numbers]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const parsedNumber = parseInt(inputValue, 10);
      if (!isNaN(parsedNumber)) {
        setNumbers([...numbers, parsedNumber]);
        setInputValue("");
      }
    }
  };
  
  return (
    <div id="main">
      <input
        id="number-input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a number"
      />
      <p id="sum-result">{sum}</p>
    </div>
  );
}

export default SumCalculator;