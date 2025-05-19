import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../../../../Mission-one/Photos/turners.png';

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu's visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      
      {/* Logo and brand title section */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="My Company" className={styles.logo} />
        <h2>Turners</h2>
      </div>

      {/* Hamburger icon for toggling the menu on small screens */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰ {/* Character for hamburger menu */}
      </div>

      {/* Nav links list */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li><button className={styles.button}>Home</button></li>
        <li><button className={styles.button}>About</button></li>
        <li><button className={styles.button}>Contact</button></li>
        <li><button className={styles.login}>Login</button></li>
      </ul>
    </nav>
  );
};


export default Navbar;