import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export const NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    switch(route.name) {
      default :
        return null
    }
  },
  RightButton: function(route, navigator, index, navState) {
    switch(route.name) {
      default :
        return null;
    }
  },
  Title: function(route, navigator, index, navState) {
    switch(route.name) {
      default :
        return(
          <Text style={styles.navBarTitle}>{route.title}</Text>
        );
    }
  }
};

const styles = StyleSheet.create({
  navBarTitle:{
    flex:1,
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
    color: 'white'
  },
});