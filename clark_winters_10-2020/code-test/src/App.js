import React, {useState} from 'react';

import './App.css';
import logo from './img/mwi-logo-horizontal.png';
import ArticleBlock from './components/ArticleBlock';
import ContactForm from './components/ContactForm';
import Names from './components/Names';
import {emailValidator, notNullValidator} from './functions/validators';

const App = () => {
  const [showNames, setShowNames] = useState(false);

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
      alert('Could not submit form. Please check your input and try again.');
    }
  }

  const handleLinkClick = event => {
    event.preventDefault();
    if (showNames) {
      alert('Unique names are already being displayed');
    } else {
      setShowNames(true);
    }
  }

  return (
    <div className='app'>
      <header className='header center-content'>
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
        <p>
          Remove the duplicates in 2 JavaScript objects and output the list of distinct names
          in an unordered list when this <a href='/' onClick={handleLinkClick}>link is clicked</a>,
          if the operation has been completed already notify the user that this has already been
          done.
        </p>
        <div className='names'>
          <Names showNames={showNames} />
        </div>
      </div>
      <div className='footer center-content'>
        <p>Thanks for taking the Midwestern Interactive Benchmark Test.</p>
      </div>
    </div>
  );
}

export default App;
