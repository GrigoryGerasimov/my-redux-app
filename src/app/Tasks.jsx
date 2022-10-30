import React from "react";
import PropTypes from "prop-types";

const Tasks = ({ children }) => {
    return (
        <ul className="list-group list-group-flush w-25">
            {React.Children.count(children) ? React.Children.map(children, child => React.cloneElement(child, { ...child.props })) : <li className="list-group-item bg-dark text-light mt-5">No current tasks available</li>}
        </ul>
    );
};

export default Tasks;

Tasks.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
