import { Ukrasheniya } from "../../types/types"

export enum featuredActionTypes {
    ADD_TO_FEATURED = 'ADD_TO_FEATURED',
    DELETE_FROM_FEATURED = 'DELETE_FROM_FEATURED',
}

interface featuredState {
    ident: string
    featured: string[]
}

interface addFeaturedAction {
    type: featuredActionTypes.ADD_TO_FEATURED
    payload: string
}

interface deleteFeaturedAction {
    type: featuredActionTypes.DELETE_FROM_FEATURED
    payload: any
}

export type FeaturedActions= addFeaturedAction | deleteFeaturedAction

const initialState: featuredState = {
    ident: '',
    featured: []
}

export const featuredReducer = (state = initialState, action: FeaturedActions) => {
    switch (action.type) {
        case featuredActionTypes.ADD_TO_FEATURED:
            return {...state, featured: [...state.featured, action.payload]}
        case featuredActionTypes.DELETE_FROM_FEATURED:
            state.featured.splice(state.featured.indexOf(action.payload), 1)
            return {...state}
        default:
            return state
    }
}