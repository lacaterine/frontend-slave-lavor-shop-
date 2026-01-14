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
            <table className="w-full text-slate-900 dark:text-slate-700">
                <thead className="border-b border-slate-200 dark:text-slate-700">
                    <tr>
                        <th className="text-left py-2">Product</th>
                        <th className="text-left py-2">Price</th>
                        <th className="text-left py-2">Qty</th>
                        <th className="text-left py-2">Subtotal</th>
                        <th className="text-left py-2">Remove</th>
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