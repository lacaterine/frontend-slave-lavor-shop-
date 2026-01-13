import { ProductCard } from "./components/ProductCard";
import { CartSummary } from "./components/CartSummary";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import "./index.css";
import ChokerImg from "./assets/products/Choker.jpg";
import CisneNegroImg from "./assets/products/CisneNegro.jpg";
import MuteImg from "./assets/products/Mute.jpg";
import ViciousImg from "./assets/products/Vicious.jpg";



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 1, name: "Choker", price: 20, image: ChokerImg },
    { id: 2, name: "Cisne Negro", price: 15, image: CisneNegroImg },
    { id: 3, name: "Mute", price: 15, image: MuteImg },
    { id: 4, name: "Vicious", price: 15, image: ViciousImg },



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
