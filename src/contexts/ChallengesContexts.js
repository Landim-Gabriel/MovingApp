import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';
import challenges from '../../challenges.json';
import { Audio } from 'expo-av';

export const ChallengesContext = createContext({});

// A propiedade childer dentro de ChallengesProvider somente recebe COMPONENTES react
export function ChallengesProvider({ children }){ 
    
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  const [sound, setSound] = React.useState();
  const [desafios, setDesafios] = useState(0);
  const [challengesFailed, setChallengesFailed] = useState(0);


  async function playSound(){
    const { sound } = await Audio.Sound.createAsync(require('../../assets/challengeCompleted.mp3'))
    setSound(sound)
    await sound.playAsync()
  }

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
    playSound()
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
             completeChallenge,
             desafios,
             setDesafios,
             challengesFailed,
             setChallengesFailed
          }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}

