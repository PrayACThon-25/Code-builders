
import React from "react";
import SoilWeatherCard from "./components/SoilWeatherCard";
import CropFertilizerCard from "./components/CropFertilizerCard";
import PestDetectionCard from "./components/PestDetectionCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Smart Farming Dashboard</h1>
      <SoilWeatherCard />
      <CropFertilizerCard />
      <PestDetectionCard />
    </div>
  );
}

export default App;
