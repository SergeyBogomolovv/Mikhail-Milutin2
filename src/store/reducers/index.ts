import { combineReducers } from "redux";
import { contactsReducer } from "./contactsReducer";
import { featuredReducer } from "./featuredReducer";

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    featured: featuredReducer,
})

export type RootState = ReturnType<typeof rootReducer>