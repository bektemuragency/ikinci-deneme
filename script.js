import { ComponentLoader } from './js/core/ComponentLoader.js';
import { serviceData } from './js/models/ServiceData.js';
import { renderServices } from './js/views/ServiceView.js';
import { initAnimations } from './js/animations.js';

class App {
    constructor() {
        this.appContainer = document.getElementById('app');
        this.components = ['navbar', 'hero', 'work', 'services', 'marquee', 'footer'];
        this.init();
    }

    async init() {
        // 1. Core: Load all HTML parts from /parts/
        await ComponentLoader.loadAll(this.appContainer, this.components);
        
        // 2. Data: Render dynamic services
        const servicesContainer = document.getElementById('services-container');
        renderServices(servicesContainer, serviceData);
        
        // 3. Effects: Init animations
        initAnimations();
        
        console.log('Bektemur Agency Modular Engine Initialized.');
    }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
