import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

// validator prop should be a function that returns a boolean
const Input = ({
  id,
  type,
  label,
  validator,
  validatorMessage,
  rows,
  required,
  ...props
}) => {
  const [showMessage, setShowMessage] = useState(true);

  const handleChange = event => {
    if (validator) {
      setShowMessage(!validator(event.target.value));
    }
  }

  const InputComponent = rows
    && (type === 'text' || type === 'textarea')
    ? 'textarea' : 'input';
  
    return (
    <>
      <div className={styles.text}>
        <label htmlFor={id}>{label}</label>
        {showMessage ? <p>{validatorMessage}</p> : null}
      </div>
      <InputComponent
        {...props}
        id={id}
        type={type}
        rows={rows}
        required={required}
        onChange={handleChange}
        className={styles.input}
      />
    </>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validator: PropTypes.func,
  validatorMessage: PropTypes.string,
  rows: PropTypes.number,
  required: PropTypes.bool
}

export default Input;