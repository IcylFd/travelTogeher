/*
 * @Date: 2020-03-18 15:29:46
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-18 21:35:27
 */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }
  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.header}>
        <Text>aaaaaa</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#ccc'
  }
})