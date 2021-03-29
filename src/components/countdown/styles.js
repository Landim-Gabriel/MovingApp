import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  countdownContainer: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '600',
    color: '#2E384D',
    flexDirection: 'row',
    marginTop: -14,
  },

  time: {
    flex: 1,
    flexDirection: 'row',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    backgroundColor: '#FFF',
    borderRadius: 5,
  },

  numberLeft: {
    fontSize: 90,
    flex: 1,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#F0F1F3',
  },

  numberRight: {
    fontSize: 90,
    flex: 1,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#F0F1F3',
  },

  dot: {
    fontSize: 70,
    marginHorizontal: 8,
  },

  countdownButton: {
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
});
