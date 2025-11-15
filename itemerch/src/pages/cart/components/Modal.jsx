export function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            onClick={handleBackdropClick}
            className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
            <div className="w-96 rounded bg-white p-6 shadow-lg">
                <div className="mb-4">{children}</div>
                <button
                    onClick={onClose}
                    className="hover:bg-dark mt-2 w-full rounded bg-black px-4 py-2 text-white"
                >
                    Закрыть
                </button>
            </div>
        </div>
    )
}
