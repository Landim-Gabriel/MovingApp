import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContexts';

import styles from './styles';

let countdownTimeout;

export default function Countdown() {
  
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState( 0.1 * 60 );
  const [isActive, setActive] = useState(false);
  const [hasFinshed, setHasFinished] =  useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime( 0.1 * 60 );
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
        onPress={() => {resetCountdown()}}
      >
        <Text style={styles.buttonText}> Abandonar ciclo</Text>
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
