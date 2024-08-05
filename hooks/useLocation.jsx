import { useEffect, useState } from "react";
import * as Location from 'expo-location';

const useLocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [address, setAddress] = useState([]);

    const getLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied.');
                return;
            }
            const currentLocation = await Location.getCurrentPositionAsync({});
            if (currentLocation !== undefined) {
                setLocation(currentLocation)
            }
            const currentAddress = await Location.reverseGeocodeAsync({
                latitude: currentLocation?.coords?.latitude,
                longitude: currentLocation?.coords?.longitude
            })
            setAddress(currentAddress)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getLocation();
    }, [location])
    return {
        location, address
    }
}

export default useLocation;