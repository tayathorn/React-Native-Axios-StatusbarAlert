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

import Cartoon from './components/Cartoon'
import Feed from './components/Feed'
import Author from './components/Author'
import Post from './components/Post'
import AlertFullScreen from './components/AlertFullScreen'

const STATUSBAR_ALERT_HEIGHT = 20

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  onPressButton = () => {
    let currentVisible = this.state.visible

    this.setState({
      visible: !currentVisible
    })
  }

  onPressStatusbar = () => {
    console.log('Onpresssss Status bar jaaaa')

    // this.navigator.push({id: 'AlertFullScreen'})
  }

  RenderScene = (route, navigator) => {
    switch(route.id){
      case 'Home':
        return(
          <Home navigator={navigator} onPress={this.onPressButton} visible={this.state.visible}/>
        );
      case 'Cartoon':
        return(
          <Cartoon/>
        );
      case 'Feed':
        return(
          <Feed navigator={navigator} />
        );
      case 'Author':
        return(
          <Author/>
        );
      case 'Post':
        return(
          <Post/>
        );
      case 'AlertFullScreen':
        return(
          <AlertFullScreen/>
        )
    }
  }

  statusbarHeight = () => {
    if(this.state.visible) {
      return STATUSBAR_ALERT_HEIGHT
    }

    return 0
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBarAlert
          visible={this.state.visible}
          message="ON"
          backgroundColor="#3CC29E"
          color="white"
          pulse="background"
          statusbarHeight={this.statusbarHeight()}
          onPress={this.onPressStatusbar}
        />
        <Navigator
          ref={(ref) => {this.navigator = ref}}
          // initialRoute={{ name: 'Cartoon', title: 'Cartoon'}}
          initialRoute={{ id: 'Home', title: 'Home'}}
          renderScene={this.RenderScene}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper = {NavigationBarRouteMapper}
              style={styles.navBar}
            />
          }
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
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