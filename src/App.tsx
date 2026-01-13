import { ProductCard } from "./components/ProductCard";
import { CartSummary } from "./components/CartSummary";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import "./index.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 1, name: "Collar", price: "$10" },
    { id: 2, name: "Collar", price: "$22" },
    { id: 3, name: "Collar", price: "$2" },
    { id: 4, name: "Collar", price: "$2" },
    { id: 5, name: "Collar", price: "$2" },
    { id: 6, name: "Collar", price: "$2" },
    { id: 7, name: "Collar", price: "$2" },
    { id: 8, name: "Collar", price: "$2" },
    { id: 9, name: "Collar", price: "$2" },
    { id: 10, name: "Collar", price: "$2" },
    { id: 11, name: "Collar", price: "$2" },
    { id: 12, name: "Collar", price: "$2" },
  ];

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      {/* Spacer for fixed navbar */}
      <main className="pt-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>

      {/* Cart Drawer */}
      <div
        className={`
          fixed top-0 right-0
          h-screen w-80
          bg-white
          shadow-lg
          z-50
          transform transition-transform duration-500 ease-in-out
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <CartSummary onClose={() => setIsCartOpen(false)} />
      </div>
    </>
  );
}

export default App;
