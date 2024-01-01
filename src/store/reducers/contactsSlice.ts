import { createSlice } from '@reduxjs/toolkit'

interface contactsState {
    isOpen: boolean
}

const initialState: contactsState = {
    isOpen: false,
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContactsTrue: (state) => {
            state.isOpen = true
        },
        setContactsFalse: (state) => {
            state.isOpen = false
        },
    },
})

export const { setContactsTrue, setContactsFalse } = contactsSlice.actions

export default contactsSlice.reducer
