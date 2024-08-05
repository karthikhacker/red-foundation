import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import logoSmall from '../../assets/images/logo_small.png';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import useLocation from '../../hooks/useLocation';
import quote from '../../assets/images/quote.jpg'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const home = () => {
    const { address } = useLocation();

    return (
        <SafeAreaView className="w-full h-[100vh] px-4 bg-white">
            <ScrollView>
                <View className="w-full   py-4">
                    <View className="bg-red-50 shadow flex-row gap-x-2 items-center px-2 py-4">
                        <FontAwesome6 name="hand-holding-droplet" size={24} color="#ef4444" />
                        <Text className="font-pextrabold text-primary text-lg">RED FOUNDATION</Text>
                    </View>
                    {address.length < 1 && (
                        <View className="w-full text-center items-center my-4">
                            <Text className="font-pregular text-md text-gray-500">Location turned off !</Text>

                        </View>
                    )}

                    {address.map((add, i) => (
                        <View key={i} className="my-2 flex-row gap-x-2">
                            <FontAwesome6 name="location-dot" size={20} color="#d1d5db" />
                            <Text className="text-md font-psemibold">{add?.city}</Text>
                        </View>
                    ))}
                    <View className="w-full p-0 m-0">
                        <Image
                            source={quote}
                            className="w-[100%] h-[360px]"
                            resizeMode='contain'
                        />
                    </View>
                    <View className="mt-4 items-center">
                        <TouchableOpacity
                            className="bg-red-100 w-48 h-16 items-center justify-center rounded-md flex-row gap-x-2 "
                        >
                            <FontAwesome6 name="location-dot" size={20} color="#ef4444" />
                            <Link className='text-primary font-psemibold text-md' href="/search">Find Donor Near You</Link>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className=" bg-red-100 w-full h-16 my-8 items-center justify-center rounded-md flex-row gap-x-2 "
                        >
                            <FontAwesome6 name="location-dot" size={20} color="#ef4444" />
                            <Link className='text-primary font-psemibold text-md' href="/bloodbank">Find Blood Bank near your</Link>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default home