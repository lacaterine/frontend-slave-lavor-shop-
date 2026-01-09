import {useCart} from '../features/useCart';
import {CartDetail} from './CartDetail'

export function CartSummary()
{
    const {items, clearCart, instanceId} = useCart();

    return(
        <div>
            <h2>Cart Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th><th>Price</th><th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(p => (
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