import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { w } from '../../../constants'

const Icon = ({ data }) => {
  const { container, icon, cover } = styles
  const { icon_url } = data

  return (
    <View style={container}>
      <Image style={icon} source={{ uri: icon_url }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: w,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: "center"
  },
  icon: {
    width: 60,
    height: 60,
  }
})

export { Icon } 