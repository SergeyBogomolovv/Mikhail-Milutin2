import { combineReducers } from "redux";
import { contactsReducer } from "./contactsReducer";

export const rootReducer = combineReducers({
    contacts: contactsReducer,
})

export type RootState = ReturnType<typeof rootReducer>