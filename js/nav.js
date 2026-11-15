const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const siteHead = document.querySelector('.site-head');

if (navToggle && mainNav && siteHead) {
  const closeMenu = () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  mainNav.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', event => {
    if (event.target instanceof Node && !siteHead.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  const desktopMedia = window.matchMedia('(min-width: 961px)');
  const closeOnDesktop = () => {
    if (desktopMedia.matches) closeMenu();
  };

  if (desktopMedia.addEventListener) {
    desktopMedia.addEventListener('change', closeOnDesktop);
  } else {
    desktopMedia.addListener(closeOnDesktop);
  }
}
