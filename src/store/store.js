import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./task.js";
import errorReducer from "./errors.js";
import { logger } from "./middleware";

const rootReducer = combineReducers({
    tasks: taskReducer,
    errors: errorReducer
});

const createStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== "production"
    });
};

export default createStore;
