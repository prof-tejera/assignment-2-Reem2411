import { useContext, useEffect } from 'react';
import TimerButtons from "./TimerButtons/TimerButtons";
import DisplayTime from "./DisplayTime/DisplayTime";
import { TimerContext } from "../../utils/TimerProvider";
import '../timers/Timers.css'


const Timerpanel = ({input}) => {

    const {time, handleDisplayTime, timerType, userInput} = useContext(TimerContext);

    useEffect(() => {
      handleDisplayTime(time, timerType, userInput);
    }, [time, timerType, userInput, handleDisplayTime]);
    
    return(
      <div className="outerPanel">
         <h1> {timerType} </h1>  
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">     
              <div className="card-DisplayTime">
                  <DisplayTime/>
              </div>         
            </div>
            <div className="flip-card-back">
              <div className="inputs">
                {input}
              </div>
            </div>
          </div> 
      </div>
      <TimerButtons/>       
      </div>
    );  
};

export default Timerpanel;
