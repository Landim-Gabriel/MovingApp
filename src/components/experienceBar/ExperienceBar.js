import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function ExperienceBar() {
  return (
    <View style={styles.experienceBar}>
      <Text style={styles.xpStart}>0 XP</Text>
      <View style={styles.sizeBarGray}>
        <View style={styles.sizeBarGreen} />
        <Text style={styles.currentExperience}>300 XP</Text>
      </View>
      <Text style={styles.xpFinal}>600 XP</Text>
    </View>
  )
};
