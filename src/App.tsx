import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Text>App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
