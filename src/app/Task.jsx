import React from "react";
import PropTypes from "prop-types";

const Task = ({ id, title, completed, onCompleteTask, onChangeTaskTitle, onDeleteTask }) => {
    return (
        <li className="list-group-item bg-dark border-light">
            <div className="d-flex flex-column justify-content-center align-items-center text-light p-4">
                <pre>{title}</pre>
                <pre>{completed ? "completed" : "in progress"}</pre>
                <button
                    className="btn btn-outline-light my-1"
                    onClick={() => onChangeTaskTitle(id, `New Title for ${id}`)}
                >
                Update Title
                </button>
                <button
                    className="btn btn-outline-light my-1"
                    onClick={() => onCompleteTask(id)}
                >
                Complete Task
                </button>
                <button
                    className="btn btn-outline-danger my-1"
                    onClick={() => onDeleteTask(id)}
                >
                Delete Task
                </button>
            </div>
        </li>
    );
};

export default Task;

Task.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    completed: PropTypes.bool,
    onCompleteTask: PropTypes.func,
    onChangeTaskTitle: PropTypes.func,
    onDeleteTask: PropTypes.func
};
