import { View, Text } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const ShowMessage = ({ text }) => {
    return (
        <View className="items-center justify-center w-full h-[80vh] ">
            <Entypo name="emoji-sad" size={34} color="#9ca3af" />
            <Text className="text-xl font-psemibold">
                {text}
            </Text>
        </View>
    )
}

export default ShowMessage