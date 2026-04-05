// src/features/useCart.ts

import { getCartStore, type CartItem } from "./cartStore.ts";
import { useState, useEffect } from "react";

export type CartLineView = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export function useCart() {
  const cart = getCartStore();
  const [lines, setLines] = useState<CartLineView[]>([]);

  useEffect(() => {
    // Sync React state with store data
    const update = () => {
      // 1. Read domain data from store
      // 2. Transform into UI-friendly structure (view model)
      const nextLines = cart.getLines().map((line) => ({
        id: line.product.id,
        name: line.product.name,
        price: line.product.price,
        quantity: line.quantity,
        subtotal: line.product.price * line.quantity,
      }));

      // 3. Update React state
      setLines(nextLines);
    };

    // Initialize state immediately
    update();

    // Subscribe to store updates and clean up on unmount
    return cart.subscribe(update);
  }, []); // cart is a singleton, safe to omit from deps

  // Derived state (computed from lines)
  const totalItems = lines.reduce((acc, l) => acc + l.quantity, 0);
  const totalPrice = lines.reduce((acc, l) => acc + l.subtotal, 0);

  const isEmpty = lines.length === 0;
  const canClear = !isEmpty;

  // Stable action wrappers (avoid .bind on every render)
  const addItem = (item: CartItem) => cart.addItem(item);
  const removeItem = (id: number) => cart.removeItem(id);
  const clearCart = () => cart.clearCart();

  return {
    lines,
    totalItems,
    totalPrice,
    isEmpty,
    canClear,
    addItem,
    removeItem,
    clearCart,
  };
}