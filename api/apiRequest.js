import client from "./client"
import { getToken } from "../utils/tokenService";

export const login = async (phoneNumber) => {

    const res = await client.post('/signin', phoneNumber);
    return res.data;
}

export const signupRequest = async (userData) => {
    const res = await client.post('/signup', userData);
    return res.data;
}

export const verifyOtp = async (userData) => {
    const res = await client.post('/verify', userData);
    return res.data;
}

export const searchDonor = async (searchText, lat, lon) => {
    const token = await getToken();
    console.log('token', token)
    const url = `/search?q=${encodeURIComponent(searchText)}&lat=${lat}&lon=${lon}`
    const res = await client.get(`${url}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(res.data);
    return res.data;
}

export const ambulanceService = async (lat, lon) => {
    const token = await getToken();
    const res = await client.get(`/ambulance/services?lat=${lat}&lon=${lon}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

export const listDonorService = async (lat, lon) => {
    const token = await getToken();
    const res = await client.get(`/donors`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

export const bloodBankService = async (lat, lon) => {
    const token = await getToken();
    const res = await client.get(`/blood/banks?lat=${lat}&lon=${lon}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}