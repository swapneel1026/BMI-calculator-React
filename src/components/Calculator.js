
import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [age, setAge] = useState(0);
  const [weight, Setweight] = useState(0);
  const [gender, setGender] = useState("Select-Gender");
  const [height, Setheight] = useState(Number("0"));
  const [bmiStatus, setbmiStatus] = useState("Waiting...");
  const [bmi, setBmi] = useState(0);

  const genderHandler = (e) => {
    e.preventDefault();
    setGender(e.target.value);
    console.log(e.target.value);
  };
  const resetHandler = () => {
    setAge(0);
    setGender("male");
    setBmi(0);
    setbmiStatus("Waiting");
    Setheight(0);
    Setweight(0);
    document.getElementById("h3").style.color = "black";
  };
  const calculateHandler = () => {
    const bmi = weight / (0.0254 * 0.0254 * (height * height));

    if (gender === "Select-Gender") {
      alert("Please select a gender");
      setBmi("Please select a gender");
    } else {
      if (isNaN(bmi)) {
        alert("Invalid input");
        setBmi("Invalid input");
        resetHandler();
      } else {
        setBmi(bmi);
        if (gender === "male") {
          if (bmi <= 18.5) {
            setbmiStatus("Underweight");
            document.getElementById("h3").style.color = "grey";
          } else if (bmi > 18.5 && bmi <= 24.9) {
            setbmiStatus("Normal Weight");
            document.getElementById("h3").style.color = "green";
          } else if (bmi > 24.9 && bmi <= 29.5) {
            setbmiStatus("OverWeight");
            document.getElementById("h3").style.color = "orange";
          } else if (bmi >= 30) {
            setbmiStatus("Obesity");
            document.getElementById("h3").style.color = "red";
          }
          setAge(0);
          setGender("male");
          Setheight(0);
          Setweight(0);
        } else if (gender === "female") {
          if (bmi < 20.5) {
            setbmiStatus("Underweight");
            document.getElementById("h3").style.color = "grey";
          } else if (bmi > 20.6 && bmi <= 26.9) {
            setbmiStatus("Normal Weight");
            document.getElementById("h3").style.color = "green";
          } else if (bmi > 27 && bmi <= 31) {
            setbmiStatus("OverWeight");
            document.getElementById("h3").style.color = "orange";
          } else if (bmi > 32) {
            setbmiStatus("Obesity");
            document.getElementById("h3").style.color = "red";
          }
          setAge(0);
          setGender("male");
          Setheight(0);
          Setweight(0);
        }
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(203, 203, 203)",
      }}
    >
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        BMI CALCULATOR
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          border: "0.4px solid grey",
          borderRadius: "0.4rem ",
          backgroundColor: "whitesmoke",
          width: "22%",
          height: "16rem",
        }}
      >
        <div className="div">
          <span>Age: </span>
          <input
            type="number"
            placeholder="Age"
            required
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="div">
          <span>Gender: </span>
          <select value={gender} onChange={genderHandler} required>
            <option value="Select-Gender">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="div">
          <span>Height: </span>
          <input
            type="text"
            required
            placeholder="height"
            value={height}
            onChange={(e) => {
              Setheight(e.target.value);
            }}
          />
        </div>
        <div className="div">
          <span>Weight: </span>
          <input
            type="text"
            placeholder="weight"
            required
            value={weight}
            onChange={(e) => {
              Setweight(e.target.value);
            }}
          />
        </div>
        <button
          style={{
            marginTop: "1rem",
            width: "20%",
            position: "relative",
            left: "46%",
          }}
          type="submit"
          onClick={calculateHandler}
        >
          bmi
        </button>
        <button
          style={{
            marginTop: "0.2rem",
            width: "20%",
            position: "relative",
            left: "46%",
          }}
          type="reset"
          onClick={resetHandler}
        >
          reset
        </button>
      </div>

      <div>
        <h3 id="h3">BMI:{bmi}</h3>
        <h4>Result:{bmiStatus}</h4>
      </div>
    </div>
  );
};

export default Calculator;

