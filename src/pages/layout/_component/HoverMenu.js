import React, { useState } from 'react';
import S from '../style';
import { Link, NavLink } from 'react-router-dom';

const HoverMenu = ({ menuLabel, dropdownLinks, to }) => {
  const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true); 
    const handleMouseLeave = () => setHover(false);
    
    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NavLink to={to} className="menuitem">
          {menuLabel}
        </NavLink>
        {hover && (
          <S.dropdown>
            {dropdownLinks.map((link, index) => (
              <S.dropdownItem key={index}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </S.dropdownItem>
            ))}
          </S.dropdown>
        )}
      </div>
    );
};

export default HoverMenu;