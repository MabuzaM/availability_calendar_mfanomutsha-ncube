import React, { FC } from 'react';
import ReactSlider from 'react-slider';
import './Slider.scss';

interface SliderProps {
  onSetSliderValue: (value: number) => void;
  currentValue: number;
}
    
const Slider:FC<SliderProps> = ({ onSetSliderValue, currentValue }) => {
  return (
    <ReactSlider 
      className="Slider"
      thumbClassName="Slider__thumb"
      trackClassName="Slider__track"
      markClassName="Slider_mark"
      marks={1}
      min={0}
      max={5}
      value={currentValue}
      onChange={(value) => onSetSliderValue(value)}
    />
  );
};
    
export default Slider;
