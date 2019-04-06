import React from 'react'
import { FlatList, View, TouchableOpacity } from 'react-native'

const Category = ({ data, onPress, key }) => {
    const { category } = data

    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View>
                    <FlatList
                        data={[{ key: 'a' }, { key: 'b' }]}
                        renderItem={({ item }) => <Text>{item.key}</Text>}
                    />
                </View>
            </TouchableOpacity>
        </View>

    )
}

export { Category } 