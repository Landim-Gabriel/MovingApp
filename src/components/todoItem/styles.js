import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    
    tarefas:{
        marginLeft: 0,
        paddingVertical: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    taskFailed:{
        padding: 8, 
        backgroundColor: '#FF0000',
        borderRadius: 8
    },
    tarefasText:{
        padding: 8, 
        backgroundColor: '#212121', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 8
    },
    taskCompleted:{
        padding: 8, 
        backgroundColor: '#008000',
        borderRadius: 8,
        marginRight: 10
    },
    botoes:{
        flexDirection: 'row'
    }

})