import { ProductCard } from "./components/ProductCard";
import { CartSummary } from "./components/CartSummary";
import { Navbar } from "./components/Navbar";
import "./index.css";

import { I18nProvider } from "./features/I18nProvider";

import ChokerImg from "./assets/products/Choker.jpg";
import CisneNegroImg from "./assets/products/CisneNegro.jpg";
import MuteImg from "./assets/products/Mute.jpg";
import ViciousImg from "./assets/products/Vicious.jpg";
import { useI18n } from "./features/I18nProvider";
import { ErrorBoundary } from "./errors/ErrorBoundary";
import { ErrorModal } from "./components/ErrorModal";
import { Suspense, useState } from "react";
import { createPaymentResource } from "./checkout/paymentResource";
import { useCart } from "./features/useCart";

// ----------------- Payment Components -----------------
function Payment({ onClose, clearCart, resource }: { onClose: () => void; clearCart: () => void; resource: ReturnType<typeof createPaymentResource> }) {
  resource.read(); // Will suspend while pending
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-green-700 font-semibold">{t("payment_succeeded")}</p>
      <button
        className="px-4 py-2 bg-blue-700 text-white rounded"
        onClick={() => {
          clearCart(); // Clear cart after success
          onClose();
        }}
      >
        {t("close")}
      </button>
    </div>
  );
}

function Checkout({
  onClose,
  onError,
  clearCart,
  resource,
}: {
  onClose: () => void;
  onError: (e: Error) => void;
  clearCart: () => void;
  resource: ReturnType<typeof createPaymentResource>;
}) {
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
        <Payment onClose={onClose} clearCart={clearCart} resource={resource} />
      </ErrorBoundary>
    </Suspense>
  );
}

// ----------------- Main App -----------------
function App() {
  const { clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStarted, setCheckoutStarted] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [paymentResource, setPaymentResource] = useState<ReturnType<typeof createPaymentResource> | null>(null);
  const { t } = useI18n();
  const products = [
    { id: 1, name: "Choker", price: 20, image: ChokerImg },
    { id: 2, name: "Cisne Negro", price: 15, image: CisneNegroImg },
    { id: 3, name: "Mute", price: 15, image: MuteImg },
    { id: 4, name: "Vicious", price: 15, image: ViciousImg },
  ];

  // ----------------- Handlers -----------------
  const handleCheckout = () => {
    setPaymentResource(createPaymentResource(t)); // create fresh resource per checkout
    setCheckoutStarted(true);
  };
  const resetCheckout = () => {
    setCheckoutStarted(false);
    setPaymentResource(null);
  };

  const handleErrorClose = () => {
    setError(null);
    resetCheckout();
  };

  const handleError = (e: Error) => {
    setError(e);
    resetCheckout();
  };

  // ----------------- Render -----------------
  return (
    <I18nProvider>
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <main className="pt-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>

      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white text-gray-950 dark:bg-white dark:text-gray-100 shadow-xl z-50 p-6 rounded-l-xl transform transition-transform duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {error && <ErrorModal error={error} onClose={handleErrorClose} />}

        {!checkoutStarted && !error && (
          <CartSummary onClose={() => setIsCartOpen(false)} onCheckout={handleCheckout} />
        )}

        {checkoutStarted && !error && paymentResource && (
          <Checkout
            onClose={resetCheckout}
            onError={handleError}
            clearCart={clearCart}
            resource={paymentResource}
          />
        )}
      </div>
    </I18nProvider>
  );
}

export default App;
