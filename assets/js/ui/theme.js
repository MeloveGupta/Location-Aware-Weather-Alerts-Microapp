import { state } from '../core/state.js';
import { storage } from '../core/storage.js';

export function applyTheme(theme) {
    state.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    storage.saveTheme(theme);
}

export function toggleTheme() {
    const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}
