import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    user: null,
    phoneNumber: "",
    token: null
}
const loaduserFromStorage = async () => {
    try {
        const userData = await AsyncStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        return null
    }
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signupAction: (state, action) => {
            state.phoneNumber = action.payload
        },
        loginAction: (state, action) => {
            state.phoneNumber = action.payload.user;
        },
        verifyUserAction: (state, action) => {
            state.user = action.payload.user;
            const user = action.payload.user;
            AsyncStorage.setItem('userData', JSON.stringify(user));
            AsyncStorage.setItem('token', JSON.stringify(action.payload.token));
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logoutAction: (state) => {
            state.user = null;
            AsyncStorage.removeItem('userData')
        }
    }
})

export const { signupAction, loginAction, verifyUserAction, setUser, logoutAction } = authSlice.actions
export default authSlice.reducer

export const loadUser = () => async (dispatch) => {
    const user = await loaduserFromStorage();
    if (user) {
        dispatch(setUser(user));
    }
}