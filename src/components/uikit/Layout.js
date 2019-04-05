import React from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import { w, BLUE } from '../../../constants'

const Layout = ({
    props,
    joke,
    onPress
}) => {
    const { container, jokeStyle } = styles

    return (
        <View style={container}>
            {/* {props.children} */}
            <Button
                onPress={onPress}
                title="Random Joke"
                color={BLUE}
            />
            <Text style={jokeStyle}>
                {joke}
            </Text>
            <FlatList style={container}
                data={[{ key: 'a' }, { key: 'b' }]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 10,
        marginBottom: 150,
    },
    jokeStyle: {
        padding: 10,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18
    }
})

export { Layout }
