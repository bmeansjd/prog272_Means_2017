import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Prog272</Text>
        <Text>Brenda Means</Text>
        <Text>Shakeing your phone to open the developer menu.</Text>
          <Button
              onPress={this.fetchAddress}
              title="Get Data"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"/>
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
