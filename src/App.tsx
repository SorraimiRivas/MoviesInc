import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import HomeScreen from './screens/home/HomeScreen';
import Navigation from './navigation';

const App: FC = () => {
  return <Navigation />;
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
