import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ArgentInput} from "./components/reusable/ArgentInput";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Йоу бро! Я все-таки запустил вьюху на андроиде</Text>
        <ArgentInput />
        <ArgentInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
