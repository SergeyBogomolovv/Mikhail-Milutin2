import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import featuredSlice from "./reducers/featuredSlice";
import contactsSlice from "./reducers/contactsSlice";

const rootReducer = combineReducers({
    featured: featuredSlice,
    contacts: contactsSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']