import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const carList = ['Honda', 'Toyota', 'camri'];
const colorList = ['đỏ ', 'xanh lá ', 'cam'];

function App() {
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  const handleColorChange = (event) => {
    const selectedColorName = event.target.value;
    setSelectedCar(previousState => {
      return {
        ...previousState,
        color: selectedColorName,
      };
    });
  };

  const handleCarChange = (event) => {
    const selectedCarName = event.target.value;
    setSelectedCar(previousState => {
      return {
        ...previousState,
        car: selectedCarName,
      };
    });
  };

 
  return (
    <div>
      <div>
        <label>
         lựa chọn xe :
          <select value={selectedCar.car} onChange={handleCarChange}>
            {carList.map((car) => (
              <option key={car} value={car}>
                {car}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
        lựa chọn màu :
          <select value={selectedCar.color} onChange={handleColorChange}>
            {colorList.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        Bạn đã lựa chọn {selectedCar.car} {selectedCar.color} .
      </div>
    </div>
  );
}

export default App;