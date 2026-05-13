import { ComponentLoader } from './js/core/ComponentLoader.js';
import { serviceData } from './js/models/ServiceData.js';
import { renderServices } from './js/views/ServiceView.js';
import { initAnimations } from './js/animations.js';

class App {
    constructor() {
        this.navContainer = document.getElementById('nav-container');
        this.pageContainer = document.getElementById('page-content');
        this.footerContainer = document.getElementById('footer-container');

        this.routes = {
            'home': ['hero', 'work', 'services', 'marquee'],
            'web-tasarim': ['services/web-tasarim'],
            'mobil-uygulama': ['services/mobil-uygulama'],
            'marka-kimligi': ['services/marka-kimligi'],
            'yapay-zeka': ['services/yapay-zeka'],
            'ui-ux': ['services/ui-ux'],
            'e-ticaret': ['services/e-ticaret'],
            'siber-guvenlik': ['services/siber-guvenlik'],
            'hakkimizda': ['hakkimizda']
        };

        this.init();
    }

    async init() {
        // 1. Load Common Components (Once)
        await ComponentLoader.loadAll(this.navContainer, ['navbar']);
        await ComponentLoader.loadAll(this.footerContainer, ['footer']);

        // 2. Initial Route
        this.handleRoute();

        // 3. Listen for Hash Changes
        window.addEventListener('hashchange', () => this.handleRoute());

        console.log('Bektemur Agency Core Engine Initialized.');
    }

    async handleRoute() {
        const hash = window.location.hash.replace('#', '') || 'home';
        const components = this.routes[hash] || this.routes['home'];

        // Clear and load new components
        await ComponentLoader.loadAll(this.pageContainer, components);

        // Re-initialize specific features if on home
        if (hash === 'home' || !hash) {
            const servicesContainer = document.getElementById('services-container');
            if (servicesContainer) renderServices(servicesContainer, serviceData);
        }

        // Re-init animations for new content
        initAnimations();

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
