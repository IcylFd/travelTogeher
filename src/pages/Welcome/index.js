/*
 * @Date: 2020-03-18 12:55:33
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-19 03:11:08
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Button } from '@ant-design/react-native';
import Button from '@ant-design/react-native/lib/button'
import Icon from '../../assets/iconfont/Icon';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const {navigation} =this.props;
    return (
      <View>
        <Text>Welcome</Text>
        <Button
          onPress={()=>navigation.navigate('TabNav')}
        >go to nav
        </Button>
        <Icon name="my" size={20} />
      </View>
    );
  }
}

export default Home