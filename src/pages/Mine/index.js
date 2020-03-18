/*
 * @Date: 2020-03-18 12:55:33
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-18 13:14:47
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Mine extends React.Component {
  static navigationOptions = {
    title: 'mine'
  };
  render() {
    return <Text>Hello, mine!</Text>;
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

export default Mine