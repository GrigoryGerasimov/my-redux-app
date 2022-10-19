import React, { useState, useEffect } from "react";
import { initStore, actions } from "../store";
import Tasks from "./Tasks.jsx";
import Task from "./Task.jsx";

const { taskCompleted, titleUpdated, taskDeleted } = actions;

const store = initStore();

const App = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(() => setState(store.getState()));
    }, []);

    const completeTask = (taskId) => {
        store.dispatch(taskCompleted(taskId));
    };

    const changeTaskTitle = (taskId, taskTitle) => {
        store.dispatch(titleUpdated(taskId, taskTitle));
    };

    const deleteTask = taskId => {
        store.dispatch(taskDeleted(taskId));
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center bg-dark" style={{ height: "100vh" }}>
            <Tasks>
                {state.map(({ id, title, completed }) => (
                    <Task
                        key={id}
                        id={id}
                        title={title}
                        completed={completed}
                        onCompleteTask={completeTask}
                        onChangeTaskTitle={changeTaskTitle}
                        onDeleteTask={deleteTask}
                    />
                ))}
            </Tasks>
        </div>
    );
};

export default App;
