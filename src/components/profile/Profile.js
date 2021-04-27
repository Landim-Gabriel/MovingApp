import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContexts';

import styles from './styles';

export default function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
      <View style={styles.profileContainer}>
        <Image
        style={styles.profilePhoto}
        source={{
          uri: 'https://github.com/Glandim.png',
        }}/>
        <View style={styles.profileInformation}>
          <Text style={styles.profileName}>Gabriel Landim</Text>
          <Text Style={styles.profileLevel}>Level { level }</Text>
        </View>
      </View>
  );
};