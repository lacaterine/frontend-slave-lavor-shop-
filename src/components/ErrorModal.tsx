import { createPortal } from "react-dom";

export function ErrorModal({
  error,
  onClose
}: {
  error: Error;
  onClose: () => void;
}) {
  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl">
        <h2>Error</h2>
        <p>{error.message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
