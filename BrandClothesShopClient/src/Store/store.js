import homePage from "./Reducers/homePageReducer/homePageReducer";
import createSagaMiddleware from "@redux-saga/core";
import ThunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import saga from "./sagas";

let sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
    ThunkMiddleware
]

const reducer = {
    homePage,
};

let store = configureStore({
    reducer,
    middleware,
});

sagaMiddleware.run(saga);

export default store;