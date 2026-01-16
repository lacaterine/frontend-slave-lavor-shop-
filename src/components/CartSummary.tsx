// src/components/CartSummary.tsx
import { useCart } from "../features/useCart";
import { CartDetail } from "./CartDetail";
import { useI18n } from "../features/I18nProvider"; // context-based hook

type CartProps = {
  onClose: () => void;
  onCheckout?: () => void;
};

export function CartSummary({ onClose, onCheckout }: CartProps) {
  const { lines, canClear, clearCart } = useCart();
  const { t } = useI18n(); // use context, no prop needed

  const canCheckout = lines.length > 0;

  const handleCheckout = () => {
    if (!canCheckout) return;
    if (onCheckout) onCheckout();
    else console.log("Checkout started (not yet implemented)");
  };

  return (
    <div>
      <button onClick={onClose}>{t("close")}</button>
      <h2>{t("cart_contents")}</h2>
      <table className="w-full text-slate-900 dark:text-slate-700">
        <thead className="border-b border-slate-200">
          <tr>
            <th className="text-left py-2">{t("product")}</th>
            <th className="text-left py-2">{t("price")}</th>
            <th className="text-left py-2">{t("qty")}</th>
            <th className="text-left py-2">{t("subtotal")}</th>
            <th className="text-left py-2">{t("remove")}</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((p) => (
            <CartDetail key={p.id} product={p} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          className="disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!canClear}
          onClick={clearCart}
        >
          {t("empty_cart")}
        </button>

        <button
          className="font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!canCheckout}
          onClick={handleCheckout}
        >
          {t("checkout")}
        </button>
      </div>
    </div>
  );
}
