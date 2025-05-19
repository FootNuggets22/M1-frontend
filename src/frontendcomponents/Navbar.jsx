import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../../../../Mission-one/Photos/turners.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="My Company" className={styles.logo} />
        <h2>Turners</h2>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

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