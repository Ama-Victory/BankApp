// import { configureStore } from "@reduxjs/toolkit";
import  bankApp  from "./features";

// export const store = configureStore({
//     reducer:{
//         bankAppStore :bankApp
//     }
// })

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

// import features from './Global/Features'

const persistConfig = {
    key: "root",
    storage: storage,
};
const rootReducers = combineReducers({
    bankAppStore: bankApp,
    // Add other reducers here if needed
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: { bankAppStore: persistedReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,      
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
setupListeners(store.dispatch);

