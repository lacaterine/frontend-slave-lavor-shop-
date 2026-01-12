// src/features/useCart.ts

import {getCartStore} from "./cartStore.ts";
import { useState, useEffect} from 'react';

export type CartLineView = {
  id : number;
  name : string;
  price : number;
  quantity : number;
  subtotal : number;
};

export function useCart()
{
  const cart = getCartStore();
  const [lines, setLines] = useState<CartLineView[]>([]);

  useEffect(() =>
  {
    const update = () =>
    {
      //1 & 2 leer & copiar
      const nextLines = cart.getLines().map(line => ({
        id: line.product.id,
        name: line.product.name,
        price: line.product.price,
        quantity: line.quantity,
        subtotal: line.product.price * line.quantity
      }));
      //3. push
      setLines(nextLines);
    };
    update();
    return cart.subscribe(update);
  }, [cart]);
  const lineCount = lines.length;
  const isEmpty = lineCount === 0;
  const canClear = lineCount > 0;

  return {
    lines,
    lineCount,
    isEmpty,
    canClear,
    addItem : cart.addItem.bind(cart),
    removeItem : cart.removeItem.bind(cart),
    clearCart : cart.clearCart.bind(cart),
    instanceId : cart.instanceId  
  };
}