import { createCarousel } from '../carousel.js';

/**
 * Render the projects page with a carousel.
 */
export function renderProjects(content, container) {
    container.innerHTML = '';
    const page = content.pages.projects;
    const h1 = document.createElement('h1');
    h1.textContent = page.title;
    container.appendChild(h1);

    if (page.carouselImages) {
        const carousel = createCarousel(page.carouselImages);
        container.appendChild(carousel);
    }
}
