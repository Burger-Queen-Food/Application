import React from 'react';
// Style Connection
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>We have the best Burgers in the World</h2>

        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our misson
          is to satisfy your cravings and elevate your dining expreince, one
          delicous meal at a time.
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
