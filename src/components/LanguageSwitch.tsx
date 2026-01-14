import { useI18n } from "../features/useI18n";


export function LanguageSwitch() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center text-sm font-semibold">

      <LangButton
        label="EN"
        active={lang === "en"}
        onClick={() => setLang("en")}
      />
    

      <span className="mx-1 text-gray-600">|</span>

      <LangButton
        label="ES"
        active={lang === "es"}
        onClick={() => setLang("es")}
      />
    </div>
  );
}

function LangButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`
        transition-colors
        ${active
          ? "text-gray-950"
          : "text-slate-400 hover:text-white"}
      `}
    >
      {label}
    </button>
  );
}
