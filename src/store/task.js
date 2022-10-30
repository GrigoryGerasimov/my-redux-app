import { createSlice } from "@reduxjs/toolkit";
import { todosService } from "../services/todosService.js";
import { setError } from "./errors.js";

const initialState = {
    entities: [],
    isLoading: true
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        create(state, { payload }) {
            state.entities.unshift(payload);
        },
        receive(state, { payload }) {
            state.entities = payload;
            state.isLoading = false;
        },
        update(state, { payload }) {
            const index = state.entities.findIndex(stateItem => stateItem.id === payload.id);
            for (const stateField in state.entities[index]) {
                for (const payloadField in payload) {
                    if (stateField === payloadField) {
                        state.entities[index][stateField] = payload[payloadField];
                    }
                }
            }
        },
        remove(state, { payload }) {
            state.entities = state.entities.filter(stateItem => stateItem.id !== payload.id);
        },
        taskRequestSucceeded(state) {
            state.isLoading = true;
        },
        taskRequestFailed(state) {
            state.isLoading = false;
        }
    }
});

const { actions: { create, update, remove, receive, taskRequestSucceeded, taskRequestFailed }, reducer } = taskSlice;

export const completeTask = taskId => async(dispatch) => {
    try {
        const data = await todosService.put(taskId, { id: taskId, completed: true });
        dispatch(update(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const updateTitle = (taskId, taskTitle) => async(dispatch) => {
    try {
        const data = await todosService.put(taskId, { title: taskTitle });
        dispatch(update(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const deleteTask = taskId => async(dispatch) => {
    try {
        await todosService.delete(taskId);
        dispatch(remove({ id: taskId }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const loadTasks = () => async(dispatch) => {
    dispatch(taskRequestSucceeded());
    try {
        const data = await todosService.getAll();
        dispatch(receive(data));
    } catch (error) {
        dispatch(taskRequestFailed());
        dispatch(setError(error.message));
    }
};

export const createTask = (id, title) => async(dispatch) => {
    try {
        const data = await todosService.post({ id, title, completed: false });
        dispatch(create({ ...data, id }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const getTasks = () => state => state.tasks.entities;
export const getTasksLoadingStatus = () => state => state.tasks.isLoading;

export default reducer;
