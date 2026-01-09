import {useCart} from '../features/useCart';

export function CartSummary()
{
    const {items, instanceId} = useCart();

    return(
        <div>
            <h3>Cart Summary</h3>
            <h2>Distinct Items: {items.length}</h2>
            <h2>Cart ID: {instanceId}</h2>
        </div>
    )
}