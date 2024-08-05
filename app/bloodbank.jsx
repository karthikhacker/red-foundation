import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import useLocation from '../hooks/useLocation';
import { bloodBankService } from '../api/apiRequest';
import Loading from '../components/Loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BloodbankCard from '../components/BloodbankCard';
import ShowMessage from '../components/ShowMessage';

const bloodbank = () => {
    const { location } = useLocation();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let lat = location?.coords?.latitude;
    let lon = location?.coords?.longitude;

    const listBloodbanks = async () => {
        try {
            setLoading(true)
            const result = await bloodBankService(lat, lon);
            setData(result.data);
            setLoading(false)

        } catch (error) {
            if (error.response) {
                setError(error?.response?.data?.mesage);
            }
        }
    }
    useEffect(() => {
        listBloodbanks()
    }, [lat, lon])
    if (loading) {
        return <Loading />
    }
    return (
        <SafeAreaView className="bg-white px-4 w-full h-[1000vh]">
            <ScrollView>
                <View className="bg-primary px-4 h-24 flex-row justify-center items-center rounded-b-md">
                    <Text className="mb-1">
                        <Link href="/home">
                            <FontAwesome name="arrow-left" size={18} color="#f9fafb" />
                        </Link>
                    </Text>
                    <Text className="font-psemibold text-lg text-center text-gray-50 flex-1">

                        Blood Bank Near You
                    </Text>
                </View>
                {data.length < 1 && (<ShowMessage text="No Blood Bank Near You." />)}
                <View className="mt-8">
                    {data?.map(item => <BloodbankCard
                        key={item._id}
                        item={item}
                    />)}
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#FFF' />
        </SafeAreaView>
    )
}

export default bloodbank