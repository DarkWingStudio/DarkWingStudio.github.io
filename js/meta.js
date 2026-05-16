const BASE = "https://darkwingstudio.github.io";

const SEO = {
  "index.html": {
    title: "DarkWing Studio | Portfolio, Web Design, and Creative Development",
    description: "DarkWing Studio portfolio by Rohit: web design, UI/UX, full-stack development, and creative projects for modern brands.",
    path: "/"
  },
  "about.html": {
    title: "About | DarkWing Studio",
    description: "About Rohit at DarkWing Studio: design-led developer, service approach, and creative workflow.",
    path: "/about.html"
  },
  "projects.html": {
    title: "Projects | DarkWing Studio",
    description: "Browse selected web design, UI/UX, and development projects by DarkWing Studio.",
    path: "/projects.html"
  },
  "blog.html": {
    title: "Blog | DarkWing Studio",
    description: "Insights on web development, design process, and portfolio case studies from DarkWing Studio.",
    path: "/blog.html"
  },
  "blog-post.html": {
    title: "Blog Post | DarkWing Studio",
    description: "Read portfolio case studies and development notes from DarkWing Studio.",
    path: "/blog-post.html"
  },
  "experience.html": {
    title: "Experience | DarkWing Studio",
    description: "Professional experience timeline in design and development by DarkWing Studio.",
    path: "/experience.html"
  },
  "contact.html": {
    title: "Contact | DarkWing Studio",
    description: "Contact DarkWing Studio for web design, UI/UX, and development collaborations.",
    path: "/contact.html"
  }
};

function ensureElement(selector, creator) {
  let el = document.querySelector(selector);
  if (el) return el;
  el = creator();
  document.head.appendChild(el);
  return el;
}

function setMeta(selector, attr, value) {
  if (!value) return;

  const creators = {
    title: () => document.createElement("title"),
    'meta[name="description"]': () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      return tag;
    },
    'link[rel="canonical"]': () => {
      const tag = document.createElement("link");
      tag.setAttribute("rel", "canonical");
      return tag;
    },
    'meta[property="og:title"]': () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:title");
      return tag;
    },
    'meta[property="og:description"]': () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:description");
      return tag;
    },
    'meta[property="og:url"]': () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:url");
      return tag;
    },
    'meta[name="twitter:title"]': () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:title");
      return tag;
    },
    'meta[name="twitter:description"]': () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:description");
      return tag;
    },
  };

  const el = creators[selector] ? ensureElement(selector, creators[selector]) : document.querySelector(selector);
  if (!el) return;
  if (attr === "text") el.textContent = value;
  else el.setAttribute(attr, value);
}

(function applyPageSeo() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const item = SEO[page];
  if (!item) return;

  setMeta("title", "text", item.title);
  setMeta('meta[name="description"]', "content", item.description);
  setMeta('link[rel="canonical"]', "href", `${BASE}${item.path}`);
  setMeta('meta[property="og:title"]', "content", item.title);
  setMeta('meta[property="og:description"]', "content", item.description);
  setMeta('meta[property="og:url"]', "content", `${BASE}${item.path}`);
  setMeta('meta[name="twitter:title"]', "content", item.title);
  setMeta('meta[name="twitter:description"]', "content", item.description);
})();

async function loadMeta() {
  try {
    const res = await fetch("data/meta.json");
    if (!res.ok) throw new Error("Meta not found");
    const data = await res.json();
    window.DARKWING_META = data;
    applyMeta(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function applyMeta(meta) {
  document.querySelectorAll(".site-brand").forEach((el) => {
    el.textContent = meta.brand || "DW";
  });

  const statusText = document.getElementById("statusText");
  if (statusText && meta.statusText) {
    statusText.textContent = meta.statusText;
  }

  const statusIndicator = document.getElementById("statusIndicator");
  if (statusIndicator && meta.status === "available") {
    statusIndicator.classList.add("status-online");
  }

  const socialRow = document.getElementById("socialRow");
  if (socialRow && meta.socials) {
    socialRow.innerHTML = `
      <a href="${meta.socials.github}" target="_blank" rel="noreferrer noopener">GitHub</a>
      <a href="${meta.socials.instagram}" target="_blank" rel="noreferrer noopener">Instagram</a>
      <a href="${meta.socials.pinterest}" target="_blank" rel="noreferrer noopener">Pinterest</a>
    `;
  }
}

window.addEventListener("DOMContentLoaded", loadMeta);
