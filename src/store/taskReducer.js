import { actionTypes } from "./index";

const { TASK_UPDATED, TASK_DELETED } = actionTypes;

export const taskReducer = (state, action) => {
    const { type, payload } = action;

    const actions = {
        [TASK_UPDATED]() {
            const newState = [...state];
            const task = newState.find(stateItem => stateItem.id === payload.id);
            for (const taskField in task) {
                for (const payloadField in payload) {
                    if (taskField === payloadField) {
                        task[taskField] = payload[payloadField];
                    }
                }
            }
            return newState;
        },
        [TASK_DELETED]() {
            const newState = [...state];
            return newState.filter(stateItem => stateItem.id !== payload.id);
        }
    };

    return actions[type]?.() || state;
};
