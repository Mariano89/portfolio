import React from 'react';
import face from '../images/face.png';

const Home = () => {
  const animateFaceToNav = () => {
    document.querySelector('.logo-container').classList.add('shrink-face')
    document.querySelector('.logo').classList.add('stop-spin')
    // document.querySelector('.center').classList.remove('center')
  }

  return (
    <main id="home">
      <div className="logo-container">
        <div className="scaler">
          <img 
            src={face} 
            className="logo" 
            alt="logo" 
          />
        </div>
      </div>
      <div className="link-container">
        <p className="link" onClick={animateFaceToNav}>play</p>
        <span> | </span>
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

export default Home;