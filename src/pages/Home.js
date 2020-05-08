import React, { Component } from 'react';
import face from '../images/face.png';

class Home extends Component {
  render() {
    return (
      <main id="home">
          <div className="logo-container">
            <img 
              src={face} 
              className="logo" 
              alt="logo" 
              
            />
          </div>
          <div className="link-container">
            <a
              className="link"
              href="mailto:marianoe1989@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>
          </div>
      </main>
    )
  }
}

export default Home;