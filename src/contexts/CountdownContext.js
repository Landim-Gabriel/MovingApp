import React, { createContext, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContexts";
import {Accelerometer } from 'expo-sensors';

export const CountdownContext = createContext({})
let countdownTimeout;

export function CountdownProvider({children}){
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState( 0.1 * 60 );
    const [isActive, setActive] = useState(false);
    const [hasFinshed, setHasFinished] =  useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const stopped = {
      x: 0,
      y: 0,
      z: 0
    }

    const [dataXYZ, setData] = useState({
      x: 0,
      y: 0,
      z: 0,
    });

    function startCountdown() {   
        Accelerometer.addListener(dataXYZ => setData(dataXYZ))
        if ( dataXYZ['x'] !=0.00 ) {
          setActive(true);
          console.log(dataXYZ['x'])
        }
      }
    
      function resetCountdown(){
        Accelerometer.removeAllListeners()
        setData(stopped)
        console.log(dataXYZ['x'])
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime( 0.1 * 60 );
        setHasFinished(false)
      }
    
      useEffect(() => {
        if (isActive && time > 0) {
          countdownTimeout = setTimeout(() => {
            setTime(time - 1);
          }, 1000);
        } else if (isActive && time == 0 ){
          setHasFinished(true);
          setActive(false);
          startNewChallenge();
        }
      }, [isActive, time])

    
    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinshed,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}