import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContexts';

import styles from './styles';

export default function Profile(props, navigation) {
  const { level } = useContext(ChallengesContext)
  const [photo, setPhoto] = useState(props.user.user.photoUrl)
  const [name, setName] = useState(props.user.user.name)


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
      </View>
    </View>
  );
};