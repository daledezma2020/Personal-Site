import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ExternalLink } from 'react-external-link';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Dan Ledezma
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
              to='/Resume' className='nav-links' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
            <ExternalLink href="https://www.linkedin.com/in/dan-ledezma-a46764188" className = 'nav-links' onClick={closeMobileMenu}>
              LinkedIn
              </ExternalLink>
            </li>
            <li className='nav-item'>
            <Link 
              to='/About' className='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li>
              <Link
                to='/Contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' buttonLink = '/Contact'>
            Contact
            </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
