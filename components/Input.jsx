import React from 'react'
import { TextInput } from 'react-native'

const Input = ({ placeholder, containerStyle, value, handleChange }) => {
    return (
        <TextInput
            placeholder={placeholder}
            className={`border border-gray-200 h-12 px-2 rounded-md font-pregular justify-center text-gray-500 ${containerStyle}`}
            value={value}
            onChangeText={handleChange}
        />
    )
}

export default Input