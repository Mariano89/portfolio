import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite } from 'gsap';
import face from '../../images/face.png';
import beer from '../../images/modelo.png';

const Home = () => {
  const faceRef = useRef();
  const scaleRef = useRef();
  const beerRef = useRef();

  const animateFaceToNav = () => {
    document.querySelector('.logo-container').classList.add('shrink-face')
    document.querySelector('.logo').classList.add('stop-spin')
    // document.querySelector('.center').classList.remove('center')
  }

  const toggleSpin = () => {
    document.querySelector('.logo').classList.contains('stop-spin') ? 
      document.querySelector('.logo').classList.remove('stop-spin') :
      document.querySelector('.logo').classList.add('stop-spin')
  }

  useEffect(()=> {
    const donateButton = document.querySelector('.bmc-btn-container');
    document.querySelector('.donate-button-container').appendChild(donateButton)

    TweenMax.fromTo(scaleRef.current, 1, {
      transform: "scale(0.1)"
    }, {
      transform: "scale(1)",
      rotation: "1080"
    })
    TweenMax.to(beerRef.current, 1, {
      delay: 1.8,
      opacity: 1,
      top: "-145px"
    })
    TweenMax.to(donateButton, 1, {
      delay: 4.5,
      opacity: 1
    })
    const tl = new TimelineLite({repeat: 10, delay: 3})
    tl
      .to(beerRef.current, .035, { transform: "rotate(-15deg)" })
      .to(beerRef.current, .035, { transform: "rotate(15deg)" })
      .to(beerRef.current, .035, { transform: "rotate(0deg)" })
  }, [])


  return (
    <main id="home">
      <div className="logo-container">
        <div className="" ref={scaleRef}>
          <img 
            className="logo" 
            ref={faceRef}
            src={face} 
            alt="logo" 
            // onClick={toggleSpin}
          />
          <img
            className="beer"
            ref={beerRef}
            src={beer}
          />
          <div className="donate-button-container"></div>
          {/*<span id="text"></span>*/}
        </div>
      </div>
      {/*<div className="link-container">
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
      </div>*/}
    </main>
  )
}

export default Home;