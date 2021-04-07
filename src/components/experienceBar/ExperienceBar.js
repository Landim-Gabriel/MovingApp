import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContexts';

import styles from './styles';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

  const stylebar = StyleSheet.create({
    sizeBarGreen: {
      height: 6,
      borderRadius: 4,
      backgroundColor: '#4CD62B',
      width: `${percentToNextLevel}%`,
    },

    currentExperience: {
      position: 'absolute',
      top: 12,
      transform: [{ translateX: -12 }],
      left: `${percentToNextLevel}%`,
      fontSize: 12,
    },
  })  

  return (
    <View style={styles.experienceBar}>
      <Text style={styles.xpStart}>0 XP</Text>
      <View style={styles.sizeBarGray}>
        <View style={stylebar.sizeBarGreen} />
        <Text style={stylebar.currentExperience}>{currentExperience} XP</Text>
      </View>
      <Text style={styles.xpFinal}>{experienceToNextLevel} XP</Text>
    </View>
  )
};

