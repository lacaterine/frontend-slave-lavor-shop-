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
    items,
    addItem : cart.addItem.bind(cart),
    instanceId : cart.instanceId  
  };
}