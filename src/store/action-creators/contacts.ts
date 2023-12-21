import { Dispatch } from "react"
import { ContactsAction, contactsActionTypes } from "../reducers/contactsReducer"

export const openContacts = () => {
    return (dispatch: Dispatch<ContactsAction>) => {
        dispatch({type: contactsActionTypes.OPEN_CONTACTS})
    }
}

export const closeContacts = () => {
    return (dispatch: Dispatch<ContactsAction>) => {
        dispatch({type: contactsActionTypes.CLOSE_CONTACTS})
    }
}