import {getCartStore} from "./cartStore.ts";
import type { CartItem} from "./cartStore.ts";
import { useState, useEffect} from 'react';

export function useCart()
{
  const cart = getCartStore();
  const [items, setItems] = useState<CartItem[]>(cart.getItems());

  useEffect(() =>
  {
    return cart.subscribe(() =>
    {
      setItems(cart.getItems());
    });
  }, [cart]);

  return {
    items : items,
    addItem : cart.addItem.bind(cart),
    removeItem : cart.removeItem.bind(cart),
    clearCart : cart.clearCart.bind(cart),
    instanceId : cart.instanceId  
  };
}