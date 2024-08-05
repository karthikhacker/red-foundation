import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import signupImage from '../../assets/images/signup_image.jpg'
import Input from '../../components/Input'
import PhoneInput from '../../components/PhoneInput'
import RadioButton from '../../components/RadioButton'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { signupRequest } from '../../api/apiRequest'
import { signupAction } from '../../feature/authSlice'
import { useDispatch } from 'react-redux'

const signup = () => {
    const countryCode = "+91"
    const dispatch = useDispatch();
    const [value, setValue] = useState({
        name: "",
        phoneNumber: "",
        age: '',
        gender: "",
        location: "",
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handlePress = (genderData) => {
        setValue({ ...value, gender: genderData });
    }
    const validate = () => {
        let errors = {};
        let regex = /^(?:(?:\+91|91|0)?\s?[6789]\d{9})$/;

        if (!value?.name) errors.name = 'Name is required';
        if (value?.phoneNumber === "") errors.phoneNumber = 'Phone number is required.';
        if (!regex.test(value?.phoneNumber)) errors.phoneNumber = 'Not a valid phone number';
        if (!value?.age) errors.age = "Age is required";
        if (!value?.gender) errors.gender = "Gender is required.";
        if (!value?.location) errors.location = "City is required.";
        setError(errors);
        return Object.keys(errors).length === 0;
    }

    const submit = async () => {
        if (validate()) {
            setLoading(true);
            try {
                const userData = {
                    name: value?.name,
                    phoneNumber: countryCode + value?.phoneNumber,
                    age: value?.age,
                    gender: value?.gender,
                    location: value?.location
                }
                const result = await signupRequest(userData);
                dispatch(signupAction(result?.user?.phoneNumber))
                setLoading(false)
                router.push('/verify')
                console.log(result);
            } catch (error) {
                setError(error?.response?.data?.message)
                setLoading(false)
            }
        }
    }
    console.log(error)
    return (
        <SafeAreaView className=" h-full px-4 bg-white">
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View className="mt-8 items-center">
                    <Image
                        source={signupImage}
                        className="h-52 w-full"
                        resizeMode='contain'
                    />
                    <Text className="font-psemibold text-lg">SIGN UP</Text>
                    <Input
                        placeholder="Name"
                        containerStyle="w-full my-4"
                        value={value?.name}
                        handleChange={(e) => handleChange({ ...value, name: e })}
                    />
                    {error && <Text className="text-xs text-red-800 font-pregular text-md">{error?.name}</Text>}
                    <PhoneInput
                        countryCode={countryCode}
                        value={value?.phoneNumber}
                        handleChange={(e) => setValue({ ...value, phoneNumber: e })}
                    />
                    {error && <Text className="text-xs text-red-800 font-pregular text-md">{error?.phoneNumber}</Text>}
                    <RadioButton
                        value={value?.gender}
                        handlePress={handlePress}
                    />
                    {error && <Text className="text-xs text-red-800 font-pregular text-md">{error?.gender}</Text>}

                    <Input
                        placeholder="Age"
                        containerStyle="w-full my-4"
                        value={value?.age}
                        handleChange={(e) => setValue({ ...value, age: e })}
                    />
                    {error && <Text className="text-xs text-red-800 font-pregular text-md">{error?.age}</Text>}

                    <Input
                        placeholder="City"
                        containerStyle="w-full my-4"
                        value={value?.location}
                        handleChange={(e) => setValue({ ...value, location: e })}
                    />
                    {error && <Text className="text-xs text-red-800 font-pregular text-md">{error?.location}</Text>}
                    <CustomButton
                        title="SIGN UP"
                        containerStyle="mt-2 w-full"
                        handlePress={submit}
                        isLoading={loading}
                    />
                    <View className="pt-6 flex-row gap-2">
                        <Text className="font-pregular text-lg text-gray-600">
                            Already have an account ?
                        </Text>
                        <Text className="font-pregular text-lg text-violet-600">
                            <Link href="/signin">Sign in</Link>
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#FFF" />
        </SafeAreaView>
    )
}
export default signup

