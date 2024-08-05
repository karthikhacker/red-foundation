import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const RadioButton = ({ value, handlePress }) => {
    const gender = ['Male', 'Female'];
    return (
        <View className="w-full items-start my-4">
            <Text className="font-pregular mb-2 text-md text-gray-500">Gender</Text>
            <View className="flex-row items-center gap-x-6" >
                {gender.map((g, i) => (
                    <View className="flex-row items-center gap-x-2" key={i}>
                        <TouchableOpacity className="w-6 h-6 mr-2 border border-gray-500 rounded-full" onPress={() => handlePress(g)} key={i}>
                            {value === g && <View className="bg-gray-600 h-3 w-3 ml-[5px] mt-[5px] rounded-full  "></View>
                            }
                        </TouchableOpacity>
                        <Text>{g}</Text>
                    </View>
                ))}
            </View>
        </View>

    )
}
export default RadioButton