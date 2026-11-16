// Keep the footer current without requiring a build or a framework.
document.getElementById('year').textContent = new Date().getFullYear();

// Manual-activation tabs: arrow keys move focus; Enter/Space opens a panel.
const supportTabs = [...document.querySelectorAll('[role="tab"]')];
function activateSupportTab(selected) {
  supportTabs.forEach(tab => {
    const active = tab === selected;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
}
supportTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateSupportTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % supportTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + supportTabs.length) % supportTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = supportTabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      supportTabs.forEach((item, itemIndex) => { item.tabIndex = itemIndex === next ? 0 : -1; });
      supportTabs[next].focus();
    }
  });
});
