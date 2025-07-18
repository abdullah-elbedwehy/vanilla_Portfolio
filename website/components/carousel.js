/**
 * Create a simple image carousel component.
 * @param {string[]} images - URLs of images to display.
 * @returns {HTMLElement}
 */
export function createCarousel(images = []) {
    const container = document.createElement('div');
    container.className = 'carousel';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = images[0] || '';
    container.appendChild(img);

    const prevBtn = document.createElement('button');
    prevBtn.className = 'prev';
    prevBtn.textContent = '<';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'next';
    nextBtn.textContent = '>';
    container.appendChild(prevBtn);
    container.appendChild(nextBtn);

    let index = 0;
    function show(i) {
        index = (i + images.length) % images.length;
        img.src = images[index];
    }

    prevBtn.addEventListener('click', () => show(index - 1));
    nextBtn.addEventListener('click', () => show(index + 1));

    return container;
}
