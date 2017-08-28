import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView
} from 'react-native'


import request from '../../request'

import PostInfo from './PostInfo'

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }
  
  componentDidMount() {
    this.fetchPostList()
  }
  
  fetchPostList = () => {
    console.log('fetchPostList')
    const query = {
      "query": "{ posts{ id title votes author { id firstName lastName avatar } } }" 
    }

    request.post(query)
    .then((response) => {
      let postList = response.data.data.posts

      console.log('postList : ', postList)

      this.setState({
        posts: postList
      })
    })
  }

  onPressVote = (postId) => {
    console.log("postId : ", postId)

    const query = {
      // "query": "mutation { upvotePost(postId:3) {id title votes}}"
      "query": `mutation { upvotePost(postId:${postId}) {id title votes}}`
    }

    request.post(query)
    .then((response) => {
      console.log('response :: ', response)
      this.fetchPostList()
    })
  }

  _renderPostList = () => {
    return this.state.posts.map((post) => {
      return(
        <PostInfo key={post.id} author={post.author} title={post.title} votes={post.votes} onPressVote={() => this.onPressVote(post.id)}/>
      )
    })
  }

  render() {
    return(
      <View style={styles.container}>
        {this.state.posts.length > 0 ? 
          <ScrollView>
            { this._renderPostList() }
          </ScrollView>
          : 
          <ActivityIndicator/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:55,
    justifyContent: 'center',
    // alignItems: 'center',
  }
})