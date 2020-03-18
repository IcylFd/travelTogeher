/*
 * @Date: 2020-03-18 13:24:39
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-18 13:49:47
 */
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from './pages/Home/index'
import Mine from './pages/Mine/index'

const Routes = createAppContainer(createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions:{
          tabBarLabel: '首页'
        }
      },
      Mine: {
        screen: Mine,
        navigationOptions:{
          tabBarLabel: '我的'
        }
      }
    },
    {
      initialRouteName: 'Home',
      navigationOptions: {
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff'
        },
        headerTintColor: '#fff'
      }
    }
  ));

  export default Routes;