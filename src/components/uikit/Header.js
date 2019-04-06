import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { w } from '../../../constants'


const Header = ({
  category,
  leftIcon,
  leftColor,
  title,
  headerColor,
  onPress
}) => {

  const { viewStyle, textStyle, leftButtonStyle } = styles

  return (
    <View style={[viewStyle, { backgroundColor: headerColor }]}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={leftIcon} style={[leftButtonStyle, { paddingLeft: category ? 10 : 20 }]} color={leftColor} />
      </TouchableOpacity>

      <Text numberOfLines={1} ellipsizeMode="tail" style={[textStyle, { paddingLeft: leftIcon ? 10 : 0 }]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    // justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    height: 90
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    width: w - 40,
    fontFamily: 'AvenirNext-DemiBold',
    paddingTop: 50
  },
  leftButtonStyle: {
    paddingTop: 50,
    fontSize: 35
  }
})

export { Header } 