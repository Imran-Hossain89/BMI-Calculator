import React, { useState } from "react";
import "./Style.css";

function Home() {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const bmiCal = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("Please fill both Weight & Height value");
    }

    let bmi = (weight / (height * height)) * 703;
    setBmi(bmi.toFixed(2));

    if (bmi < 25) {
      setMessage("You are underweight! Please take care of your health.");
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("You are healthy");
    } else {
      setMessage("You are over Weight! Please take care of your health.");
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div>
        <h2 className="headline">BMI Calculator</h2>
        <form onSubmit={bmiCal} className="form">
          <div className="input-1">
            <label className="level-1">Weight(Ibs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="input-2">
            <label className="level-2">Height(inch)</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="button">
            <button type="submit" className="btn-1">
              Submit
            </button>
            <button onClick={reload} className="btn-2">
              Reload
            </button>
          </div>

          <div>
            <h3 className="bmi-result">Your BMI is:{bmi}</h3>
            <p className="bmi-message">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
