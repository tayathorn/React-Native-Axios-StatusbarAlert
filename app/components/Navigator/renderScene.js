import React, { Component } from 'react';
import Home from '../../components/Home'


export default function RenderScene(route, navigator) {
  switch(route.name){
    case 'Home':
      return(
        <Home navigator={navigator}/>
      );
    case 'Twitter':
      return(
        <TwitterScreen/>
      );
  }
}