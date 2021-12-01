import React, { useContext, useEffect } from 'react';
import { useInterval } from '../../utils/hooks';
import Input from "../generic/Input/Input";
import TimerPanel from "../generic/TimerPanel";
import { vars } from '../../utils/helpers';
import { TimerContext } from '../../utils/TimerProvider';
import './Timers.css'

const Stopwatch = () => {

  // Get states and variables needed
  const {time, userInput, running, setTimerType, 
    setTime, timerType,  handleDisplayTime, 
    setRunning, setDone} = useContext(TimerContext);
  const {stopwatch} = vars;
  
  useEffect(() => {
    setTimerType(stopwatch);
  }, [timerType, setTimerType, stopwatch]);

  useInterval(() => {
    if (time < userInput && running === true){
      handleDisplayTime(time, timerType);
      setTime(time + 1);
    } else if (time === userInput && running === true ){
      setDone(true);
      setRunning(false);
    }else {
      setRunning(false);
    }
  }, 1000);   

  
  return (
      
      <TimerPanel
      input={<Input
        type="work"
        placeholder="End Time (s)"
        value={time}
        />}
      >
      </TimerPanel>
  );

}

export default Stopwatch;
