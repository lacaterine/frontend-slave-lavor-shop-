// src/components/ProductCard.tsx

import { useCart } from '../features/useCart';
import type { CartItem } from '../features/cartStore';

type ProductProps = {
    product: CartItem
}

export function ProductCard({ product }: ProductProps) {
    const { addItem } = useCart();

    return (
        <div>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <button className="
                cursor-pointer
                hover:bg-gray-200
                active:scale-95
                transition"
                onClick={() => addItem(product)}>
                Add to Cart
            </button>
        </div>
    );
}