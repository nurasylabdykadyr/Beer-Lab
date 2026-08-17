import React from 'react';
import styles from './ProductCard.module.css';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart } = useCart();

  // Находим текущий товар в корзине
  const cartItem = cart.find((item) => item.id === product.id);
  const count = cartItem ? cartItem.count : 0;

  return (
    <div className={styles.card}>
      {/* Отображаем картинку только если ссылка на неё реально есть */}
      {product.img && product.img.trim() !== '' && (
        <img src={product.img} alt={product.name} className={styles.image} />
      )}

      <div className={styles.info}>
        <h4 className={styles.title}>{product.name}</h4>
        <div className={styles.price}>
          {product.price} ₸ {product.unit && <span className={styles.unit}>/ {product.unit}</span>}
        </div>
      </div>

      {/* Если товар уже добавлен, показываем - count +, иначе просто + */}
      {count > 0 ? (
        <div className={styles.counterControl}>
          <button className={styles.countBtn} onClick={() => removeFromCart(product.id)}>-</button>
          <span className={styles.countNumber}>{count}</span>
          <button className={styles.countBtn} onClick={() => addToCart(product)}>+</button>
        </div>
      ) : (
        <button className={styles.addBtn} onClick={() => addToCart(product)}>
          +
        </button>
      )}
    </div>
  );
}

export default ProductCard;