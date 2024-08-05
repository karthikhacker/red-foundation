import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OtpInput } from "react-native-otp-entry";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, router } from 'expo-router';
import verifyImage from '../../assets/images/verify.jpg'
import { verifyOtp } from '../../api/apiRequest';
import { verifyUserAction } from '../../feature/authSlice';

const verify = () => {
    const [otp, setOtp] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const { user, phoneNumber } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true)
            const data = await verifyOtp({ phoneNumber, otp });
            dispatch(verifyUserAction(data))
            setIsSubmitting(false)
            router.push('/home');
        } catch (error) {
            console.log(error.response?.data);
            setError(error?.response?.data?.message)
            setIsSubmitting(false);
        }
    }
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View className="w-full h-[70vh] justify-center items-center px-4">
                    <Image
                        source={verifyImage}
                        className="w-[200px] h-[200px] mb-16"
                        resizeMode='contain'
                    />
                    <Text className="text-gray-400 font-psemibold text-lg mb-8">
                        Enter your code
                    </Text>
                    <OtpInput
                        numberOfDigits={4}
                        onTextChange={(text) => setOtp(text)}
                        focusColor="#7e22ce"
                    />
                    <CustomButton
                        title="SUBMIT"
                        containerStyle="mt-16 w-full"
                        handlePress={handleSubmit}
                        isLoading={isSubmitting}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default verify