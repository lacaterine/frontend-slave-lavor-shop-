import { ProductCard } from "./components/ProductCard.tsx";
import { CartSummary } from "./components/CartSummary.tsx";
import { useState } from "react";

import "./index.css";
import { useCart } from "./features/useCart";

function App() {
  const { lineCount } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 1, name: "book", price: 10 },
    { id: 2, name: "desk", price: 22 },
    { id: 3, name: "pencil", price: 2 },
  ];

  const toggleCart = () => {
    setIsCartOpen((open) => !open);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (

    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
      <div className="col-span-2">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <button

        onClick={toggleCart}
        className=" fixed top-4 right-4 z-40 text-3xl p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        🛒

        {lineCount > 0 && (
          <span
            className="
        absolute -top-2 -right-2
        bg-blue-600 text-white
        text-xs font-semibold
        rounded-full
        px-2 py-0.5
        min-w-[1.25rem]
        text-center
      ">
            {lineCount}

          </span>
        )}
      </button>

      <div
        className={`
             bg-white text-gray-900
             dark:bg-gray-900 dark:text-gray-100
              fixed top-0 right-0
              h-screen w-80
              m-2 p-6 
              rounded-xl shadow-lg
              z-50
              transform transition-transform duration-700 ease-in-out
              ${isCartOpen ? "translate-x-0" : "translate-x-full"}
            `}
      >
        <CartSummary onClose={closeCart} />
      </div>
    </div>
  );
}

export default App;
