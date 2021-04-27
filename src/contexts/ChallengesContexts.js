import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({});

// A propiedade childer dentro de ChallengesProvider somente recebe COMPONENTES react
export function ChallengesProvider({ children }){ 
    
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


  function levelUp(){
    setLevel(level + 1);
  }

  function startNewChallenge(){
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
      const challenge = challenges[randomChallengeIndex];

      setActiveChallenge(challenge)
  }

  function resetChallenge(){
      setActiveChallenge(null);
  }

  function completeChallenge(){
    if(!activeChallenge){
      return;
    }

    const { amount  } = activeChallenge;

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience( finalExperience )
    setActiveChallenge( null )
    setChallengesCompleted( challengesCompleted + 1 )
  }

    return(
        <ChallengesContext.Provider
         value={{
             level,
             currentExperience,
             challengesCompleted,
             levelUp,
             startNewChallenge,
             activeChallenge,
             resetChallenge,
             experienceToNextLevel,
             completeChallenge
          }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}

