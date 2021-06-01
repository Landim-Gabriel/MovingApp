import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'

export default function TodoItem(props) {

    // Update style according to props
    let style = props.cor ? {
        color: '#008000'
    } : {}

    let offbtn = props.cor ? {
        display: 'none'
    } : {}

    return (
        <TouchableOpacity
            onPress={() => props.completeFunction()}
            style={styles.tarefas}>
            <Text style={[{ fontSize: 16 }, style]}>{props.item.descricao}</Text>
            <View style={styles.botoes}>
                {}
                <TouchableOpacity
                    style={[styles.taskCompleted, offbtn]}
                    onPress={() => props.completeFunction()}>
                    <Text style={{ color: '#fafafa', fontWeight: 'bold' }}>✓</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.taskFailed, offbtn]}
                    onPress={() => props.deleteFunction()}>
                    <Text style={{ color: '#fafafa', fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}