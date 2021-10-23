import homePage from "./Reducers/homePageReducer/homePageReducer";
import showcase from "./Reducers/showcaseReducer/showcaseReducer";
import authMe from "./Reducers/authMeReducer/authMeReducer";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import saga from "./sagas";

let sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
]

const reducer = {
    homePage,
    showcase,
    authMe,
};

let store = configureStore({
    reducer,
    middleware,
    devTools: true,
});

sagaMiddleware.run(saga);

export default store;