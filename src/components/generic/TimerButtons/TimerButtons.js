
import { useContext  } from 'react';
import { TimerContext } from '../../../utils/TimerProvider.js';
import Button from '../Button/Button.js';
import './TimerButtons.css'

const TimerButtons = () => {

  // Get states from context 
  const {running, handleStart, handlePause, pause, handleDone,
     handleReset, timerType, done, userInput} = useContext(TimerContext);

  // Create variables for buttons 
  const Start = <Button 
                  text="Start" 
                  onClick = {() => {
                    handleStart();
                  }}
                  />

  const Pause = <Button 
                  text="Pause" 
                  onClick = {() => {
                    handlePause();
                  }}
                  />
  const Reset = <Button 
                  text="Reset" 
                  onClick = {() => {
                    handleReset(timerType, userInput);
                  }}
                  />
  const Done = <Button 
                  text="Done" 
                  onClick = {() => {
                    handleDone();
                  }}
                  />
  const Resume = <Button 
                  text="Resume" 
                  onClick = {() => {
                    handleStart();
                  }}
                  />

    return (
      <div className="ButtonsPanel">
        <div className="TimerButton">
          {!running && !pause && !done && Start}
          {!running && pause && !done && Resume}
          {running && Pause}
          {running && Done}
          {Reset}
        </div>
      </div>

    );
}
  
export default TimerButtons;
  