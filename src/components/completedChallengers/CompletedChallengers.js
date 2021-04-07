import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContexts';

import styles from './styles';

export default function CompletedChallengers() {
  const { challengesCompleted } = useContext(ChallengesContext)


  return(
    <View style={styles.completedChallengersContainer}>
        <Text style={styles.completedChallengersText}>Desafios completos:</Text>
        <Text style={styles.completedChallengersValue}>{ challengesCompleted }</Text>
        <View style={styles.completedChallengersBorder} />
    </View>
  );
};
