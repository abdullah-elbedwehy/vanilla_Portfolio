import { createTabs } from '../tabs.js';

/**
 * Render the about page with tabs.
 */
export function renderAbout(content, container) {
    container.innerHTML = '';
    const page = content.pages.about;
    const h1 = document.createElement('h1');
    h1.textContent = page.title;
    const tabs = createTabs(page.tabs);
    container.appendChild(h1);
    container.appendChild(tabs);
}
