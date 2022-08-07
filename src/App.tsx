import React, { useState } from 'react';
import './App.scss';
import calendarItems from './data/MOCK_DATA.json';
import { Timetable } from './components/Timetable/Timetable';
import Slider from './components/Slider/Slider';

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [time, setTime] = useState(9);
  const setSliderValue = (value: number) => {
    setCurrentValue(value);
  }

  return (
    <div className="App">
      <header className="App__header">
        <h1>Availability Calendar</h1>
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

        <div className="App__time">
          <label htmlFor="time" className="App__time--label">
            Enter the time to book: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="App__time--input"
              id="time"
              value={time}
              type="text"
              placeholder="Enter time to book"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTime(+event.target.value)}
            />
          </label>
        </div>

        <div className="App__timetable">
          <Timetable
            calendarItems={calendarItems}
            currentSliderValue={currentValue}
            time={time}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
