import React, {Fragment} from 'react';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todoItems}) => {
    return (
        <FlatList 
            data={todoItems}
            renderItem={({ item }) => (
                <TodoItem
                    title={item.title}
                    isComplete={item.isComplete}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

export default TodoList;
 