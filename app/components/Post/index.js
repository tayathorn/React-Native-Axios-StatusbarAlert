import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,

} from 'react-native'

export default class Post extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Post</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})