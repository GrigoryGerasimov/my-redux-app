import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => {
    return <p className="bg-dark text-danger mt-5">{error}</p>;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
    error: PropTypes.string
};
