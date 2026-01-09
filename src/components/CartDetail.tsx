import {useCart} from '../features/useCart';
import type {CartItem} from '../features/cartStore';

type ProductProps = {
    product : CartItem
}

export function CartDetail({ product } : ProductProps){
    const {removeItem} = useCart();

    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><button onClick={() => removeItem(product.id)}>
                Remove from Cart
            </button></td>
        </tr>
    );
}