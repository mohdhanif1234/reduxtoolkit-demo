import { RootState } from "../../app/rootReducer";

export const selectCounterValue = (state: RootState) => state.counter.value