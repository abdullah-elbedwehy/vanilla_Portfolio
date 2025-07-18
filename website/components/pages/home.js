import { createCarousel } from '../carousel.js';

/**
 * Render the home page.
 */
export function renderHome(content, container) {
    container.innerHTML = '';
    const page = content.pages.home;
    const h1 = document.createElement('h1');
    h1.textContent = page.title;
    const p = document.createElement('p');
    p.textContent = page.content;
    container.appendChild(h1);
    container.appendChild(p);

    if (page.carouselImages) {
        const carousel = createCarousel(page.carouselImages);
        container.appendChild(carousel);
    }
}
