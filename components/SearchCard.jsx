import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Linking from "expo-linking"

const SearchCard = ({ item }) => {
    const openPhone = () => {
        Linking.openURL(`tel:${item.phoneNumber}`)
    }
    const openWhatsapp = () => {
        Linking.openURL(`http://api.whatsapp.com/send?phone=${item?.phoneNumber}`)
    }
    return (
        <View className="w-full bg-red-50 px-2 py-2 mb-4 rounded-md">
            <View className="flex-row items-center gap-x-4">
                <View className="flex-row basis-[30%]">
                    <FontAwesome6 name="droplet" size={34} color="#ef4444" />
                    <Text className="font-pregular text-lg pl-2 text-gray-500">{item.bloodGroup}</Text>
                </View>
                <View className="flex-1">
                    <View className="flex-row gap-x-2">
                        <Text className="text-lg font-semibold text-gray-500">{item.name}</Text>
                        <Text className="text-md mt-1 font-pregular text-gray-500">{item.age},year's old</Text>
                    </View>
                    <View className="flex-row gap-x-2 mt-2">
                        <FontAwesome name="user" size={16} color="#d1d5db" />
                        <Text className="text-sm font-pregular text-gray-500">{item?.gender}</Text>
                    </View>
                    <View className="flex-row gap-x-2 mt-2">
                        <FontAwesome6 name="location-dot" size={16} color="#d1d5db" />
                        <Text className="text-sm font-pregular text-gray-500">{item?.area}, {item?.city}</Text>
                    </View>
                    <View className="flex-row gap-x-8 mt-2">
                        <FontAwesome name="phone-square" size={16} color="#fecaca" onPress={openPhone} />
                        <FontAwesome6 name="whatsapp" size={16} color="#fecaca" onPress={openWhatsapp} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SearchCard