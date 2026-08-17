import React, { useState } from "react";
import styles from "./Cart.module.css";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, addToCart, removeFromCart, totalPrice, clearCart } = useCart();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [addressError, setAddressError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();

  const validatePhone = (value) => {
    const cleaned = value.replace(/[^\d+]/g, "");
    const phoneRegex = /^(\+7|7|8)\d{10}$/;
    return phoneRegex.test(cleaned);
  };

  const validateAddress = (value) => {
    const trimmed = value.trim();
    if (trimmed.length < 5) return false;
    const hasDigit = /\d/.test(trimmed);
    const hasLetter = /[a-zA-Zа-яА-ЯёЁ]/.test(trimmed);
    return hasDigit && hasLetter;
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Геолокация не поддерживается вашим браузером");
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=ru`,
          );
          const data = await response.json();

          if (data && data.address) {
            const road = data.address.road || data.address.street || "";
            const houseNumber = data.address.house_number || "";
            const city = data.address.city || data.address.town || "Шымкент";

            const fullAddress = `${city}, ${road} ${houseNumber}`.trim();
            setAddress(fullAddress || data.display_name);
            setAddressError("");
          } else {
            setAddress(`${latitude}, ${longitude}`);
          }
        } catch (error) {
          alert("Не удалось получить адрес. Введите вручную.");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        setIsLocating(false);
        if (error.code === error.PERMISSION_DENIED) {
          alert("Вы отклонили доступ к геолокации. Введите адрес вручную.");
        } else {
          alert("Ошибка при определении местоположения.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  const handleCheckout = async () => {
    const isAddressValid = validateAddress(address);
    const isPhoneValid = validatePhone(phone);

    setAddressError(
      isAddressValid ? "" : "Введите полный адрес (улица и номер дома)",
    );
    setPhoneError(
      isPhoneValid ? "" : "Введите корректный номер (пример: +7 707 123 45 67)",
    );

    if (!isAddressValid || !isPhoneValid) return;

    setIsSubmitting(true);

    const orderDetails = cart
      .map(
        (item) =>
          `▪️ ${item.name} x${item.count} = ${item.price * item.count} ₸`,
      )
      .join("\n");

    const message = `
🔥 Новый заказ!
📍 Адрес: ${address}
📞 Телефон: ${phone}
💬 Комментарий: ${comment || "Нет"}

🛒 Корзина:
${orderDetails}

💰 Итого к оплате: ${totalPrice} ₸
    `;

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address,
          phone,
          comment,
          cart,
          totalPrice,
        }),
      });
      if (response.ok) {
        setIsSuccess(true);
        clearCart();
      } else {
        alert("Ошибка при отправке заказа. Попробуй еще раз.");
      }
    } catch (error) {
      alert("Ошибка сети. Проверьте подключение.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <div
          className={styles.successBox}
          style={{ textAlign: "center", padding: "40px 20px" }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
            {" "}
            Заказ успешно принят!
          </h2>
          <p style={{ color: "#aaa", marginBottom: "30px", lineHeight: "1.5" }}>
            Менеджер уже получил вашу заявку и свяжется с вами в течение 5 минут
            для подтверждения.
          </p>
          <button
            className={styles.checkoutBtn}
            onClick={() => navigate("/order")}
          >
            Вернуться в меню
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <button className={styles.comeBack} onClick={() => navigate("/order")}>
          ⬅
        </button>
        <h2 className={styles.title}>Ваша корзина</h2>
      </div>

      {cart.length === 0 ? (
        <p className={styles.emptyText}>
          Корзина пуста. Добавьте товары из меню!
        </p>
      ) : (
        <>
          <div className={styles.itemsList}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemMain}>
                  {item.img && item.img.trim() !== "" && (
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                  )}
                  <div className={styles.itemInfo}>
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <span className={styles.itemPrice}>
                      {item.price * item.count} ₸
                    </span>
                  </div>
                </div>

                <div className={styles.counter}>
                  <button
                    className={styles.countBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <span className={styles.countNumber}>{item.count}</span>
                  <button
                    className={styles.countBtn}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <span className={styles.summaryLabel}>Итого к оплате:</span>
            <span className={styles.summaryPrice}>{totalPrice} ₸</span>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.addressWrapper}>
              <input
                type="text"
                placeholder="Адрес доставки *"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  if (addressError) setAddressError("");
                }}
                className={styles.input}
              />
              <button
                type="button"
                onClick={handleGetLocation}
                className={styles.locationBtn}
                disabled={isLocating}
              >
                {isLocating ? "..." : "📍 GPS"}
              </button>
            </div>
            {addressError && (
              <span className={styles.errorText}>{addressError}</span>
            )}

            <input
              type="tel"
              placeholder="Номер телефона пример 7(700) 123 12 12"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (phoneError) setPhoneError("");
              }}
              className={styles.input}
            />
            {phoneError && (
              <span className={styles.errorText}>{phoneError}</span>
            )}

            <textarea
              placeholder="Комментарий (Ваше имя, подъезд, этаж) — необязательно"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className={styles.textarea}
              rows="3"
            />
          </div>

          <h3 className={styles.importantInformation}>
            Заказы от 3 500 ₸ доставляются бесплатно. Дополните корзину, чтобы
            не переплачивать за курьера.
          </h3>

          <button
            className={styles.checkoutBtn}
            onClick={handleCheckout}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Подтвердить заказ"}
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
