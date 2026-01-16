// src/checkout/fakePaymentApi.ts
export function connectToPaymentGateway(t: (key: string) => string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve();
      } else {
        reject(new Error(t("payment_failed")));
      }
    }, 3000);
  });
}
