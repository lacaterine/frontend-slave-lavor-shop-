export function connectToPaymentGateway(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve();
      } else {
        reject(new Error("Payment failed"));
      }
    }, 2000);
  });
}
