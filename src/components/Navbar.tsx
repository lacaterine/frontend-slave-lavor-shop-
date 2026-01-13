import { useCart } from "../features/useCart";

type NavbarProps = {
  onCartClick: () => void;
};

export function Navbar({ onCartClick }: NavbarProps) {
  const { lineCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-slate-900 text-white flex items-center justify-between px-6 z-50 shadow-md">
      <h1 className="text-xl font-semibold">My Store</h1>

      <button
        onClick={onCartClick}
        className="relative text-2xl hover:scale-110 transition-transform"
      >
        🛒
        {lineCount > 0 && (
          <span className="
            absolute -top-2 -right-2
            bg-blue-600 text-white
            text-xs font-semibold
            rounded-full
            px-2 py-0.5
            min-w-[1.25rem]
            text-center
          ">
            {lineCount}
          </span>
        )}
      </button>
    </nav>
  );
}
