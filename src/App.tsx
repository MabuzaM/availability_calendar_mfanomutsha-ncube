import React, { useState } from 'react';
import './App.scss';
import calendarItems from './data/data.json';
import { Timetable } from './components/Timetable/Timetable';
import Slider from './components/Slider/Slider';

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const setSliderValue = (value: number) => {
    setCurrentValue(value);
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <main className="App__main">
        <div className="App__slider">
          <div className="App__slider--value">
            {`${currentValue} HR/s`}
          </div>
          <Slider
            onSetSliderValue={setSliderValue}
            currentValue={currentValue}
          />
        </div>

        <div className="App__timetable">
          <Timetable
            calendarItems={calendarItems}
            currentSliderValue={currentValue}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
