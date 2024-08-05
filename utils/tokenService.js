import AsyncStorage from "@react-native-async-storage/async-storage"

const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    return JSON.parse(token);
}

export { getToken } 