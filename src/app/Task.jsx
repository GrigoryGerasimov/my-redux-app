import React from "react";
import Button from "./common/Button.jsx";
import { completeTask, updateTitle, deleteTask } from "../store/task.js";
import PropTypes from "prop-types";

const Task = ({ id, title, completed, dispatch }) => {
    return (
        <li className="list-group-item bg-dark border-light">
            <div className="d-flex flex-column justify-content-center align-items-center text-light p-4">
                <pre>{title}</pre>
                <pre>{completed ? "completed" : "in progress"}</pre>
                <Button
                    buttonClass="btn-outline-light"
                    onClick={() => dispatch(updateTitle(id, `New Title for ${id}`))}
                >
                    Update Title
                </Button>
                <Button
                    buttonClass="btn-outline-light"
                    onClick={() => dispatch(completeTask(id))}
                >
                    Complete Task
                </Button>
                <Button
                    buttonClass="btn-outline-danger"
                    onClick={() => dispatch(deleteTask(id))}
                >
                    Delete Task
                </Button>
            </div>
        </li>
    );
};

export default Task;

Task.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    completed: PropTypes.bool,
    dispatch: PropTypes.func,
    onCompleteTask: PropTypes.func,
    onChangeTaskTitle: PropTypes.func,
    onDeleteTask: PropTypes.func
};
