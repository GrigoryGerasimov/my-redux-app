import { createStore } from "redux";
import { taskReducer } from "./index";

const initialState = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false }
];

export const initStore = () => createStore(taskReducer, initialState);