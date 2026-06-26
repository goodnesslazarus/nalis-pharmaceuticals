"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "nalis-pharma-cart";

function parseStoredCart() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function serializeCart(cart) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(parseStoredCart());
  }, []);

  useEffect(() => {
    serializeCart(cart);
  }, [cart]);

  const addItem = (item) => {
    setCart((currentCart) => {
      const existingIndex = currentCart.findIndex((cartItem) => cartItem.name === item.name);
      if (existingIndex >= 0) {
        return currentCart.map((cartItem, index) =>
          index === existingIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (name) => {
    setCart((currentCart) => currentCart.filter((cartItem) => cartItem.name !== name));
  };

  const updateQuantity = (name, quantity) => {
    setCart((currentCart) =>
      currentCart
        .map((cartItem) =>
          cartItem.name === name
            ? { ...cartItem, quantity: Math.max(1, quantity) }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const itemCount = useMemo(
    () => cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0),
    [cart]
  );

  const total = useMemo(
    () =>
      cart.reduce((sum, cartItem) => {
        const numeric = Number(cartItem.price.replace(/[^0-9]/g, ""));
        return sum + numeric * cartItem.quantity;
      }, 0),
    [cart]
  );

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    total,
  };
}
