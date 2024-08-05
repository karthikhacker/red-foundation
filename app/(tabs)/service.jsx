import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import useLocation from '../../hooks/useLocation';
import { ambulanceService } from '../../api/apiRequest';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import BloodbankCard from '../../components/BloodbankCard';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ShowMessage from '../../components/ShowMessage';
import ServiceCard from '../../components/ServiceCard';
import Loading from '../../components/Loading';

const service = () => {
    const { location } = useLocation();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let lat = location?.coords?.latitude;
    let lon = location?.coords?.longitude;

    const listAmbulanceService = async () => {
        try {
            setLoading(true)
            const result = await ambulanceService(lat, lon);
            console.log('ambulance', result.data)
            setData(result.data);
            setLoading(false)

        } catch (error) {
            setError(error?.response?.data?.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        listAmbulanceService()
    }, [lat, lon])
    if (loading) {
        return <Loading />
    }
    return (
        <SafeAreaView className="bg-white px-4 w-full h-[1000vh]">
            <ScrollView>
                <View className="bg-primary px-4 h-24 flex-row justify-center items-center rounded-b-md" keyboardShouldPersistTaps="always">
                    <Text className="mb-1">
                        <Link href="/home">
                            <FontAwesome name="arrow-left" size={18} color="#f9fafb" />
                        </Link>
                    </Text>
                    <Text className="font-psemibold text-lg text-center text-gray-50 flex-1">
                        Ambulance service Near You
                    </Text>
                </View>
                {data.length < 1 && (<ShowMessage text="No Ambulance Near You." />)}
                <View className="mt-8">
                    {data?.map(item => <ServiceCard
                        key={item._id}
                        item={item}
                    />)}
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#FFF' />
        </SafeAreaView>
    )
}

export default service