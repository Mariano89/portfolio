import React, { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';

const Menu = () => {
  const { menuActive } = useContext(MenuContext);
  return (
    <nav className={menuActive ? 'active' : ''}></nav>
  )
}

export default Menu;