import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContexts';
import { CountdownContext } from '../../contexts/CountdownContext';
import { Audio } from 'expo-av';

import styles from './styles';


export default function Countdown() {
  
  const { minutes, 
          seconds, 
          hasFinshed, 
          isActive, 
          startCountdown, 
          resetCountdown
        } = useContext(CountdownContext)

  const { desafios, setDesafios, challengesFailed, setChallengesFailed } = useContext(ChallengesContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  const [sound, setSound] = React.useState();

  async function playTheSound(){
    const { sound } = await Audio.Sound.createAsync(require('../../../assets/challengeFailed.mp3'))
    setSound(sound);
    await sound.playAsync()
  }

  function challengeFailed(){
    setChallengesFailed(challengeFailed + 1)
    resetCountdown()
    playTheSound()
  }
  
  return (
    <View>
      <View style={styles.countdownContainer}>
        <View style={styles.time}>
          <Text style={styles.numberLeft}>{minuteLeft}</Text>
          <Text style={styles.numberRight}>{minuteRight}</Text>
        </View>
        <Text style={styles.dot}>:</Text>
        <View style={styles.time}>
          <Text style={styles.numberLeft}>{secondLeft}</Text>
          <Text style={styles.numberRight}>{secondRight}</Text>
        </View>
      </View >

      { hasFinshed ? (
        <TouchableHighlight
        disabled={true}
        style={styles.countdownButton}
        activeOpacity={0.6}
        underlayColor="#4953B8"
        >
        <Text style={styles.buttonText}>Ciclo encerrado</Text>
        </TouchableHighlight>
      ) : (
        <>
           { isActive ? (
        <TouchableHighlight
        style={styles.countdownButton}
        activeOpacity={0.6}
        underlayColor="#4953B8"
        onPress={() => {challengeFailed()}}
      >
        <Text style={styles.buttonText}>Abandonar ciclo</Text>
      </TouchableHighlight>

      ) : (
        <TouchableHighlight
        style={styles.countdownButton}
        activeOpacity={0.6}
        underlayColor="#4953B8"
        onPress={() => {startCountdown()}}
      >
        <Text style={styles.buttonText}>Iniciar ciclo</Text>
      </TouchableHighlight>
      )}
        </>
      ) }
    </View>
  );
};
