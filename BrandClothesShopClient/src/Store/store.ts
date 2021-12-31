import homePage from "./Reducers/homePageReducer/homePageReducer";
import showcase from "./Reducers/showcaseReducer/showcaseReducer";
import authMe from "./Reducers/authMeReducer/authMeReducer";
import createSagaMiddleware from "@redux-saga/core";
import {configureStore} from "@reduxjs/toolkit";
import saga from "./sagas";
import {cart} from "./Reducers/cartReducer/cartReducer";

let sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
]

const reducer = {
    homePage,
    showcase,
    authMe,
    cart,
};

let store = configureStore({
    reducer,
    middleware,
    devTools: true,
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>

export default store;