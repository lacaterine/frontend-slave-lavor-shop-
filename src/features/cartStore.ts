//cartStore.ts
export type CartItem = {
    id : number;
    name : string;
    price : number;
};

type Listener = () => void;

class CartStore {
    private items: CartItem[] = [];
    private listeners: Listener[] = [];
    readonly instanceId: number = Date.now();

    addItem(item: CartItem)
    {
        this.items.push(item);
        this.notify();
    }
    getItems()
    {
        return [...this.items];
    }
    subscribe(listener: Listener)
    {
        this.listeners.push(listener);

        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        }
    }

    notify()
    {
        this.listeners.forEach(l => l());
    }
}

// implement singleton
// solo 1 instancia de cartStore

let cartInstance : CartStore | null = null;

export function getCartStore(): CartStore
{
    if(!cartInstance){
        cartInstance = new CartStore();
    }
    return cartInstance;
}

