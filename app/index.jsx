import { View, Text, ScrollView, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import { Redirect, router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import logo from '../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../feature/authSlice'

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(loadUser())

    }, [dispatch])
    if (user) {
        <Redirect href="/home" />
    }
    console.log(process.env.EXPO_PUBLIC_BASE_URL)
    return (
        <SafeAreaView className=" bg-white h-[100vh]">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className=" w-full h-full px-4 mt-7 items-center ">
                    <Image
                        source={logo}
                        className="h-[500px]"
                        resizeMode='contain'
                    />
                    <CustomButton
                        title="Cont"
                        containerStyle="mt-7 w-full"
                        handlePress={() => { router.push('/signin') }}
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#FFF" style='light' />

        </SafeAreaView>
    )
}

export default App