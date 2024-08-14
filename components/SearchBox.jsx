import { View, Text, TextInput } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SearchBox = ({ value, handleChange }) => {
    return (
        <View className="bg-white w-full px-2 flex-row items-center py-2 rounded-md mt-4">
            <FontAwesome name="search" size={16} color="#9ca3af" />
            <TextInput
                placeholder='Search donor near you.. ex: Ab+,AB-'
                className="ml-2 w-full"
                value={value}
                onChangeText={handleChange}
            />
        </View>
    )
}

export default SearchBox