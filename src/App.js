// @flow
import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Root } from 'native-base'
import Login from './container/LoginContainer'
import Home from './container/HomeContainer'
import BlankPage from './container/BlankPageContainer'
import Sidebar from './container/SidebarContainer'

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <Sidebar {...props} />
  }
)

const App = createStackNavigator(
  {
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    gesturesEnabled: false
  }
)

export default () => (
  <Root>
    <App />
  </Root>
)
