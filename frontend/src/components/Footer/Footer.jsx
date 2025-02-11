import React from 'react';
// Style Connection
import './Footer.css';
// Assets Connection
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
         
          <p>
          At BurgerQueen, we bring your favorite meals right to your doorstep. Experience fast delivery, fresh ingredients, and exceptional service.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>

          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>

          <ul>
            <li>011-234-5678</li>
            <li>contact@BurgerQueen.lk</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2024 © BurgerQueen.lk - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
