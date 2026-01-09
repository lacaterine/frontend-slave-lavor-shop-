import { ProductCard } from './components/ProductCard.tsx'
import { CartSummary} from './components/CartSummary.tsx'
import './App.css'

function App() {

  const products = [
    {id : 1, name : 'book', price : 10},
    {id : 2, name : 'desk', price : 22},
    {id : 3, name : 'pencil', price : 2}
  ];

  return (
    <div>
      <CartSummary/>
      {products.map(p => (
        <ProductCard key={p.id} product={p}/>
      ))}
    </div>
  )
}

export default App
