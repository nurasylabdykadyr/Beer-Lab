import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  // Загружаем из localStorage при старте
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('beerlab_cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Сохраняем в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem('beerlab_cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Определяем шаг: 0.5 для литров, 1 для штучного товара
      const step = product.unit === 'л.' ? 0.5 : 1
      const existing = prevCart.find((item) => item.id === product.id)
      
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + step } : item
        )
      }
      return [...prevCart, { ...product, count: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productId)
      if (!existing) return prevCart

      const step = existing.unit === 'л.' ? 0.5 : 1

      // Если после вычитания остается меньше 1, удаляем товар из корзины
      if (existing.count - step < 1) {
        return prevCart.filter((item) => item.id !== productId)
      }
      
      return prevCart.map((item) =>
        item.id === productId ? { ...item, count: item.count - step } : item
      )
    })
  }

  const clearCart = () => setCart([])

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0)
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice, totalCount }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)