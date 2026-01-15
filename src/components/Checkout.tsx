// src/components/Checkout.tsx
import { readPayment } from "../checkout/paymentResource";

export function Checkout() {
  readPayment();
  return <h2>Payment Successful 🎉</h2>;
}
