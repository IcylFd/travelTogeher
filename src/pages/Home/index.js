/*
 * @Date: 2020-03-18 12:55:33
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-18 14:47:32
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Button } from '@ant-design/react-native';
import Button from '@ant-design/react-native/lib/button'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button>sss</Button>
      </View>
    );
  }
}

export default Home