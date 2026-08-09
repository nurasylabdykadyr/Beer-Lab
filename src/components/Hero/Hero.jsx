import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Hero.module.css' 

function Hero() {
  const navigate = useNavigate()

  return (
    <section className={styles.hero}>
      <h1>Свежее пенное пиво и закуски в BeerLab</h1>
      <p>Заказывай прямо сейчас с доставкой по Шымкенту</p>
  
      <button className={styles['hero-btn']} onClick={() => navigate('/order')}>
        Смотреть меню
      </button>
    </section>
  )
}

export default Hero