import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },

  profilePhoto: {
    width: 88,
    height: 88,
    borderRadius: 50,
  },

  profileInformation: {
    marginLeft: 24,
  },

  profileName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2E384D',
  },

  profileLevel: {
    fontSize: 18,
    marginTop: 8,
  },
});
