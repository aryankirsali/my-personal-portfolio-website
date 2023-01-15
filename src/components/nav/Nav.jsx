import React from 'react';
import "./nav.css";
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a onClick={()=> setActiveNav("#")} className={activeNav==="#" ? "active" : ""} href="#"><AiOutlineHome/></a>
      <a onClick={()=> setActiveNav("#About")} className={activeNav==="#About" ? "active" : ""} href="#About"><AiOutlineUser/></a>
      <a onClick={()=> setActiveNav("#Experience")} className={activeNav==="#Experience" ? "active" : ""} href="#Experience"><BiBook/></a>
      <a onClick={()=> setActiveNav("#Service")} className={activeNav==="#Service" ? "active" : ""} href="#Services"><RiServiceLine/></a>
      <a onClick={()=> setActiveNav("#Contact")} className={activeNav==="#Contact" ? "active" : ""} href="#Contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav;
