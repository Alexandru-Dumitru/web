import React, { useState } from 'react';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fas fa-laptop-code" />
            Alex Dumitru
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cv" className="nav-links" onClick={closeMobileMenu}>
                CV
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/calendar"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Calendar
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blog"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
