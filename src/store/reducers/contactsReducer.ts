interface contactsState {
    isOpen: boolean
}

export enum contactsActionTypes {
    OPEN_CONTACTS = 'OPEN_CONTACTS',
    CLOSE_CONTACTS = 'CLOSE_CONTACTS',
}
interface openContactsAction {
    type: contactsActionTypes.OPEN_CONTACTS
}
interface closeContactsAction {
    type: contactsActionTypes.CLOSE_CONTACTS
}
export type ContactsAction= openContactsAction | closeContactsAction

const initialState: contactsState = {
    isOpen: false
}

export const contactsReducer = (state = initialState, action: ContactsAction) => {
    switch (action.type) {
        case contactsActionTypes.OPEN_CONTACTS:
            return {...state, isOpen: true}
        case contactsActionTypes.CLOSE_CONTACTS:
            return {...state, isOpen: false}
        default:
            return state
    }
}