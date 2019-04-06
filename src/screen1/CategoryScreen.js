import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

import { Header } from '../components/uikit'
import { WHITE, BLUE, w } from '../../constants'

export default class CategoryScreen extends PureComponent {

    render() {
        console.log('this.props CategoryScreen', this.props)

        const { container } = styles
        const { navigation } = this.props

        return (
            <View style={container}>
                <Header
                    category
                    title={"CATEGORY"}
                    onPress={() => navigation.goBack()}
                    leftIcon='ios-arrow-back'
                    headerColor={BLUE}
                    leftColor={WHITE}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE
    }
})