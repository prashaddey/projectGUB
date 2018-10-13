import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  AppRegistry
  } from "react-native";
//import navigation
import {createStackNavigator} from 'react-navigation';
//icons
import Icon from 'react-native-vector-icons/MaterialIcons';

//import components
import Header from './app/components/Header.js';
import HeaderTitle from './app/components/HeaderTitle.js';
import List from './app/components/List.js';
import List2 from './app/components/List2.js';
import LoginScreen from './app/components/LoginScreen.js';

//import profile page components
import HeaderProfile from './app/components/HeaderProfile';
import SocialBar from './app/components/SocialBar';

//ProjectGUB - Homepage
export default class projectGUB extends Component{
  render(){
    return (
      <MyAppNavigator />
    );
  }
}

//HOME SCREEN
export class HomeScreen extends Component{
  static navigationOptions = {
    header: null
  }  
  render(){
    return (
      <View style={styles.container}>
        {/* <Header /> */}
        <HeaderTitle />
        <List />
        {/* <List2 /> */}
      </View>
    );
  }
}
//PROFILE SCREEN
export class ProfileScreen extends Component{
  render(){
    return (
      <View style={styles.containerProfile}>
        <HeaderProfile />
        <SocialBar />
      </View>
    );
  }
}


/**
 * StackNavigation
 * THIS CONST MUST BE DECLARED BELOW ALL COMPONENTS - ryu ryu ryu
 * Component == Class
 */
const MyAppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  }
});

const styles = StyleSheet.create({
  containerLogin:{
    flex: 1
  },
  container:{
    flex:1,
    backgroundColor: '#ced6e0',
  },
  containerProfile: {
    flex:1,
    backgroundColor: '#000'
  }
});

AppRegistry.registerComponent('projectGUB', () => projectGUB);

AppRegistry.registerComponent('main', () => projectGUB);