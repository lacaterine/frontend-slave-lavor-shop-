import { ProductCard } from './components/ProductCard.tsx'
import { CartSummary} from './components/CartSummary.tsx'
import {useState} from 'react';

import './index.css'

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {id : 1, name : 'book', price : 10},
    {id : 2, name : 'desk', price : 22},
    {id : 3, name : 'pencil', price : 2}
  ];

  const toggleCart = () => {
    setIsCartOpen(open => !open);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          <div className="col-span-2">
            {products.map(p => (
                <ProductCard key={p.id} product={p}/>
              ))}
          </div>
          <button onClick={toggleCart} className="fixed top-4 right-4 z-40">
  🛒
</button>

          <div className={`
              fixed top-0 right-0
              h-screen w-80
              bg-white
              shadow-lg
              z-50
              transform transition-transform duration-300
              ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
            <CartSummary onClose={closeCart}/>
          </div>
        </div>
  )
}

export default App
