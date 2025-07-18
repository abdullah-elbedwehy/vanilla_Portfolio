import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderProjects } from './pages/projects.js';
import { renderContact } from './pages/contact.js';

// Map of hash routes to render functions
const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/projects': renderProjects,
    '/contact': renderContact,
};

/**
 * Initialize client-side routing using the hash portion of the URL.
 * @param {Object} content - Parsed JSON content for all pages.
 */
export function initRouter(content) {
    function render() {
        const hash = location.hash.slice(1) || '/';
        const page = routes[hash] || renderHome;
        page(content, document.getElementById('app'));
    }

    window.addEventListener('hashchange', render);
    render();
}
