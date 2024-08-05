import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const _layout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#ef4444',
                tabBarInactiveTintColor: '#9ca3af',
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    borderTopWidth: 1,
                    borderTopColor: '#eee',
                    height: 64
                }

            }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, focused }) => (
                            <View className="items-center justify-center">
                                <FontAwesome5 name="home" size={24} color={color} />
                                <Text className={`${focused ? 'font-pmedium' : 'font-pregular'} text-xs`} style={{ color: color }}>Home</Text>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        title: "Find donor",
                        tabBarIcon: ({ color, focused }) => (
                            <View className="items-center justify-center">
                                <FontAwesome name="user-plus" size={24} color={color} />
                                <Text className={`${focused ? 'font-pmedium' : 'font-pregular'} text-xs`} style={{ color: color }}>Find donor</Text>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name="service"
                    options={{
                        title: "Ambulance service",
                        tabBarIcon: ({ color, focused }) => (
                            <View className="items-center justify-center">
                                <FontAwesome5 name="ambulance" size={24} color={color} />
                                <Text className={`${focused ? 'font-pmedium' : 'font-pregular'} text-xs`} style={{ color: color }}>Find Ambulance</Text>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ color, focused }) => (
                            <View className="items-center justify-center">
                                <FontAwesome name="user" size={24} color={color} />
                                <Text className={`${focused ? 'font-pmedium' : 'font-pregular'} text-xs`} style={{ color: color }}>Profile</Text>
                            </View>
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default _layout