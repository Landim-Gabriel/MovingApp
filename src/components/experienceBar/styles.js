import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  experienceBar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },

  xpStart: {
    fontSize: 10,
    marginLeft: 10,
  },

  xpFinal: {
    fontSize: 10,
    marginRight: 10,
  },

  sizeBarGray: {
    flex: 1,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#DCDDE0',
    marginTop: 0,
    marginBottom: 0,
    marginRight: 10,
    marginLeft: 10,
    position: 'relative',
  },
  
  sizeBarGreen: {
    height: 6,
    borderRadius: 4,
    backgroundColor: '#4CD62B',
    width: '50%',
  },

  currentExperience: {
    position: 'absolute',
    top: 12,
    transform: [{ translateX: -12 }],
    left: '50%',
    fontSize: 12,
  },
});
