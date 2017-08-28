import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import request from '../../request'
import Card from '../Card'

// const GRAPHQL_URL = 'https://jlz3vx84p.lp.gql.zone/graphql'
const GRAPHQL_URL = 'https://1jzxrj179.lp.gql.zone/graphql'

export default class Cartoon extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      cartoonList: []
    }
  }

  componentDidMount() {
    this.fetchCartoonList()
  }

  fetchCartoonList = () => {
    console.log('fetchCartoonList')
    const query = {
      "query": "{ posts { id title votes } }" 
    }

    request.post(GRAPHQL_URL, query)
    .then((response) => {
      console.log('response :: ', response)

      // let cartoonList = response.data.data.cartoon
      let cartoonList = response.data.data.posts

      console.log('cartoonList : ', cartoonList)

      this.setState({
        cartoonList
      })
    })
  }

  onPressButton = () => {
    const query = {
      "query": "mutation { upvotePost(postId:3) {id title votes}}"
    }

    request.post(GRAPHQL_URL, query)
    .then((response) => {
      console.log('response :: ', response)
      this.fetchCartoonList()
    })
  }

  renderCartoonCard = () => {
    console.log('renderCartoonCard')
    return this.state.cartoonList.map((cartoon) => {
      console.log('cartoon : ', cartoon)
      return(
        <Card key={cartoon.id} titleText={`${cartoon.title} votes:${cartoon.votes}`} image={cartoon.pic}/>
      )
    })
  }

  renderContent = () => {
    if(this.state.cartoonList.length > 0) {
      return(
        <ScrollView style={styles.wrapper}>
          { this.renderCartoonCard() }
        </ScrollView>
      )
    }

    return(
      <View style={styles.loadingWrapper}>
        <ActivityIndicator/>
      </View>
    )
  }

  renderButton = () => {
    return(
      <Button title="Press Here !" color="#4CAF50" onPress={this.onPressButton}/>
    )
  }
  

  render() {
    return(
      <View style={styles.container}>
        {/*<Button
          title="Fetch Data"
          color="#4CAF50"
          onPress={this.fetchCartoonList}
        />
        <Text>
          {`cartoonList : ${this.state.cartoonList}`}
        </Text>*/}
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Cartoon Network</Text>
        </View>
        { this.renderContent() }
        <View style={styles.headerWrapper}>
          { this.renderButton() }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:55,
  },
  loadingWrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    height: 50,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'center',
    // marginLeft:
  },
  wrapper: {
    flex:1,
    // backgroundColor: 'red',
  }
})