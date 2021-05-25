import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default function tasks({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableHighlight
          style={styles.backButton}
          activeOpacity={0.6}
          underlayColor="#4953B8"
          onPress={() => navigation.navigate('home')}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}