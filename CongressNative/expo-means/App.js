import React from 'react';
import Address from './Address';
import { NativeRouter, Route, Link } from 'react-router-native'

import { StyleSheet, Text, Button, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Prog272</Text>
        <Text>Brenda J. Means</Text>
        <Text>Shaking your phone to open the developer menu.</Text>
          <Address/>

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
