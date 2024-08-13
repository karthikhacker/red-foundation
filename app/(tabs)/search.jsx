import { View, Text, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBox from '../../components/SearchBox'
import useLocation from '../../hooks/useLocation';
import { listDonorService, searchDonor } from '../../api/apiRequest';
import Loading from '../../components/Loading';
import SearchCard from '../../components/SearchCard';
import ShowMessage from '../../components/ShowMessage';

const search = () => {
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const { location } = useLocation();

    const listDonor = async () => {
        try {
            setLoading(true)
            const resultData = await listDonorService();
            console.log(resultData.data);
            setData(resultData.data);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(error?.response.data?.message)
            setLoading(false)
        }
    }
    const searchDonorService = async () => {
        try {
            let lat = location?.coords?.latitude;
            let lon = location?.coords?.longitude;

            if (searchText !== "") {
                const result = await searchDonor(searchText, lat, lon);
                console.log(result);
                setData(result.data);
            } else {
                listDonor()
            }
        } catch (error) {
            console.log('Error', error)
            setError(error?.response?.data?.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        searchDonorService()
    }, [searchText])

    if (loading) {
        return <Loading />
    }

    return (
        <SafeAreaView className="bg-white w-full px-4 h-[100vh]">
            <ScrollView >
                <View className="bg-primary h-28 px-2 rounded-b-2xl justify-center items-center" keyboardShouldPersistTaps="always">
                    <SearchBox
                        value={searchText}
                        handleChange={(e) => setSearchText(e)}
                    />
                </View>
                {data.length < 1 && (<ShowMessage text='No Donor Found!' />)}
                <View className="w-full mt-6">
                    {data?.map(item => <SearchCard
                        key={item._id}
                        item={item}
                    />)}
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#FFF" style='light' />
        </SafeAreaView>
    )
}

export default search