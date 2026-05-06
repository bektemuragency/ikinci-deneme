export const renderServices = (container, data) => {
    if (!container) return;

    data.forEach((service, index) => {
        const isReverse = index % 2 !== 0;
        const row = document.createElement('div');
        row.className = `service-row ${isReverse ? 'row-reverse' : ''} gs-reveal`;

        row.innerHTML = `
            <div class="service-image-side">
                <div class="service-image-wrap">
                    <img src="media/${service.img}.png" alt="${service.title}" class="service-main-img">
                </div>
            </div>
            <div class="service-text-side">
                <span class="service-num">${service.num}</span>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.desc}</p>
                <button class="nav-contact-btn">KEŞFET</button>
            </div>
        `;
        container.appendChild(row);
    });
};
