import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    textInputView:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    input:{
        marginVertical:10,
        flex:1, 
        height:50,
        borderColor: '#212121',
        borderWidth: 1,
        borderRadius: 8,
        
    },

    inputButton:{
        marginVertical:10,
        height:50,
        width:50,
        marginLeft: 8,
        padding: 7,
        backgroundColor: '#5965E0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:8
    },

    textBtn: {
        color: '#fff',
        fontWeight: 'bold'
    }
})