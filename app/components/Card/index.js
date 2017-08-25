import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class Card extends Component {
  componentDidMount() {
    console.log('Card > componentDidMount')
  }
  render() {
    console.log('this.props.image : ', this.props.image)
    return(
      <View style={styles.container}>
        <Text>
          {this.props.titleText}
        </Text>
        <View style={styles.imageWrapper}>
          <Image source={{uri:this.props.image}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width:200, 
    height:150,
    backgroundColor: 'pink'
  }
})