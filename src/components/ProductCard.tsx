// src/components/ProductCard.tsx

import { useCart } from "../features/useCart";
import type { CartItem } from "../features/cartStore";

type ProductProps = {
  product: CartItem;
};

export function ProductCard({ product }: ProductProps) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {/* Imagen */}
      <div className="aspect-[3/4] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Info */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold font">{product.name}</h3>
        <p className="text-gray-500 font-medium">{product.price}</p>

        <button
          onClick={() => addItem(product)}
          className="
                mt-2
                bg-slate-900 text-white
                rounded-xl
                cursor-pointer
                hover:bg-slate-200 hover:text-slate-900
                transition-colors
                "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
