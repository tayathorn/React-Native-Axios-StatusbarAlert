import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import StatusBarAlert from 'react-native-statusbar-alert'

import Home from './components/Home'
import RenderScene from './components/Navigator/renderScene'
import { NavigationBarRouteMapper } from './components/Navigator/navigationbarRouteMapper'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }

    console.log('constructor > this.state : ', this.state)
    
  }

  onPressButton = () => {
    console.log('onPressButton')
    let currentVisible = this.state.visible

    this.setState({
      visible: !currentVisible
    })
  }

  RenderScene = (route, navigator) => {
    console.log('RenderScene > this.state : ', this.state)
    switch(route.name){
      case 'Home':
        return(
          <Home navigator={navigator} onPress={this.onPressButton} visible={this.state.visible}/>
        );
      case 'Twitter':
        return(
          <TwitterScreen/>
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Home', title: 'Home'}}
        renderScene={this.RenderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper = {NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar:{
    flex:1,
    backgroundColor: '#009688',
    borderBottomColor: '#B2DFDB',
    borderBottomWidth: 1,
  },
});