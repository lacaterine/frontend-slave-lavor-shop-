// src/components/CartDetail.tsx

import {useCart} from '../features/useCart';
import type {CartLineView} from '../features/useCart';

type ProductProps = {
    product : CartLineView
}

export function CartDetail({ product } : ProductProps){
    const {removeItem} = useCart();

    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.subtotal}</td>
            <td><button onClick={() => removeItem(product.id)}>
                Remove from Cart
            </button></td>
        </tr>
    );
}