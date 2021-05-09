import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  loginContainer: {
    height: 920,
    maxWidth: 900,
    marginTop: 0,
    marginBottom: 'auto',
    paddingTop: 40,
    paddingBottom: 32,

    display: 'flex',
    flexDirection: 'column',
  },

  loginButton: {
    width: '100%',
    height: 40,

    backgroundColor: '#5965E0',
    alignItems: 'center',
    marginTop: 12,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },  
})