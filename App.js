/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-18 21:53:42
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Header from './src/components/Header'
import Home from './src/pages/Home';
import Mine from './src/pages/Mine';

import { AppStackNavigator } from './AppNavigator'
export  default AppStackNavigator;

// const dataSource = [
//   {tabPage:'Home', tabName:'首页', component: Home},
//   {tabPage:'Mine', tabName:'文章', component: Mine}
// ]
// var navigation = null;
// export default class App extends Component {
//   constructor(props){
//     super(props);
//     navigation = this.props.navigation;
//     this.state = {
//       selectedTab: 'Home'
//     }
//   }

//   render() {
//     let tabViews = dataSource.map((item,i) => {
//       return (
//         <TabNavigator.Item
//           title={item.tabName}
//           selected={this.state.selectedTab===item.tabPage}
//           titleStyle={{color:'black'}}
//           selectedTitleStyle={{color:'#7A16BD'}}
//           tabStyle={{alignSelf:'center'}}
//           onPress = {() => {this.setState({selectedTab:item.tabPage})}}
//           key={i}
//           >
//           <item.component  navigation={navigation}/>
//         </TabNavigator.Item>
//       );
//     })
//     return (
//       <View style={styles.container}>
//         <Header />
//         <TabNavigator hidesTabTouch={true}>
//           {tabViews}
//         </TabNavigator>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF'
//   },
//   tabIcon:{
//     width:23,
//     height:23
//   }
// });