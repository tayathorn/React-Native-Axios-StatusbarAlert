import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native'

export default class Feed extends Component {

  onPressAuthors = () => {
    this.props.navigator.push({ id: 'Author', title: 'Authors'})
  }

  onPressPosts = () => {
    this.props.navigator.push({ id: 'Post', title: 'Posts'})
  }
  
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button title="See all Authors" color="#607D8B" onPress={this.onPressAuthors}/>
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="See all Posts" color="#9E9E9E" onPress={this.onPressPosts}/>
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
  buttonWrapper: {
    marginBottom: 15,
  }
})