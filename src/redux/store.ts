import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import cartSlice from './features/cart/cartSlice'; // Import the cart slice
import { baseApi } from './api/baseApi';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { persistStore } from 'redux-persist';

// Persist config for authentication
const authPersistConfig = {
    key: 'auth',
    storage,
};

// Persist config for cart
const cartPersistConfig = {
    key: 'cart',
    storage,
};

// Create persisted reducers for auth and cart
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        cart: persistedCartReducer, // Add cart slice
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Initialize `persistor` to enable Redux Persist for both auth and cart
export const persistor = persistStore(store);
