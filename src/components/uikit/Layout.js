import React from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import { w, BLUE, WHITE } from '../../../constants'

const Layout = ({
    joke,
    onPress,
    onClick,
    category
}) => {
    const { container, jokeStyle, flatview, categoryText } = styles

    return (
        <View style={container}>
            <Button
                onPress={onPress}
                title="Random Joke"
                color={BLUE}
            />
            <Text style={jokeStyle}>
                {joke}
            </Text>

            <Button
                onPress={onClick}
                title="Navigation"
                color={BLUE}
            />

            <FlatList
                data={category}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <View style={flatview}>
                        <Text style={categoryText}>{item}</Text>
                    </View>
                }
                keyExtractor={item => item}
            />

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 10,
        marginBottom: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    jokeStyle: {
        padding: 10,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18
    },
    flatview: {
        paddingTop: 5,
        width : w / 2,
    },
    categoryText : {
        padding : 5,
        borderRadius: 10,
        backgroundColor : BLUE,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        color : WHITE,
        textAlign : "center",
        textTransform : "uppercase"        
    }
})

export { Layout }
