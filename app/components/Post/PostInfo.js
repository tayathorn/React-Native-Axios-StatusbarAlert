import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native'

export default class PostInfo extends Component {

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.authorWrapper}>
            <View style={styles.imageWrapper}>
              <Image source={{uri:this.props.author.avatar}} style={{width:50, height:50,}}/>
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.authorTitle}>{`${this.props.author.firstName} ${this.props.author.lastName}`}</Text>
              <Text style={styles.postDetail.title}>{this.props.title}</Text>
              <Text>{`vote: ${this.props.votes}`}</Text>
              <View style={styles.voteButton}>
                <Button title="Vote" color="#0277BD" onPress={this.props.onPressVote}/>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
const styles = {
  container: {
    flex:1,
    padding: 10,
  },
  wrapper: {
    flex:1,
    padding: 10,
    borderColor: '#BDBDBD',
    borderRadius: 10,
    borderWidth: 1,
  },
  authorWrapper: {
    flexDirection: 'row',
  },
  authorTitle: {
    fontWeight: 'bold'
  },
  imageWrapper: {
    marginRight: 10,
  },
  infoWrapper: {
    alignSelf: 'center',
  },
  postDetail: {
    title: {
      fontSize: 20
    }
  },
  voteButton: {
    width:100,
    marginVertical: 5
  }
// })
}