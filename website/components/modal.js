/**
 * Display modal dialog with provided HTML content.
 * @param {string} content - HTML string to display inside modal.
 */
export function showModal(content) {
    const overlay = document.createElement('div');
    overlay.className = 'modal';
    overlay.tabIndex = -1;

    const modal = document.createElement('div');
    modal.className = 'modal-content';
    modal.innerHTML = content;
    overlay.appendChild(modal);

    function close() {
        overlay.remove();
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    }, { once: true });

    document.body.appendChild(overlay);
    modal.focus();
}
