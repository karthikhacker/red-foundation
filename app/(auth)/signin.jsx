import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton';
import { Link, Redirect, router } from 'expo-router';
import client from '../../api/client';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo_small.png'
import PhoneInput from '../../components/PhoneInput';
import { login } from '../../api/apiRequest';
import { loginAction } from '../../feature/authSlice';

const signin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const countryCode = "+91";


    const submit = async () => {
        let regex = /^(?:(?:\+91|91|0)?\s?[6789]\d{9})$/;
        if (phoneNumber === "") {
            setError('Mobile is required!')
        } else if (regex.test(phoneNumber) === false) {
            setError('Not a valid phone number!.')
        } else {
            try {
                setIsSubmitting(true)
                const data = await login({ phoneNumber: countryCode + phoneNumber });
                dispatch(loginAction(data));
                console.log(data);
                router.push("/verify")
                setIsSubmitting(false)
                setError(null)
            } catch (error) {
                console.log("error signin", error)
                setError(error?.response?.data?.message)
                setIsSubmitting(false);
            }
        }

    }
    if (user !== null) {
        return <Redirect href="/home" />
    }
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View className="w-full h-[90vh] justify-center items-center px-4">
                    <Image
                        source={logo}
                        className="w-full h-[100px] mb-10"
                        resizeMode='contain'
                    />
                    <Text className="text-primary font-psemibold text-lg mb-2">
                        Sign in  to Red Foundation
                    </Text>
                    <Text className="text-red-900 font-pregular my-2">
                        {error}
                    </Text>
                    <PhoneInput
                        countryCode={countryCode}
                        value={phoneNumber}
                        handleChange={(e) => setPhoneNumber(e)}
                    />
                    <CustomButton
                        title="LOGIN"
                        containerStyle="mt-8 w-full"
                        handlePress={submit}
                        isLoading={isSubmitting}
                    />
                    <View className="pt-6 flex-row gap-2">
                        <Text className="font-pregular text-lg text-gray-600">
                            Don't have an account ?
                        </Text>
                        <Text className="font-pregular text-lg text-violet-600">
                            <Link href="/signup">Signup</Link>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default signin