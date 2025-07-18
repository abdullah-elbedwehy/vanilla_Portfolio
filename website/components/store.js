// Simple global state store
const state = {};
const listeners = new Set();

/**
 * Update a value in the global state.
 */
export function setState(key, value) {
    state[key] = value;
    listeners.forEach(fn => fn(state));
}

/**
 * Retrieve a value from the state.
 */
export function getState(key) {
    return state[key];
}

/**
 * Subscribe to state changes.
 */
export function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}
