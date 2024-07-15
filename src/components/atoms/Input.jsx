import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type = 'text', value = '', onChange, placeholder = '' }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
