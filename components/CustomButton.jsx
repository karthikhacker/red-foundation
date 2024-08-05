import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

const CustomButton = ({ title, containerStyle, handlePress, isLoading }) => {
    return (
        <TouchableOpacity
            className={`bg-primary justify-center items-center min-h-[52px] ${containerStyle} rounded-md`}
            onPress={handlePress}
        >
            <Text className={`text-md font-pbold text-white`}>
                {isLoading ? <ActivityIndicator
                    size="small"
                    color="#FFF"
                /> : title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton