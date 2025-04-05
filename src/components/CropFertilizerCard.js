import React, { useState } from "react";

function CropFertilizerCard() {
  const [crop, setCrop] = useState("");

  const handleSubmit = () => {
    if (!crop) {
      alert("Please select a crop first.");
    } else {
      alert(`Fertilizer recommendation for ${crop} goes here.`);
    }
  };

  return (
    <div className="card" style={styles.card}>
      <h2>🌾 Crop & Fertilizer Recommendation</h2>
      <select value={crop} onChange={(e) => setCrop(e.target.value)} style={styles.select}>
        <option value="">Select Crop</option>
        <option value="Rice">Rice</option>
        <option value="Wheat">Wheat</option>
        <option value="Maize">Maize</option>
      </select>
      <button onClick={handleSubmit} style={styles.button}>Get Fertilizer Suggestion</button>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "300px",
    margin: "20px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CropFertilizerCard;
