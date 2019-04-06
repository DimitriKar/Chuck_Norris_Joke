import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Icon, Layout } from '../components/uikit'
import { BLUE } from '../../constants'
import { JOKE_HOME, JOKE_CATEGORY } from '../routes';

// Url vers un fichier JSON 
const url = 'https://api.chucknorris.io/jokes/random'
const categoryUrl = 'https://api.chucknorris.io/jokes/categories'

export default class App extends Component {

  state = {
    title: "Chuck Norris Jokes",
    joke: "",
    data: [],
    category: []
  }


  componentDidMount = async () => {
    this._getCategory()
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
      const category = await response.json()
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
    const { navigation } = this.props

    console.log("props", this.props)
    console.log("navigation", navigation)

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
          category={category}
          onPress={() => this._getJoke()}
          onClick={() => navigation.navigate(JOKE_CATEGORY)}
        />
      </View>
    );
  }
}
