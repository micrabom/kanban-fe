import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'client', 'tab']
}

const rootReducer = combineReducers({
    location: locationReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck : false
    })

    // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
