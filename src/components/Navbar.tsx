import { useCart } from "../features/useCart";
import { LanguageSwitch } from "./LanguageSwitch";
import { useI18n } from "../features/I18nProvider";

type NavbarProps = {
  onCartClick: () => void;
};

export function Navbar({ onCartClick }: NavbarProps) {
  const { lineCount } = useCart();
  const { t } = useI18n();

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-950 text-white flex items-center justify-between px-6 z-50 shadow-md">
      <h1 className="text-xl font-semibold tracking-wide">{t("store_title")}</h1>

      <div className="flex items-center gap-4">
        <LanguageSwitch />

        <button
          onClick={onCartClick}
          className="relative text-2xl hover:scale-110 transition-transform"
        >
          🛒
          {lineCount > 0 && (
            <span className="absolute -top-0 -right-2 bg-red-700 text-white text-xs font-semibold rounded-full px-2 py-2 min-w-[1.25rem] text-center">
              {lineCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
