import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({children, onClick, type, className, ...props}) => {
  const classes = [styles.button];
  if (className) classes.push(className);
  return (
    <button
      {...props}
      onClick={onClick}
      type={type}
      className={classes.join(' ')}
    >{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button;