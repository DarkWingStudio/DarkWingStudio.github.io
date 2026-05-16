function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

async function loadPost() {
  const postId = getQueryParam('id');
  const postTitle = document.getElementById('postTitle');
  const postMeta = document.getElementById('postMeta');
  const postCategory = document.getElementById('postCategory');
  const postCover = document.getElementById('postCover');
  const postContent = document.getElementById('postContent');

  if (!postId || !postTitle || !postMeta || !postCover || !postContent) return;

  try {
    const res = await fetch(`data/posts/${postId}.json`);
    if (!res.ok) throw new Error('Missing post');
    const post = await res.json();

    document.title = `${post.title} — DarkWing Studio`;
    postTitle.textContent = post.title;
    postCategory.textContent = post.tags && post.tags.length ? post.tags[0] : 'Blog';
    postMeta.innerHTML = `${post.date} · ${post.readTime}`;
    postCover.innerHTML = `<img src="${post.cover}" alt="${post.title} cover image">`;
    postContent.innerHTML = post.content;
  } catch (error) {
    postTitle.textContent = 'Post not found';
    postContent.innerHTML = '<p>Unable to load the requested blog post. Return to the <a href="blog.html">blog page</a>.</p>';
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  if (!progressBar) return;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const current = window.scrollY;
  const percent = total > 0 ? Math.min((current / total) * 100, 100) : 0;
  progressBar.style.width = `${percent}%`;
}

window.addEventListener('DOMContentLoaded', () => {
  loadPost();
  updateProgressBar();
  window.addEventListener('scroll', updateProgressBar);
});