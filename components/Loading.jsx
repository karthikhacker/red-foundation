import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View className=" h-[88vh] justify-center items-center">
            <ActivityIndicator
                size="large"
                color="#5b21b6"
                animating={true}
            />
        </View>
    )
}

export default Loading