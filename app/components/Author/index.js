import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native'

import request from '../../request'

import AuthorInfo from './AuthorInfo'

export default class Author extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authors: []
    }
  }
  
  componentDidMount() {
    this.fetchAuthorList()
  }

  fetchAuthorList = () => {
    console.log('fetchAuthorList')
    const query = {
      "query": "{ authors { id firstName lastName avatar } }" 
    }

    request.post(query)
    .then((response) => {
      let authorList = response.data.data.authors

      console.log('authorList : ', authorList)

      this.setState({
        authors: authorList
      })
    })
  }

  _renderAuthorList = () => {
    return this.state.authors.map((author) => {
      return(
        <AuthorInfo key={author.id} firstname={author.firstName} lastname={author.lastName} image={author.avatar}/>
      )
    })
  }

  render() {
    return(
      <View style={styles.container}>
        {this.state.authors.length > 0 ? 
          <ScrollView>
            { this._renderAuthorList() }
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