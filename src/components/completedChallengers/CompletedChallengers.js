import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function CompletedChallengers() {
  return(
    <View style={styles.completedChallengersContainer}>
        <Text style={styles.completedChallengersText}>Desafios completos:</Text>
        <Text style={styles.completedChallengersValue}>5</Text>
        <View style={styles.completedChallengersBorder} />
    </View>
  );
};
