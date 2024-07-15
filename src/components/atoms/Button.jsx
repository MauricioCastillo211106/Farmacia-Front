import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', onClick = () => {}, children }) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
