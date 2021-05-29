import React, { useState } from 'react'
import { Text, View} from 'react-native'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'
import TodoInput from "../../components/todoInput/todoInput"
import TodoItem from "../../components/todoItem/todoItem"

export default function tasks({navigation}) {
  const [todoItems, setTodoItems] = useState([{text: "Buy groceries", completed: true}, {text: "Make blogpost", completed: false}]);

    function addTodoItem(_text) {
        setTodoItems([...todoItems, {text:_text, completed: false}]);
    }

    function deleteTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr.splice(_index, 1);
        setTodoItems(tempArr)
    }

    function completeTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr[_index].completed = true;
        setTodoItems(tempArr)
    }

    return (
      <View style={styles.container}>
        <>
        <TouchableHighlight
          style={styles.backButton}
          activeOpacity={0.6}
          underlayColor="#4953B8"
          onPress={() => navigation.navigate('home')}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableHighlight>
        <SafeAreaView style={{padding: 16, justifyContent: 'space-between', flex: 1}}>
            <Text style={{fontSize: 36, fontWeight: 'bold'}}>Todo</Text>
            <FlatList
                data={todoItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                    return (
                        <TodoItem
                            item={item}
                            deleteFunction={() => deleteTodoItem(index)}
                            completeFunction={() => completeTodoItem(index)}
                        />
                    )
                }}
            />
            <TodoInput onPress={addTodoItem} />
        </SafeAreaView>
    </>
    </View>
    );
}