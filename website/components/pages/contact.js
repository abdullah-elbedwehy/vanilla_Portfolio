import { createContactForm } from '../form.js';
import { showModal } from '../modal.js';

/**
 * Render the contact page with a form and modal feedback.
 */
export function renderContact(content, container) {
    container.innerHTML = '';
    const page = content.pages.contact;
    const h1 = document.createElement('h1');
    h1.textContent = page.title;
    const p = document.createElement('p');
    p.textContent = page.content;
    const form = createContactForm();
    form.addEventListener('submit', () => {
        showModal('<p>Thank you for your message!</p>');
    });
    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(form);
}
