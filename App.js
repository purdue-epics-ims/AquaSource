
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, Alert, AppRegistry, ScrollView } from 'react-native';
//import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
   'Shake or press menu button for dev menu',
});

global.count = 0;

export default class App extends Component {
_onPress() {
  count++;
  //SecondActivity();
  Alert.alert('We are AquaSource\nCount is : ' + count);
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} title="Hello" color = "#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>

        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.colorful}>We are AquaSource</Text>

        </View>
    );
  }
}

class SecondActivity extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.colorful}> {global.count} </Text>
      </View>
      //Alert.alert('We are AquaSource, This is new code!\nCount is : ' + count);
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  colorful: {
    textAlign: 'center',
    color: '#1827A7',
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
});
