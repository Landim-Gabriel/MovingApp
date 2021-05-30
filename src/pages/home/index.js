import React from 'react';
import { View, TouchableHighlight, Text, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';
import ExperienceBar from '../../components/experienceBar/ExperienceBar';
import Profile from '../../components/profile/Profile';
import CompletedChallengers from '../../components/completedChallengers/CompletedChallengers'
import Countdown from '../../components/countdown/Countdown';
import ChallengeBox from '../../components/ChallengeBox/ChallengeBox';
import { CountdownProvider } from '../../contexts/CountdownContext';


export default function home({ route, navigation }) {
  return (
    <View style={styles.container}>
      <ExperienceBar />
      <CountdownProvider>
        <View style={styles.profileSection}>
          <Profile user={route.params.userInformation} />
          <View>
            <TouchableHighlight
              style={styles.countdownButton}
              activeOpacity={0.6}
              underlayColor="#4953B8"
              user={route.params.userInformation}
              onPress={() => navigation.navigate('tasks')}
            >
              <Text style={styles.buttonText}>Tarefas</Text>
            </TouchableHighlight>
          </View>
          <CompletedChallengers />
          <Countdown />
          <ChallengeBox />
        </View>
      </CountdownProvider>
      <View>

      </View>
    </View>
  );
}
