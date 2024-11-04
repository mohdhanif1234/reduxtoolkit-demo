import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector