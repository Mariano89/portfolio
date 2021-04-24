import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuContextProvider = props => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    if(hamburger.classList.contains('is-active')) {
      setMenuActive(false); 
      hamburger.classList.remove('is-active')
    } else {
      setMenuActive(true); 
      hamburger.classList.add('is-active')
    }
    // hamburger.classList.contains('is-active') ? 
    //   (setMenuActive(false), hamburger.classList.remove('is-active')) :
    //   (setMenuActive(true), hamburger.classList.add('is-active'))
  }

  return (
    <MenuContext.Provider value={{ toggleMenu, menuActive, setMenuActive }}>
      {props.children}
    </MenuContext.Provider>
  )

}

export default MenuContextProvider;