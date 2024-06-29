import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter-reduceser";

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const createReduxStore = (initialState: Record<string, unknown> = {}) => configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
