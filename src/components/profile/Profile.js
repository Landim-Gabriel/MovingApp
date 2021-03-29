import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function Profile() {
  return (
      <View style={styles.profileContainer}>
        <Image
        style={styles.profilePhoto}
        source={{
          uri: 'https://github.com/Glandim.png',
        }}/>
        <View style={styles.profileInformation}>
          <Text style={styles.profileName}>Gabriel Landim</Text>
          <Text Style={styles.profileLevel}>Level 1</Text>
        </View>
      </View>
  );
};