import React from 'react';
// Style Connections
import './ExploreMenu.css';
// Assets Connection
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Discover Our Delicious Menu</h1>

      <p className="explore-menu-text">
      Savor the ultimate burger experience with our mouth-watering menu crafted using the finest ingredients and expert grilling techniques. Our mission is to satisfy your cravings and elevate your dining journey, one delicious burger at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
