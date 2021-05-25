import  { StyleSheet } from 'react-native'
  
export default StyleSheet.create({
  completedChallengersContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',

    marginTop: 10,
    marginBottom: 12,
    paddingBottom: 16,

    fontWeight: '500',
  },

  completedChallengersBorder: {
    height: 4,
    borderRadius: 4,
    backgroundColor: '#D7D8DA',
    width: '60%',

    marginTop: 10,
  },

  completedChallengersText: {
    fontSize: 18,
  },

  completedChallengersValue: {
    fontSize: 22,
  },
});