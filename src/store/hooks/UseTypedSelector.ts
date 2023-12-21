import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../reducers";

export const userTypedSelector: TypedUseSelectorHook<RootState> = useSelector