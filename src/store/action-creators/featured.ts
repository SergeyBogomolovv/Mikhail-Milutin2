import { Dispatch } from "redux"
import { FeaturedActions, featuredActionTypes } from "../reducers/featuredReducer"


export const addFeatured = (ident: any) => {
    return (dispatch: Dispatch<FeaturedActions>) => {
        dispatch({type: featuredActionTypes.ADD_TO_FEATURED, payload: ident})
    }
}

export const removeFeatured = (ident: any) => {
    return (dispatch: Dispatch<FeaturedActions>) => {
        dispatch({type: featuredActionTypes.DELETE_FROM_FEATURED, payload: ident})
    }
}