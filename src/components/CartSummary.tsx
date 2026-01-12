// src/components/CartSummary.tsx

import { useCart } from '../features/useCart';
import { CartDetail } from './CartDetail'
type CartProps = {
    onClose: () => void;
};

export function CartSummary({ onClose }: CartProps) {
    const { lines, canClear, clearCart } = useCart();

    return (
        <div>
            <button onClick={onClose}>
                Close
            </button>

            <h2>Cart Contents</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {lines.map(p => (
                        <CartDetail key={p.id} product={p} />
                    ))}
                </tbody>
            </table>
            <button
                className="disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!canClear} 
                onClick={() => clearCart()}>
                Empty Cart
            </button>
        </div>
    )
}