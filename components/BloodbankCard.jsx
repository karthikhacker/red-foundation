import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const BloodbankCard = ({ item }) => {

    return (
        <View className="bg-red-50 w-full py-4 mb-4 px-2 rounded-md">
            <Text className="font-psemibold text-lg text-red-500 capitalize ml-2">
                {item?.name}
            </Text>
            <View className="flex-row  gap-x-1 ">
                <Text className="font-semibold text-red-400">
                    <FontAwesome6 name="location-dot" size={24} color="#fca5a5" />
                </Text>
                <Text className="text-red-400 font-psemibold capitalize">{item?.city}</Text>
            </View>
            <View className="flex-row items-center gap-x-4 mt-2">
                <View className="bg-red-300 w-6 h-6 rounded-full justify-center items-center">
                    <Text className="font-semibold">
                        <FontAwesome name="phone" size={16} color="#f87171" />
                    </Text>
                </View>

                <Text className="font-semibold text-red-400">{item?.phoneNumber}</Text>
            </View>


        </View>
    )
}

export default BloodbankCard