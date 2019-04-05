import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Icon, Layout } from '../components/uikit'
import { WHITE, BLUE } from '../../constants'

// Url vers un fichier JSON 
const url = 'https://api.chucknorris.io/jokes/random'
const categoryUrl = 'https://api.chucknorris.io/jokes/categories'

export default class App extends Component {

  state = {
    title: "Chuck Norris Jokes",
    joke: "",
    data: [],
    category : []
  }


  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (error) {
      throw console.log("componentDidMount error")
    }
  }

  async _getRandomJoke() {
    try {
      const response = await fetch(url);
      return await response.json();
    }
    catch (error) {
      return console.error(error);
    }
  }

  _getCategory = async () => {
    try {
      const response = await fetch(categoryUrl)
      const category = await response.text()
      this.setState({ category })
    } catch (error) {
      throw console.log("_getCategory error")
    }
  }

  _getJoke() {
    this._getRandomJoke().then(res => {
      this.setState({
        joke: res.value,
      })
    })
  }

  render() {
    const { title, data, joke, category } = this.state

    console.log("state", this.state);
    // voir les infos du serveur json
    console.log('data', data)
    console.log('category', category)

    return (
      <View>
        <Header
          title={title}
          headerColor={BLUE}
        />
        <Icon
          data={data}
        />
        <Layout
          joke={joke}
          onPress={() => this._getJoke()}
          category={category}
        />
      </View>
    );
  }
}
