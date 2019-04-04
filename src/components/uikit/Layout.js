import React from 'react'
import { View, StyleSheet, ScrollView, Button } from 'react-native'
import { w, BLUE } from '../../../constants'

const Layout = props => {
    const { container } = styles
    return (
        <View>
            <Button
                // onPress={}
                title="Random Joke"
                color={BLUE}
            />
            <ScrollView>
                <View style={container}>
                    {props.children}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        padding: 10,
        marginBottom: 150
    }
})

export { Layout }
