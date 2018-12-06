import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Icon, Button } from 'react-native-elements';
import LoginScreen from './loginScreen';
import HomeScreen from './homeScreen';
import SimpanScreen from './simpanScreen';
import AccountScreen from './accountScreen';
import PesananScreen from './pesananScreen';
import InboxScreen from './inboxScreen';


const RootStack = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    HomeScreen: HomeScreen,
    SimpanScreen: SimpanScreen,
    PesananScreen: PesananScreen,
    InboxScreen: InboxScreen,
    AccountScreen: AccountScreen,
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

const AppContainer = createAppContainer(RootStack);


// export default class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }


export default AppContainer;