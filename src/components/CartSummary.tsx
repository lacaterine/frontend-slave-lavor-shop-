// src/components/CartSummary.tsx

import {useCart} from '../features/useCart';
import {CartDetail} from './CartDetail'
type CartProps = {
  onClose: () => void;
};

export function CartSummary({onClose}: CartProps)
{
    const {lines, clearCart, instanceId} = useCart();

    return(
        <div>
            <button onClick={onClose}>
  Close
</button>

            <h2>Cart Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {lines.map(p => (
                        <CartDetail key={p.id} product={p}/>
                      ))}
                </tbody>
            </table>
            <h2>Cart ID: {instanceId}</h2>
            <button onClick={() => clearCart()}>
                Empty Cart
            </button>
        </div>
    )
}