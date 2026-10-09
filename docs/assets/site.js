(() => {
  const buttons = document.querySelectorAll('.theme-toggle');
  const system = matchMedia('(prefers-color-scheme: dark)');
  let manual = false;
  try { manual = ['light', 'dark'].includes(localStorage.getItem('owl-theme')); } catch (_) {}
  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    const dark = theme === 'dark';
    buttons.forEach(button => {
    button.innerHTML = dark
      ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>'
      : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z"/></svg>';
    button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('aria-pressed', String(dark));
    });
  }
  apply(document.documentElement.dataset.theme || (system.matches ? 'dark' : 'light'));
  buttons.forEach(button => button.addEventListener('click', () => {
    manual = true;
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('owl-theme', next); } catch (_) {}
  }));
  system.addEventListener('change', event => { if (!manual) apply(event.matches ? 'dark' : 'light'); });
})();

(() => {
  const main = document.getElementById('main');
  const pages = new Map();
  const normalize = path => path.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('#page-store template').forEach(template => {
    pages.set(normalize(template.dataset.url), template);
  });
  const home = [...pages.values()].find(page => page.dataset.home === 'true');
  if (!home) return;
  const homeUrl = home.dataset.url;
  const currentUrl = () => location.hash.startsWith('#/') ? location.hash.slice(1) : location.pathname;
  let lastRoute = null;

  function render(focus = true) {
    const route = normalize(currentUrl()).replace(/\/privacy-policy$/, '/privacy');
    if (location.hash.endsWith('/privacy-policy')) history.replaceState(null, '', `${homeUrl}#${route}`);
    if (route === lastRoute) return;
    lastRoute = route;
    const page = pages.get(route);
    main.replaceChildren();
    main.className = page === home ? 'home' : page?.dataset.product === 'true' ? 'product' : 'document';
    const standalone = /\/(privacy|support)$/.test(route);
    document.body.classList.toggle('standalone-document', standalone);
    if (page !== home && !standalone) {
      const back = document.createElement('a');
      back.className = 'back-link';
      back.href = homeUrl;
      back.textContent = '← All apps';
      main.append(back);
    }
    if (page) {
      main.append(page.content.cloneNode(true));
      document.title = `${page.dataset.title} · Owl Software Studio`;
    } else {
      const heading = document.createElement('h1');
      heading.textContent = 'Page not found';
      const message = document.createElement('p');
      message.textContent = 'Choose an app to find its documentation, support, or privacy policy.';
      main.append(heading, message);
      document.title = 'Page not found · Owl Software Studio';
    }
    // Resolve relative Markdown links against the document, not the SPA shell.
    const base = new URL(page ? page.dataset.url : homeUrl, location.origin);
    main.querySelectorAll('a[href]').forEach(link => {
      link.href = new URL(link.getAttribute('href'), base).href;
    });
    document.getElementById('route-status').textContent = document.title;
    if (focus) {
      main.focus({ preventScroll: true });
      window.scrollTo(0, 0);
    }
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.download || (link.target && link.target !== '_self')) return;
    const url = new URL(link.href);
    if (url.origin !== location.origin || !pages.has(normalize(url.pathname)) || url.search || url.hash) return;
    event.preventDefault();
    const route = normalize(url.pathname);
    if (route === normalize(currentUrl())) return;
    history.pushState(null, '', `${homeUrl}#${url.pathname}`);
    render();
  });
  window.addEventListener('popstate', () => render());
  window.addEventListener('hashchange', () => render());
  render(false);
})();
