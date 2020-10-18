import React from 'react';

import './App.css';
import logo from './img/mwi-logo-horizontal.png';
import ArticleBlock from './components/ArticleBlock';
import ContactForm from './components/ContactForm';
import {emailValidator, notNullValidator} from './functions/validators';

const App = () => {
  const handleContactSubmit = event => {
    event.preventDefault();
    // validate form data
    const elements = event.target.elements;
    const email = elements.email;
    const subject = elements.subject;
    const message = elements.message;

    const validEmail = emailValidator(email.value);
    const validSubject = notNullValidator(subject.value);
    const validMessage = notNullValidator(message.value);
    if (validEmail && validSubject && validMessage) {
      alert('Contact form submitted successfully!');
      // clear form
      email.value = null;
      subject.value = null;
      message.value = null;
    } else {
      alert('Could not submit form. Please check your input and try again.')
    }
  }

  return (
    <div className='app'>
      <header className='header'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://midwesterninteractive.com/'
        >
          <img className='logo' src={logo} alt='Midwestern Interactive logo' />
        </a>
      </header>
      <div className='section'>
        <h1>Heading One</h1>
        <div className='grid'>
          <ArticleBlock />
          <ArticleBlock />
          <ArticleBlock />
        </div>
      </div>
      <div className='contact'>
        <h2>Contact</h2>
        <ContactForm onSubmit={handleContactSubmit} />
      </div>
      <div className='section'>
        <h1>Heading One</h1>
      </div>
    </div>
  );
}

export default App;
