/**
 * Debounce function calls for performance.
 * @param {Function} fn
 * @param {number} delay
 */
export function debounce(fn, delay = 100) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), delay);
    };
}
