import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

// import StatusBarAlert from 'react-native-statusbar-alert'

export default class Home extends Component {

  onPressGoToGraphQL = () => {
    this.props.navigator.push({ id: 'Cartoon', title: 'GraphQL'})
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>
          Test Statusbar Alert ja
        </Text>
        <View style={styles.buttonWrapper}>
          <Button title="Press ME !" color="#4CAF50" onPress={this.props.onPress}/>
        </View>
        <View style={styles.viewWrapper}>
          <Text>
            {`visible status : ${this.props.visible}`}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Go to graphQL !" color="#00BCD4" onPress={this.onPressGoToGraphQL}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  viewWrapper: {
    marginTop: 15,
  },
  buttonWrapper: {
    marginTop: 15,
  }
})