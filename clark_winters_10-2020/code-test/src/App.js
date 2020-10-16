import React from 'react';

import logo from './img/mwi-logo-horizontal.png';

const styles = {
  app: {
    backgroundColor: 'white'
  },
  header: {
    height: '87px',
    borderBottom: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: '64px'
  }
}

function App() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <a target='_blank' rel='noopener noreferrer' href="https://midwesterninteractive.com/">
          <img style={styles.logo} src={logo} alt='Midwestern Interactive logo' />
        </a>
      </header>
      
    </div>
  );
}

export default App;
