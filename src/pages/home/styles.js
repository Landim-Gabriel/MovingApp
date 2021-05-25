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
  
  countdownButton: {
    width: '100%',
    height: 40,

    backgroundColor: '#5965E0',
    alignItems: 'center',
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },  
});