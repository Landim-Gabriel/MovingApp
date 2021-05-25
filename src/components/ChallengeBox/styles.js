import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    challengeBoxContainer:{

        display: 'flex',
        fontWeight: '500',
        height: '50%',
        color: '#2E384D',
        marginTop:10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 23,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    challengeNotActive:{
        fontSize: 20,
        fontWeight: "500",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        maxWidth: '70%',
        marginTop: 3

    },
    levelUp:{
        marginLeft:45,
        resizeMode: "cover",
        height:100,
        width:100,
        marginTop:1
    },
    textBold:{
        display: 'flex',
        fontSize:20,
    },
    textP:{
        paddingHorizontal:12,
        fontSize:15
    },

    imageExercise:{
        resizeMode: 'cover',
        height:100,
        width:100
    }, 
    challengerActive:{
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
    },
    winXP:{
        textAlign: 'center',
        color: '#5965E0',
        fontWeight: "600",
        fontSize: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        marginTop:1
    },

    main:{
        flex: 1,
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    footer:{
        alignItems: 'center',
        flexDirection:"row",
        width:"100%",
    },
    itens:{
        flexDirection: 'column',
        padding:20,
    },

    challengeFailedButton:{
        height: 50,
        width:100,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    challengeSucceededButton:{
        height: 50,
        width:100,
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton:{
        color: 'white',
        fontSize: 14,
        fontWeight: '700'
    }
});