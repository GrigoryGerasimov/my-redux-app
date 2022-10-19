import { actionTypes } from "./index";

const { TASK_UPDATED, TASK_DELETED } = actionTypes;

export const actions = {
    taskCompleted(taskId) {
        return {
            type: TASK_UPDATED,
            payload: { id: taskId, completed: true }
        };
    },
    titleUpdated(taskId, taskTitle) {
        return {
            type: TASK_UPDATED,
            payload: { id: taskId, title: taskTitle }
        };
    },
    taskDeleted(taskId) {
        return {
            type: TASK_DELETED,
            payload: { id: taskId }
        };
    }
};
