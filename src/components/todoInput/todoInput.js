import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import styles from './styles'

export default function TodoInput(props){
    const [text, setText] = useState(null);

    return(
        <View style={styles.textInputView}>
            <TextInput
                style={styles.input}
                onChangeText={text=>setText(text)}
            />
            <TouchableOpacity
                style={styles.inputButton}
                onPress={()=>props.onPress(text)}
            >
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    )
}