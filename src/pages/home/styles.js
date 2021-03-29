import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    height: 920,
    maxWidth: 900,
    marginTop: 0,
    marginBottom: 'auto',
    paddingTop: 40,
    paddingBottom: 32,

    display: 'flex',
    flexDirection: 'column',
  },

  profileSection: {
    flex: 1,

    display: 'flex',
    margin: 50,
  },
});