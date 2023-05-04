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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li className="dropdown" onClick={handleDropdownClick}>
          <a>Dropdown</a>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <a href="/">Option 1</a>
              </li>
              <li>
                <a href="/">Option 2</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;