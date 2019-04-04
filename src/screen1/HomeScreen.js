import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Icon, Layout } from '../components/uikit'
import { WHITE, BLUE } from '../../constants'

// Url vers un fichier JSON 
const url = 'https://api.chucknorris.io/jokes/random'

export default class App extends Component {

  state = {
    title: "Chuck Norris Jokes",
    data: []
  }

  componentDidMount = async () => {

    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (error) {
      throw error
    }
  }

  render() {

    console.log("state", this.state);

    const { title, data } = this.state

    // voir les infos du serveur json
    console.log('data', data)

    return (
      <View>
        <Header
          title={title}
          headerColor={BLUE}
        />
        <Icon data={data} />

        <Layout>

        </Layout>
      </View>
    );
  }
}
