import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Order.module.css";
import products from "../../api/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";

function Order() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("all");
  const { totalPrice, totalCount } = useCart();

  const filteredProducts = products.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Меню</h2>

      <div className={styles.categoriesContainer}>
        <button
          className={
            activeTab === "all" ? styles.categoryTabActive : styles.categoryTab
          }
          onClick={() => setActiveTab("all")}
        >
          Все
        </button>
        <button
          className={
            activeTab === "alcohol"
              ? styles.categoryTabActive
              : styles.categoryTab
          }
          onClick={() => setActiveTab("alcohol")}
        >
          Алкоголь
        </button>
        <button
          className={
            activeTab === "beer" ? styles.categoryTabActive : styles.categoryTab
          }
          onClick={() => setActiveTab("beer")}
        >
          Пиво
        </button>
        <button
          className={
            activeTab === "beverage"
              ? styles.categoryTabActive
              : styles.categoryTab
          }
          onClick={() => setActiveTab("beverage")}
        >
          Напитки
        </button>
        <button
          className={
            activeTab === "snack"
              ? styles.categoryTabActive
              : styles.categoryTab
          }
          onClick={() => setActiveTab("snack")}
        >
          Закуски
        </button>
      </div>

      {/* Карточки товаров */}
      <div className={styles.product}>
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Кнопка заказа с итоговой суммой */}
      <div className={styles.sendOrder}>
        <button disabled={totalCount === 0} onClick={() => navigate("/cart")}>
          {totalCount > 0 ? `Сделать заказ ${totalPrice} ₸` : "Выберите товары"}
        </button>
      </div>
    </div>
  );
}

export default Order;
