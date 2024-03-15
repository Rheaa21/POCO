import React from 'react';
import './Header.css';
const Header = () => {
  const welcomeMessage = 'CO - PO Matrix';
    
  return (
    <div className="header">
      <div className="left-section">
        <img src="./img/PICT.jpg" alt="Logo" className="logo" />
        <span className="welcome-message">{welcomeMessage}</span>
      </div>
    </div>
  );
};

export default Header;