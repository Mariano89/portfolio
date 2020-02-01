import React from 'react';
import face from './images/face.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={face} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="mailto:marianoe1989@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
      </header>
    </div>
  );
}

export default App;
