import React from "react";
import propTypes from "prop-types";

function InputError({ message }) {
  return <p className="input-error"> {message} </p>;
}

InputError.propTypes = {
  message: propTypes.string,
};
//Message: string
export default InputError;
