import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import CategoryScreen from './CategoryScreen'
import {
  JOKE_HOME,
  JOKE_CATEGORY
} from '../routes'

export default createStackNavigator(
  {
    [JOKE_HOME]: HomeScreen,
    [JOKE_CATEGORY]: CategoryScreen
  },
  {
    headerMode : "none"
  }
);