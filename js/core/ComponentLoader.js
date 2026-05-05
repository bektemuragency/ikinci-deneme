/**
 * Senior Component Loader Engine
 * Handles the inclusion of HTML parts into the main document
 */
export class ComponentLoader {
    static async fetchPart(name) {
        try {
            const response = await fetch(`parts/${name}.html`);
            if (!response.ok) throw new Error(`Part ${name} not found`);
            return await response.text();
        } catch (error) {
            console.error('Loader Error:', error);
            return `<div class="error">Failed to load component: ${name}</div>`;
        }
    }

    static async loadAll(container, components) {
        const parts = await Promise.all(components.map(name => this.fetchPart(name)));
        container.innerHTML = parts.join('');
    }
}
