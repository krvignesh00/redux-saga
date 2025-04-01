import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the saga middleware
sagaMiddleware.run(rootSaga);
