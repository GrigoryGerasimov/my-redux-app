import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonClass, children, onClick }) => {
    return <button className={`btn my-1 ${buttonClass}`} onClick={onClick}>{children}</button>;
};

export default Button;

Button.defaultProps = {
    buttonClass: ""
};

Button.propTypes = {
    buttonClass: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
    onClick: PropTypes.func
};
