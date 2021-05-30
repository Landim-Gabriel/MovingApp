import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles'

export default function TodoItem(props) {

    // Update style according to props
    let style = props.item.completed ? {
        textDecorationLine: 'line-through'
    } : {
        textDecorationLine: 'none'
    }
    

    return (
        <TouchableOpacity
            onPress={() => props.completeFunction()}
            style={styles.tarefas}>
            <Text style={[{fontSize: 18}, style]}>{props.item.descricao}</Text>
            <View style={styles.botoes}>
            <TouchableOpacity
                style={styles.taskCompleted}
                onPress={() => props.completeFunction()}>
                <Text style={{color: '#fafafa', fontWeight: 'bold'}}>✓</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.taskFailed}
                onPress={() => props.deleteFunction()}>
                <Text style={{color: '#fafafa', fontWeight: 'bold'}}>X</Text>
            </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}