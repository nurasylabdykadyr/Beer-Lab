import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
   
        <div className={styles.logo}>
          BEER<span>LAB</span>
        </div>
        
     
        <div className={styles.links}>
          <div className="styles call">
          <h4>Контакты</h4>
          <p>📍 г. Шымкент, ​Микрорайон Отырар, 52/4</p>
          <p>📞 <a href="tel:+77001234567">+7(707) 408 3638</a></p>
          <p>⏰ Работаем: 10:00 - 01:00</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} BEERLAB. Все права защищены.</p>
          <p className={styles.developer}>Powered by Umag Integration</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;