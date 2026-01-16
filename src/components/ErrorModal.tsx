//  src/components/ErrorModal.tsx
import { createPortal } from "react-dom";
import { useI18n } from "../features/I18nProvider"; 

export function ErrorModal({
  error,
  onClose
}: {
  error: Error;
  onClose: () => void;
}) {
    const { t } = useI18n();
  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl">
        <h2>{t("error")}</h2>
        <p>{error.message}</p>
        <button onClick={onClose}>{t("close")}</button>
      </div>
    </div>,
    document.body
  );
}
