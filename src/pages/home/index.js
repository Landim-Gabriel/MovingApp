import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import ExperienceBar from '../../components/experienceBar/ExperienceBar';
import Profile from '../../components/profile/Profile';
import CompletedChallengers from '../../components/completedChallengers/CompletedChallengers'
import Countdown from '../../components/countdown/Countdown';
import ChallengeBox from '../../components/ChallengeBox/ChallengeBox';
import { CountdownProvider } from '../../contexts/CountdownContext';


export default function home() {
  return(
    <View style={styles.container}>
      <ExperienceBar />
      <CountdownProvider>
      <View style={styles.profileSection}>
        <Profile />
        <CompletedChallengers />
        <Countdown />
        <ChallengeBox/>
      </View>
      </CountdownProvider>
      <View>
        
      </View>
    </View>
  );
}
