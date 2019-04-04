import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { w } from '../../../constants'


const Header = ({ 
  title,
  headerColor
}) => {

  const { viewStyle, textStyle } = styles

  return (
    <View style={[viewStyle, {backgroundColor : headerColor}]}>    
      <Text numberOfLines={1} ellipsizeMode="tail" style={[textStyle]}>{title}</Text>
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
  }
})

export { Header } 