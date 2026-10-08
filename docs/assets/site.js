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
    const route = normalize(currentUrl());
    if (route === lastRoute) return;
    lastRoute = route;
    const page = pages.get(route);
    main.replaceChildren();
    main.className = page === home ? 'home' : 'document';
    if (page !== home) {
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
