import React, { useContext } from 'react';
import Menu from './components/common/Menu';
import Home from './components/pages/Home';
import { MenuContext } from './components/contexts/MenuContext';
import './styles/css/main.css';

const App = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <div className="app">
        <div className="hamburger hamburger--arrow" onClick={toggleMenu}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
        <Menu />
      <Home />
    </div>
  );
}

export default App;
