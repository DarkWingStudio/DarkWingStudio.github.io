document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open');
    });
  }

  window.addEventListener('scroll', function () {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
});