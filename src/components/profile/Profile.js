import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContexts';

import styles from './styles';

export default function Profile(props, navigation) {
  const { level, desafios, challengesFailed, challengesCompleted } = useContext(ChallengesContext)
  const [photo, setPhoto] = useState(props.user.user.photoUrl)
  const [name, setName] = useState(props.user.user.name)
  const aproveitamento = (challengesCompleted/desafios) * 100 || 0


  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.profilePhoto}
        source={{
          uri: photo,
        }} />
      <View style={styles.profileInformation}>
        <Text style={styles.profileName}>{name}</Text>
        <Text Style={styles.profileLevel}>Level {level}</Text>
        <Text>Respeito ao método: {Math.round(aproveitamento)}%</Text>
      </View>
    </View>
  );
};