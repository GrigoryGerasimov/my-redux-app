import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTasks, getTasks, getTasksLoadingStatus, createTask } from "../store/task.js";
import { getError } from "../store/errors.js";
import Tasks from "./Tasks.jsx";
import Task from "./Task.jsx";
import Loader from "./common/Loader.jsx";
import Button from "./common/Button.jsx";
import ErrorMessage from "./common/ErrorMessage.jsx";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const App = () => {
    const state = useSelector(getTasks());
    const isLoading = useSelector(getTasksLoadingStatus());
    const error = useSelector(getError());
    const dispatch = useDispatch();
    const id = nanoid();

    useEffect(() => {
        dispatch(loadTasks());
    }, []);

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-dark" style={{ height: "100%" }}>
            <Button
                buttonClass="btn-outline-warning w-50"
                onClick={() => dispatch(createTask(id, `New Task #${id}`))}
            >
                Create Task
            </Button>
            {error ? <ErrorMessage error={error}/> : !isLoading ? (
                <Tasks>
                    {state.map(({ id, title, completed }) => (
                        <Task
                            key={id}
                            id={id}
                            title={title}
                            completed={completed}
                            dispatch={dispatch}
                        />
                    ))}
                </Tasks>
            ) : <Loader/>}
        </div>
    );
};

export default App;

App.propTypes = {
    store: PropTypes.object
};
