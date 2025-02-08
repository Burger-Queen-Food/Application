import React from 'react';
// Style Connection
import './Navbar.css';
// Assets Connection
import { assets } from '../../assets/assets.js';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
