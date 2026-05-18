// js/partials.js - JS-rendered header and footer to avoid repetition

async function loadPartials() {
  try {
    const meta = await fetchJSON('data/meta.json');
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');

    if (headerEl) {
      headerEl.innerHTML = buildHeader(meta);
      initNav();
    }

    if (footerEl) {
      footerEl.innerHTML = buildFooter(meta);
    }

    setActiveNav();
  } catch (error) {
    console.error('Failed to load partials:', error);
  }
}

function buildHeader(meta) {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  return `
    <nav class="site-nav" id="siteNav">
      <a class="brand site-brand" href="index.html">${meta.brand || 'DW'}</a>
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navMenu" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" id="navMenu">
        <a href="index.html" class="nav-link ${currentPath === 'index.html' ? 'active' : ''}">Home</a>
        <a href="projects.html" class="nav-link ${currentPath === 'projects.html' ? 'active' : ''}">Projects</a>
        <a href="blog.html" class="nav-link ${currentPath === 'blog.html' ? 'active' : ''}">Blog</a>
        <a href="experience.html" class="nav-link ${currentPath === 'experience.html' ? 'active' : ''}">Experience</a>
        <a href="about.html" class="nav-link ${currentPath === 'about.html' ? 'active' : ''}">About</a>
        <a href="contact.html" class="nav-link ${currentPath === 'contact.html' ? 'active' : ''}">Contact</a>
      </div>
    </nav>
  `;
}

function buildFooter(meta) {
  const year = new Date().getFullYear();
  return `
    <p>DarkWing Studio &copy; ${year}. Made by DarkWing Studio.</p>
    <div class="footer-links">
      <a href="${meta.socials?.github || '#'}" target="_blank" rel="noreferrer noopener">GitHub</a>
      <a href="${meta.socials?.instagram || '#'}" target="_blank" rel="noreferrer noopener">Instagram</a>
      <a href="${meta.socials?.pinterest || '#'}" target="_blank" rel="noreferrer noopener">Pinterest</a>
    </div>
    <div class="footer-legal">
      <a href="privacy.html">Privacy Policy</a>
      <a href="terms.html">Terms of Service</a>
    </div>
  `;
}

function setActiveNav() {}

document.addEventListener('DOMContentLoaded', loadPartials);

function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const nav = document.getElementById('siteNav');

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
}
