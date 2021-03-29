import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

export default function Countdown() {
  const [time, setTime] = useState( 25 * 60 );
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time])

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
      <TouchableHighlight
        style={styles.countdownButton}
        activeOpacity={0.6}
        underlayColor="#4953B8"
        onPress={() => {startCountdown()}}
      >
        <Text style={styles.buttonText}>Iniciar um ciclo</Text>
      </TouchableHighlight>

    </View>
  );
};
