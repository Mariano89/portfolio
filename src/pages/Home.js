import React, { Component } from 'react';
import face from '../images/face.png';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

class Home extends Component {

  constructor(props) {
    super(props);
    this.myFace = null;
    this.myTween = new gsap.timeline({paused:true});
  }


  componentDidMount() {
    this.myTween.to(this.myFace, 1, {
      transform: "scale(1)",
      ease: "Power3.easeInOut"
    }).play();
  }

  render() {
    return (
      <main id="home">
          <div className="logo-container" ref={div => this.myFace = div}>
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