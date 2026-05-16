// js/utils.js - Shared utilities for the portfolio

async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    throw error;
  }
}

function showSkeleton(container, count = 3) {
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton-card';
    skeleton.innerHTML = `
      <div class="skeleton skeleton-image"></div>
      <div class="skeleton-content">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text skeleton-short"></div>
      </div>
    `;
    container.appendChild(skeleton);
  }
}

function showError(container, message = 'Failed to load content. Please try again.') {
  if (!container) return;
  container.innerHTML = `
    <div class="fetch-error">
      <span class="error-icon">⚠</span>
      <p>${message}</p>
      <button onclick="location.reload()" class="btn btn-outline">Retry</button>
    </div>
  `;
}

function sanitizeHTML(html) {
  if (typeof DOMPurify !== 'undefined') {
    return DOMPurify.sanitize(html);
  }
  console.warn('DOMPurify not loaded, returning unsanitized HTML');
  return html;
}

function updateMetaTags(title, description, url, image = 'assets/og/og-image.svg', type = 'website') {
  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = description;

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = title;

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = description;

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.content = url;

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.content = image;

  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) ogType.content = type;

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.content = title;

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.content = description;
}

function addJSONLD(data) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
