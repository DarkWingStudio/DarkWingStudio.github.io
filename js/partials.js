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
      <div class="nav-links nav-links-left">
        <a href="index.html" class="nav-link ${currentPath === 'index.html' ? 'active' : ''}">Home</a>
        <a href="projects.html" class="nav-link ${currentPath === 'projects.html' ? 'active' : ''}">Projects</a>
        <a href="blog.html" class="nav-link ${currentPath === 'blog.html' ? 'active' : ''}">Blog</a>
      </div>

      <a class="brand site-brand" href="index.html">DarkWingStudio</a>

      <div class="nav-links nav-links-right">
        <a href="experience.html" class="nav-link ${currentPath === 'experience.html' ? 'active' : ''}">Experience</a>
        <a href="about.html" class="nav-link ${currentPath === 'about.html' ? 'active' : ''}">About</a>
        <a href="contact.html" class="nav-link ${currentPath === 'contact.html' ? 'active' : ''}">Contact</a>
      </div>

      <div class="nav-links nav-links-mobile" id="navMenu">
        <a href="index.html" class="nav-link ${currentPath === 'index.html' ? 'active' : ''}">Home</a>
        <a href="projects.html" class="nav-link ${currentPath === 'projects.html' ? 'active' : ''}">Projects</a>
        <a href="blog.html" class="nav-link ${currentPath === 'blog.html' ? 'active' : ''}">Blog</a>
        <a href="experience.html" class="nav-link ${currentPath === 'experience.html' ? 'active' : ''}">Experience</a>
        <a href="about.html" class="nav-link ${currentPath === 'about.html' ? 'active' : ''}">About</a>
        <a href="contact.html" class="nav-link ${currentPath === 'contact.html' ? 'active' : ''}">Contact</a>
      </div>

      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navMenu" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;
}

function buildFooter(meta) {
  const year = new Date().getFullYear();
  const email = meta.socials?.email || 'darkwingdomain@gmail.com';
  return `
    <div class="footer-shell container">
      <div class="footer-top">
        <h2>Let's Build Something Useful</h2>
        <a class="footer-hire-btn" href="contact.html">Contact Rohit -></a>
      </div>

      <div class="footer-grid">
        <div class="footer-brand-col">
          <h3>${meta.brand || 'DarkWing Studio'}</h3>
          <p>${meta.bio || 'Building polished web products and reliable frontend systems.'}</p>
          <div class="footer-socials">
            <a href="${meta.socials?.github || '#'}" target="_blank" rel="noreferrer noopener" aria-label="GitHub"><img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub"></a>
            <a href="${meta.socials?.instagram || '#'}" target="_blank" rel="noreferrer noopener" aria-label="Instagram"><img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram"></a>
            <a href="${meta.socials?.twitter || '#'}" target="_blank" rel="noreferrer noopener" aria-label="X"><img src="https://cdn.simpleicons.org/x/ffffff" alt="X"></a>
            <a href="${meta.socials?.pinterest || '#'}" target="_blank" rel="noreferrer noopener" aria-label="Pinterest"><img src="https://cdn.simpleicons.org/pinterest/ffffff" alt="Pinterest"></a>
          </div>
        </div>

        <div>
          <h4>Navigation</h4>
          <div class="footer-nav-links">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="projects.html">Projects</a>
            <a href="experience.html">Experience</a>
            <a href="blog.html">Blog</a>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <div class="footer-contact-links">
            <a href="contact.html">Contact Page</a>
            <a href="mailto:${email}">${email}</a>
            <a href="${meta.socials?.github || '#'}" target="_blank" rel="noreferrer noopener">github.com/DarkWingStudio</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Copyright © ${year} <span>${meta.brand || 'DarkWing Studio'}</span>. All Rights Reserved.</p>
        <div class="footer-legal">
          <a href="terms.html">User Terms & Conditions</a>
          <a href="privacy.html">Privacy Policy</a>
        </div>
      </div>
    </div>
  `;
}

function setActiveNav() {}

document.addEventListener('DOMContentLoaded', loadPartials);
document.addEventListener('DOMContentLoaded', initPageTransition);

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

function initPageTransition() {
  document.body.classList.add('page-enter');
  requestAnimationFrame(() => {
    document.body.classList.add('page-enter-active');
  });

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || link.target === '_blank') return;

    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return;

    const isDownload = link.hasAttribute('download');
    if (isDownload) return;

    event.preventDefault();
    document.body.classList.add('page-leave-active');
    setTimeout(() => {
      window.location.href = url.href;
    }, 220);
  });
}
