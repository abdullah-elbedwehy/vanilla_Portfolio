import { debounce } from '../utils/debounce.js';

/**
 * Initialize responsive navbar with hamburger toggle and scroll effect.
 */
export function initNavbar() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    const header = document.querySelector('header');

    toggle.addEventListener('click', () => {
        const open = menu.hasAttribute('hidden');
        toggle.setAttribute('aria-expanded', open);
        if (open) {
            menu.removeAttribute('hidden');
        } else {
            menu.setAttribute('hidden', '');
        }
    });

    function onScroll() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', debounce(onScroll, 50));
}
