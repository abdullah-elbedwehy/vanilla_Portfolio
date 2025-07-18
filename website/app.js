// Entry point: load content and initialize modules
import { initRouter } from './components/router.js';
import { initNavbar } from './components/navbar.js';

/**
 * Fetch site content and bootstrap the application.
 */
async function init() {
    const response = await fetch('./data/site-content.json');
    const siteContent = await response.json();

    initNavbar();
    initRouter(siteContent);
}

window.addEventListener('DOMContentLoaded', init);
