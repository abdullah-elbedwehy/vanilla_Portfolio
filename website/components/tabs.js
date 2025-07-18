/**
 * Create accessible tab interface.
 * @param {Object} tabs - Map of tab title to HTML content.
 */
export function createTabs(tabs = {}) {
    const container = document.createElement('div');
    const tabList = document.createElement('div');
    tabList.className = 'tabs';
    tabList.role = 'tablist';
    const panels = document.createElement('div');
    panels.className = 'tab-panels';

    Object.entries(tabs).forEach(([title, content], index) => {
        const button = document.createElement('button');
        button.role = 'tab';
        button.id = `tab-${index}`;
        button.setAttribute('aria-controls', `panel-${index}`);
        button.textContent = title;
        if (index === 0) button.setAttribute('aria-selected', 'true');
        tabList.appendChild(button);

        const panel = document.createElement('div');
        panel.role = 'tabpanel';
        panel.id = `panel-${index}`;
        if (index === 0) panel.classList.add('active');
        panel.innerHTML = content;
        panels.appendChild(panel);

        button.addEventListener('click', () => {
            tabList.querySelectorAll('[aria-selected="true"]').forEach(b => b.setAttribute('aria-selected', 'false'));
            panels.querySelectorAll('.active').forEach(p => p.classList.remove('active'));
            button.setAttribute('aria-selected', 'true');
            panel.classList.add('active');
        });
    });

    container.appendChild(tabList);
    container.appendChild(panels);
    return container;
}
