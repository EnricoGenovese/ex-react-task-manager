import { createPortal } from "react-dom";
import { useState } from "react";

export default function Modal({
    title,
    content,
    show,
    onClose,
    onConfirm,
    confirmText = 'Conferma'
}) {
    if (!show) return null;

    return createPortal(
        <div className="modal-container">
            <div className="modal">
                <h2>{title}</h2>
                <p>{content}</p>
                <div>
                    <button onClick={onClose}>Annulla</button>
                    <button onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>,
        document.body
    )
}