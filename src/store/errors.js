import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: []
};

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        set(state, { payload }) {
            state.entities.push(payload);
        }
    }
});

const { actions: { set }, reducer } = errorSlice;

export const setError = message => dispatch => {
    dispatch(set(message));
};

export const getError = () => state => state.errors.entities[0];

export default reducer;
