import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';
import Input from './Input';
import Button from './Button';
import {emailValidator, notNullValidator} from '../functions/validators';

const ContactForm = ({onSubmit, ...props}) => {
  return (
    <form {...props} onSubmit={onSubmit} className={styles.form}>
      <Input
        id='email'
        type='email'
        label='Email'
        validator={emailValidator}
        validatorMessage='Must use a valid email.'
        required
      />
      <Input
        id='subject'
        type='text'
        label='Subject'
        validator={notNullValidator}
        validatorMessage='Subject is required.'
        required
      />
      <Input
        id='message'
        type='textarea'
        label='Message'
        validator={notNullValidator}
        validatorMessage='Message is required.'
        rows={10}
        required
      />
      <Button type='submit' className={styles.submit}>Submit</Button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ContactForm;