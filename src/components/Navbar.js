import React, { useState } from 'react';
import '../css/Navbar.css'
function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  // handler function to toggle dropdown visibility
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Savings</a>
        </li>
        <li>
          <a href="/">Checking</a>
        </li>
        <li className="dropdown" onClick={handleDropdownClick}>
          <a>Menu</a>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <a href="/Account">Account</a>
              </li>
              <li>
                <a href="/">Option 2</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="/">Credit Card</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;