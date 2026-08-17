import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        BEER<span>LAB</span>
      </Link>
      
      <nav className={styles.nav}>
        <Link to="/order" className={styles.navLink}>Меню</Link>
      </nav>

      <div className={styles.actionsWrapper}>
        <Link to="/cart" className={styles.cart}>
          🛒
        </Link>
      </div>
    </header>
  )
}

export default Header