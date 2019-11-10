import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import Todo from './components/Todo';

function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Todo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
