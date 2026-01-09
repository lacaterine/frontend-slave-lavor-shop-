import {useState, useEffect} from 'react';
import type {CartItem} from '../features/cartStore';
import {getCartStore} from '../features/cartStore';


export function useCart(){
    const cart = getCartStore();
    const [items, setItems] = useState<CartItem[]>(cart.getItems());
    
    useEffect(() => {
        return cart.subscribe(() => {
            setItems(cart.getItems());
        });
    }, [cart]);

    return{
        items : items,
        addItem : cart.addItem.bind(cart),
        instanceId : cart.instanceId
    };
}