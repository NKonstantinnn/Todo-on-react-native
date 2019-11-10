import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import uuidv4 from 'uuidv4';

import TodoList from './TodoList';

const Todo = () => {
    const [todoItems, setTodoItems] = useState(() => [
        {id: uuidv4(), title: 'Задача 1', isComplete: false},
        {id: uuidv4(), title: 'Задача 2', isComplete: false}
    ]);
    const [text, setText] = useState('');

    const onChangeTextHandler = (text) => setText(text);

    const addTodoItem = () => {
        if(text.length !== 0) {
            setTodoItems([
                ...todoItems,
                {id: uuidv4(), title: text, isComplete: false}
            ]);
        }
        setText('');
    }

    return (
        <>
            <TodoList 
                todoItems={todoItems}
            />
            <TextInput 
                style={styles.textInput}
                placeholder="Добавить задачу"
                value={text}
                onChangeText={onChangeTextHandler}
                onSubmitEditing={addTodoItem} 
            />
        </>
    );
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        borderWidth: StyleSheet.hairlineWidth
    }
})

export default Todo;
