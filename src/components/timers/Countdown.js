// import React from "react";
import React, { useContext, useEffect } from 'react';
import { useInterval } from '../../utils/hooks';
import Input from "../generic/Input/Input";
import TimerPanel from "../generic/TimerPanel";
import { vars } from '../../utils/helpers';
import { TimerContext } from '../../utils/TimerProvider';
import './Timers.css'


const Countdown = () => {

  // Get states from context 
  const {time, running,
     setTimerType, setTime, decrement, 
      userInput, timerType, setRunning, setDone} = useContext(TimerContext);
  const {countdown} = vars;

  // Countdown functionality 
  useEffect(() => {
    setTimerType(countdown);
    setTime(userInput);
  }, [timerType, userInput, countdown, setTime, setTimerType]);


  useInterval(() => {
    if (time !== 0 && running === true ){
      decrement(time, userInput, timerType);
    } else if (time === 0 && userInput !== 0 && running === true ){
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
              value={time}
              placeholder="Work Time (s)"
              />}
      >
      </TimerPanel>
  );
}

export default Countdown;
