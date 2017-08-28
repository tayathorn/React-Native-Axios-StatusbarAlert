import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class AuthorInfo extends Component {
  render() {
    console.log('this.props.image : ', this.props.image)
    return(
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <Image source={{uri:this.props.image}} style={{width:100, height:100,}}/>
          </View>
          <View style={styles.infoWrapper}>
            <Text>{`${this.props.firstname} ${this.props.lastname}`}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
  },
  wrapper: {
    flex:1,
    padding: 10,
    flexDirection: 'row',
    borderColor: '#BDBDBD',
    borderRadius: 10,
    borderWidth: 1,
  },
  imageWrapper: {
    marginRight: 20,
  },
  infoWrapper: {
    alignSelf: 'center',
  }
})