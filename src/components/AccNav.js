import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const AccNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AccNavbar;
