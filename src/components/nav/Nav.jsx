import React from 'react';
import "./nav.css";
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {BsSun} from 'react-icons/bs';
import {BsMoon} from 'react-icons/bs';
import { useState } from 'react';
import { ThemeContext, themes } from '../theme/themeContext';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <nav>
      <a onClick={()=> setActiveNav("#")} className={activeNav==="#" ? "active" : ""} href="#"><AiOutlineHome/></a>
      <a onClick={()=> setActiveNav("#About")} className={activeNav==="#About" ? "active" : ""} href="#About"><AiOutlineUser/></a>
      <a onClick={()=> setActiveNav("#Experience")} className={activeNav==="#Experience" ? "active" : ""} href="#Experience"><BiBook/></a>
      <a onClick={()=> setActiveNav("#Service")} className={activeNav==="#Service" ? "active" : ""} href="#Services"><RiServiceLine/></a>
      <a onClick={()=> setActiveNav("#Contact")} className={activeNav==="#Contact" ? "active" : ""} href="#Contact"><BiMessageSquareDetail/></a>
      <ThemeContext.Consumer>{({ changeTheme }) => (<a onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}>{darkMode ? <BsSun/> : <BsMoon/>}</a>)}
          </ThemeContext.Consumer>
    </nav>
  )
}

export default Nav;
