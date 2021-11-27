import { vars } from "./helpers";
import React, {useState} from 'react';
import { secondsToTime } from "./helpers";

export const TimerContext = React.createContext({});

const TimerProvider = ({ children }) => {
  const {stopwatch, tabata} = vars; 

  // Moving all states in individual timers to here 
  const [ timerType, setTimerType] = useState(stopwatch); // Set type of timer (XY, Tabata, Countdown or Stopwatch) default is Countdown
  const [ running, setRunning ] = useState(false); // Keep track of which timer is running 
  const [ time, setTime ] = useState(0); // Actual running time 
  const [ userInput, setUserInput] = useState(0);  // work time
  const [ showingTimer, setShowingTimer] = useState("0:0:0");
  const [ pause, setPause] = useState(false);
  const [ done, setDone] = useState(false);
  const [ nRounds, setNRounds ] = useState(1); // Tabata/XY
  const [ currRound, setCurrRound ] = useState(1); // Tabata/XY
  const [ restTime, setRestTime ] = useState(0); // Tabata
  const [ restInput, setRestInput] = useState(0);// Tabata
  const [ rest, setRest ] = useState(false); 

  // Decrementing 
  const decrement = (time, userInput, timerType) => {
    handleDisplayTime(time, userInput, timerType);
    if(timerType === tabata && rest === true){
      setRestTime(time-1);
    } else if (rest === false ) {
      setTime(time-1);
    }
  }

  const handleDisplayTime = (time, timerType, userInput) => {
    const timeHMS = secondsToTime(time ? time : 0)
    setShowingTimer(timeHMS);
    if(timerType === tabata && rest === true){
      setRestTime(time);
    } else if (rest === false ){
      setTime(time);
    }
  }

  const handleStart = () => {
    setRunning(true);
  }

  const handlePause = () => {
    setPause(true);
    setRunning(false); 
  }

  const handleDone = () => {
    setDone(true);
    setRunning(false);
  }
  const handleReset = (timerType, userInput) => {
   switch (timerType){
      case stopwatch:
        setTime(0);
        break;
      default:
        setTime(userInput);
        setCurrRound(1);  
    }
    setRunning(false); 
    setPause(false);
    setDone(false); 
    setRestTime(restInput);   
    setRest(false);    
  }

  const handleRounds = (currRound, nRounds) => {
    if (currRound < nRounds){
      setTime(userInput);
    } else {
      setDone(true);
      setRunning(false);
    }
  }

  return (
    <TimerContext.Provider
      value={{ 
        timerType,
        running,
        time, 
        setRestTime, 
        restTime, 
        rest,
        restInput, 
        setRestInput,
        setRest,
        nRounds,
        setNRounds,
        currRound, 
        setCurrRound,
        decrement, 
        setTimerType,
        setTime, 
        handleStart,
        handlePause, 
        handleDone, 
        handleReset,
        userInput, 
        setUserInput, 
        handleDisplayTime,
        showingTimer,
        setShowingTimer,
        setRunning,
        pause, 
        setPause,
        done,
        setDone, 
        handleRounds, 
      }}>
        {children}
    </TimerContext.Provider>);   
};
  
export default TimerProvider;


