import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import contactReducer from './contactSlice';
import groupReducer from './groupSlice';
import gnameReducer from './gnameSlice';
import unameReducer from './unameSlice';

import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

let persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
let rootReducer = combineReducers(
    {
        uname: unameReducer,
        contact: contactReducer,
        group: groupReducer,
        gname: gnameReducer,
    }
)

let persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
});

export default store;