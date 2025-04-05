import React, { useState } from "react";

function SoilWeatherCard() {
  const [soilData, setSoilData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: ''
  });

  const handleChange = (e) => {
    setSoilData({ ...soilData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Irrigation & sowing suggestion logic goes here.");
    console.log(soilData);
  };

  const cardStyle = {
    backgroundColor: "#e6f9ec",
    border: "2px solid #c2e0c6",
    borderRadius: "12px",
    padding: "20px",
    width: "300px",
    margin: "20px auto",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', sans-serif"
  };

  const headingStyle = {
    marginBottom: "15px",
    fontSize: "1.3rem",
    color: "#2c662d"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #b0d4b3"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2e7d32",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>🌱 Soil & Weather Analysis</h2>
      <input
        style={inputStyle}
        name="nitrogen"
        placeholder="Nitrogen (N)"
        onChange={handleChange}
        value={soilData.nitrogen}
      />
      <input
        style={inputStyle}
        name="phosphorus"
        placeholder="Phosphorus (P)"
        onChange={handleChange}
        value={soilData.phosphorus}
      />
      <input
        style={inputStyle}
        name="potassium"
        placeholder="Potassium (K)"
        onChange={handleChange}
        value={soilData.potassium}
      />
      <input
        style={inputStyle}
        name="ph"
        placeholder="pH Value"
        onChange={handleChange}
        value={soilData.ph}
      />
      <button
        style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1b5e20"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#2e7d32"}
        onClick={handleSubmit}
      >
        Get Suggestions
      </button>
    </div>
  );
}

export default SoilWeatherCard;
