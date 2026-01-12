// src/components/ProductCard.tsx

import {useCart} from '../features/useCart';
import type {CartItem} from '../features/cartStore';

type ProductProps = {
    product : CartItem
}

export function ProductCard({ product } : ProductProps){
    const {addItem} = useCart();

    return(
        <div>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <button onClick={() => addItem(product)}>
                Add Item to Cart
            </button>
        </div>
    );
}