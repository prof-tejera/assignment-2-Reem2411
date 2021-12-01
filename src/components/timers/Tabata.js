import React, { useContext, useEffect }  from "react";
import Input from "../generic/Input/Input";
import TimerPanel from "../generic/TimerPanel";
import { vars } from '../../utils/helpers';
import { TimerContext } from '../../utils/TimerProvider';
import { useInterval } from '../../utils/hooks';

import './Timers.css'

const Tabata = () => {
  
    // Get states and variables needed
    const {time, running, nRounds, currRound, setTimerType, restTime, setCurrRound,
      setTime, decrement, handleRounds, userInput, timerType, setRest, restInput, setRestTime} = useContext(TimerContext);
    const {tabata} = vars;
  
  useEffect(() => {
    setTimerType(tabata);
    setTime(userInput);
    setRestTime(restInput);
  },[]);
// setRestTime, restInput, setTime, userInput, setTimerType, tabata
  useInterval(() => {
     if (time !== 0 && running === true){
      decrement(time, timerType, false);
    } else if (restTime !== 0 && running === true){
      setRest(true);
      decrement(restTime, timerType, true);
    } else if (time === 0 && running === true){
      handleRounds(currRound, nRounds); 
      if (currRound !== nRounds){
        setCurrRound(currRound+1);
      }  
    } 
  }, 1000);   
  
  return (
    <TimerPanel
      input={<>
        <Input
          placeholder="Work Time (s)"
          type="work"
          value={time}
        />
        <Input
          placeholder="Rest Time (s)"
          type="rest"
          value={restTime}
        />              
        <Input
          placeholder="Rounds (s)"
          type="rounds"
          value={nRounds}
        />
      </>
      }
      >
    </TimerPanel>
  );
}

export default Tabata;
