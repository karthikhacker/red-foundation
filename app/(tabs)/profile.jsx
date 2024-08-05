import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import profileImage from '../../assets/images/profile_image.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { logoutAction } from '../../feature/authSlice';
import { router } from 'expo-router';

const profile = () => {
    const { user } = useSelector(state => state.auth);
    console.log("profile", user);
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(logoutAction());
        return router.push('/signin')
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View className="w-full px-4  mt-2 h-[100vh]">
                    <View className="w-full rounded-t-md h-[230px]  items-center bg-primary relative">
                        <View className="absolute -bottom-12">
                            <Image
                                source={profileImage}
                                className="w-28 h-28 rounded-full"
                            />
                        </View>
                    </View>
                    <View className="mt-10 mb-2">
                        <View className="w-full mb-4">
                            <Text className="font-psemibold text-gray-400">Name</Text>
                            <Text className="font-psemibold text-gray-600 border border-gray-400 py-2 px-2">{user?.name}</Text>
                        </View>
                        <View className="w-full mb-4">
                            <Text className="font-psemibold text-gray-400">Age</Text>
                            <Text className="font-psemibold text-gray-600 border border-gray-400 py-2 px-2">{user?.age}</Text>
                        </View>
                        <View className="w-full mb-4">
                            <Text className="font-psemibold text-gray-400">Gender</Text>
                            <Text className="font-psemibold text-gray-600 border border-gray-400 py-2 px-2">{user?.gender}</Text>
                        </View>
                        <View className="w-full mb-4">
                            <Text className="font-psemibold text-gray-400">Phone number</Text>
                            <Text className="font-psemibold text-gray-600 border border-gray-400 py-2 px-2">{user?.phoneNumber.slice(3, 13)}</Text>
                        </View>
                        <View className="w-full mb-4">
                            <Text className="font-psemibold text-gray-400">Location</Text>
                            <Text className="font-psemibold text-gray-600 border border-gray-400 py-2 px-2">{user?.location}</Text>
                        </View>
                        <View className="w-full mb-4">
                            <CustomButton
                                title="LOGOUT"
                                containerStyle="mt-4 w-full"
                                handlePress={logoutUser}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default profile