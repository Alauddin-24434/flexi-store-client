// authSlice.ts
import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface User {
    id: string;
    name: string;
    email: string;
    profileImage?: string;
    role: string; // Add role to the user interface
}


interface AuthState {
    token: string | null;
    user: User | null; 
}

const initialState: AuthState = {
    token: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ user: User, token: string }>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }
        ,
        logout(state) {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken=(state:RootState)=>state.auth.token;
export const useCurrentUser= (state:RootState)=>state.auth.user;

