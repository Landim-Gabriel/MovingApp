import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';

import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import home from '../home';


export default function login({navigation}) { 
  const [ user, setUser ] = useState(null);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@moving:google_id', value)
    } catch (e) {
      console.log(e);
    }
  }

  async function signInWithGoogleAsync() {
		
		try {
			const result = await Google.logInAsync({
				androidClientId: '715902956439-3m0e6e8cfkfm3emfueh5klv8dtl61kod.apps.googleusercontent.com',
			});
			if (result.type === 'success') {
				let { user } = result;
        setUser(user);
        storeData(user.id)
        navigation.reset({index:0, actions: [navigation.navigate('home', {userInformation: result})],})
			} 

		} catch (e) {
			return { error: true };
		}
	}

  return (
    <View style={styles.loginContainer}>
      <TouchableHighlight
        style={styles.loginButton}
        activeOpacity={0.6}
        underlayColor="#4953B8"
        onPress={() => signInWithGoogleAsync()}
        >
        <Text style={styles.buttonText}>Entrar com Google</Text>
        </TouchableHighlight>
    </View>
  )
}