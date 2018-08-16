import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    state = {
      response: ''
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        // console.warn(res.movies[0].title)
        this.setState({ response: res.movies[0].title})
      }
      )
      .catch(err => console.warn('err!', err))
  }

  callApi = async () => {
    const response = await fetch('http://127.0.0.1:3000/v1/movies.json')
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)

    return body
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!!!</Text>
        <Text>{this.state ? this.state.response : '' }</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
