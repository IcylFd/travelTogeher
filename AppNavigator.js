/*
 * @Date: 2020-03-18 21:45:16
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-19 00:50:05
 */
import { createAppContainer } from 'react-navigation';

// import Ionicons from 'react-native-vector-icons/Ionicons';//图标库（参考小白计划二）
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';//图标库

import Home from './src/pages/Home';
import Mine from './src/pages/Mine';
import Welcome from './src/pages/Welcome'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
// import  Page1 from '../pages/Page1';
// import  Page2 from '../pages/Page2';
// import  Page3 from '../pages/Page3';


//底部导航
const AppTabNavigators =createAppContainer(createBottomTabNavigator({
  Home: {
    screen:Home,
    navigationOptions: {
      tabBarLabel: '首页'
    }
  },
  Mine:{
    screen:Mine,
    navigationOptions:{
      tabBarLabel: '我的'
    }
  }
},{
  tabBarPosition:'bottom',//位置
  tabBarOptions: {
    showIcon: false,//是否显示图标
    style: {
      height: 45,//底部导航的宽度
      backgroundColor: '#211305' //底部导航的颜色
    },
    labelStyle: {
      fontSize: 12,//字体大小
      marginTop:-2 //字体距离图标大小
    }
  }
}));


//抽屉导航
// const Drawer= createDrawerNavigator({
//     Page4:{
//         screen:Page4,
//         navigationOptions:{
//             drawerLabel:'page4',
//             drawerIcon: ({ tintColor }) => (
//                 <MaterialIcons
//                     name="dns"
//                     size={26}
//                     style={{color:tintColor}}
//                 />
//             ),
//         }
//     },
//     Page5:{
//         screen:Page5,
//         navigationOptions:{
//             drawerLabel:'page5',
//             drawerIcon: ({ tintColor }) => (
//                 <MaterialIcons
//                     name="dns"
//                     size={26}
//                     style={{color:tintColor}}
//                 />
//             ),
//         }
//     }
// },{
//     initialRouteName:'Page5',//设置默认打开的页面
//     contentOptions:{
//         inactiveTintColor:'#4d3a34',//不被选中的颜色
//         activeTintColor:'#ff7226',//改变选中之后的颜色
//     }
// });



//顶部导航，主入口（导出），要放在其他导航后面，（加载顺序）
export const AppStackNavigator=createAppContainer(createStackNavigator({
  Welcome:{
    screen: Welcome
  },
  TabNav:{    //全部的底部导航
    screen: AppTabNavigators,
    navigationOptions:{
      title: 'This is TabNav'
    }
  }
    // DrawerNav:{   //全部的抽屉导航
    //     screen:Drawer,
    //     navigationOptions:{
    //         title:"This is DrawerNav"
    //     }
    // }

} ));