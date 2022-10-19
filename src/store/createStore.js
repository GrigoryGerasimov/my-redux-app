export const createStore = (reducer, initialState) => {
    let state = initialState;
    const listeners = [];

    const getState = () => {
        return state;
    };

    const subscribe = listener => {
        listeners.push(listener);
    };

    const dispatch = action => {
        state = reducer(state, action);
        for (const listener of listeners) listener();
    };

    return {
        getState,
        subscribe,
        dispatch
    };
};
