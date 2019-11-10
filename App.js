import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import TodoItem from './components/TodoItem';

function App() {
  return (
    <SafeAreaView style={styles.container}>
     <TodoItem />
     <TodoItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default App;
