import { View, Text, TextInput } from 'react-native'
import React from 'react'

const PhoneInput = ({ countryCode, value, handleChange }) => {
    return (
        <View className="w-full rounded-md h-14 bg-white flex-row   items-center px-2 border border-gray-200 " >
            <Text className="font-pregular text-gray-600  text-md border-r border-gray-300 pr-4">{countryCode}</Text>
            <TextInput
                className=" w-[300px] py-2 ml-4 text-md  font-pregular "
                placeholder='Enter your mobile number'
                value={value}
                onChangeText={handleChange}
            />
        </View >
    )
}

export default PhoneInput