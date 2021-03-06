import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGameScreenName from './screens/StartGameScreen'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="guess a numero"></Header>
      <StartGameScreenName/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
