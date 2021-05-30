import React, { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'
import TodoInput from "../../components/todoInput/todoInput"
import TodoItem from "../../components/todoItem/todoItem"
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from "../../services/Api"

export default function tasks({ navigation, props }) {
    const [mesas, setMesas] = React.useState([]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@moving:google_id')
            if (value !== null) {
                return value
            }
        } catch (e) {
            console.log(e);
        }
    }

    React.useEffect(() => {
        const getMesas = async () => {
            let userId = await getData()
            await Api.get(`api/tarefas/${userId}`).then(response => {
                setMesas(response.data);
            }).catch((error) => {
                console.log(error)
            })
        }
        getMesas();
    }, [])

    const [todoItems, setTodoItems] = useState([]);
    const [failedTask, setFailedTask] = useState(0);
    const [completedTask, setCompletedTask] = useState(0);
    const [allTasks, setAllTasks] = useState(0);

    function addTodoItem(_text) {
        setTodoItems([...todoItems, { text: _text, completed: false }]);
        setAllTasks(allTasks + 1)
    }

    function deleteTodoItem(item) {
        let tempArr = [...todoItems];
        tempArr.splice(item, 1);
        setTodoItems(tempArr)
        setFailedTask(failedTask + 1)
    }

    function completeTodoItem(item) {
        let tempArr = [...todoItems];
        tempArr.splice(item, 1);
        setTodoItems(tempArr)
        setCompletedTask(completedTask + 1)
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
                <View style={styles.taskView}>
                    <View style={styles.taskTotal}>
                        <Text style={styles.taskTableTop}>Total de tasks</Text>
                        <Text style={styles.taskTable}>{allTasks}</Text>
                    </View>
                    <View style={styles.taskCompleted}>
                        <Text style={styles.taskTableTop}>Completas</Text>
                        <Text style={styles.taskTable}>{completedTask}</Text>
                    </View>
                    <View style={styles.taskFailed}>
                        <Text style={styles.taskTableTop}>Incompletas</Text>
                        <Text style={styles.taskTable}>{failedTask}</Text>
                    </View>
                </View>
                <SafeAreaView style={{ padding: 16, justifyContent: 'space-between', flex: 1 }}>
                    <Text style={{ fontSize: 36, fontWeight: 'bold' }}>To Do:</Text>
                    <FlatList
                        data={mesas}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => {
                            return (
                                <TodoItem
                                    item={item}
                                    deleteFunction={() => deleteTodoItem(item.id)}
                                    completeFunction={() => completeTodoItem(item.id)}
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