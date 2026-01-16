// src/checkout/Checkout.tsx
import { useI18n } from "../features/I18nProvider";
import { Suspense } from "react";
import { createPaymentResource } from "./paymentResource";
import { ErrorBoundary } from "../errors/ErrorBoundary";

type CheckoutProps = {
  onClose: () => void;
  onError: (e: Error) => void;
  clearCart: () => void;
};

// ----------------- Payment Component -----------------
function Payment({ onClose, clearCart }: { onClose: () => void; clearCart: () => void }) {
    const { t } = useI18n(); // hook is valid here
    const resource = createPaymentResource(t); // pass t in
    resource.read(); // Suspends while pending
    clearCart(); // Clear cart on success

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-green-700 font-semibold">Payment succeeded! ✅</p>
      <button
        className="px-4 py-2 bg-blue-700 text-white rounded"
        onClick={onClose}
      >
        {t("close")}
      </button>
    </div>
  );
}

// ----------------- Checkout Wrapper -----------------
export function Checkout({ onClose, onError, clearCart }: CheckoutProps) {
  const { t } = useI18n();
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-full">
          <p className="text-blue-700 font-semibold">{t("processing_payment")}</p>
        </div>
      }
    >
      <ErrorBoundary onError={onError}>
        <Payment onClose={onClose} clearCart={clearCart} />
      </ErrorBoundary>
    </Suspense>
  );
}
