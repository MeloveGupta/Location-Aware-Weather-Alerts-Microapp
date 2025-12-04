import { elements } from './domElements.js';

export function renderAlerts(alerts) {
    elements.alertsContainer.innerHTML = '';

    if (!alerts || alerts.length === 0) {
        elements.alertsSection.classList.add('hidden');
        elements.noAlertsState.classList.remove('hidden');
        return;
    }

    elements.alertsSection.classList.remove('hidden');
    elements.noAlertsState.classList.add('hidden');

    alerts.forEach((alert) => {
        const alertBadge = document.createElement('div');
        alertBadge.className = `alert-badge ${alert.type}`;
        alertBadge.innerHTML = `
            <span class="alert-icon">${alert.icon}</span>
            <span class="alert-text">${alert.message}</span>
        `;
        elements.alertsContainer.appendChild(alertBadge);
    });
}
