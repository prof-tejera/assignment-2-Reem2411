import React, { useState, useContext } from "react";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Panel from "../components/generic/Panel/Panel";
import Button from "../components/generic/Button/Button";
import { TimerContext } from "../utils/TimerProvider";

function App() {

  const {handleReset, timerType, userInput} = useContext(TimerContext);

  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];
  
  const [state, setState] = useState(0)
  return (  
  
    <Panel type="outer">
      <Panel type="timerslist">
        {timers.map((timer, i) => (
            <Button 
            key = {i}
            onClick={() => {
              handleReset(timerType, userInput);
              setState(i); 
              
            }}
            type="list"
            text={timer.title}
            /> 
          ))}   
      </Panel>
      {timers[state].C}
   </Panel>   
  );
}

export default App;
