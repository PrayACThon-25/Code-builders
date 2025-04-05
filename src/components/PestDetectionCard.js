import React, { useState } from "react";

function PestDetectionCard() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    alert("Image upload & pest detection logic goes here.");
  };

  const styles = {
    card: {
      width: "320px",
      margin: "40px auto",
      padding: "20px",
      border: "2px solid #ddd",
      borderRadius: "12px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    heading: {
      marginBottom: "20px",
      fontSize: "20px",
      color: "#333"
    },
    fileInput: {
      marginBottom: "15px",
      padding: "8px",
      fontSize: "14px"
    },
    button: {
      padding: "10px 20px",
      fontSize: "15px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s ease"
    },
    buttonHover: {
      backgroundColor: "#218838"
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>🦠 Pest & Disease Detection</h2>
      <input type="file" onChange={handleImageChange} style={styles.fileInput} />
      <br />
      <button onClick={handleSubmit} style={styles.button}>
        Detect Pest
      </button>
    </div>
  );
}

export default PestDetectionCard;
