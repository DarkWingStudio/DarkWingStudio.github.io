document.addEventListener('DOMContentLoaded', async function () {
  const blogGrid = document.getElementById('blogGrid');
  const filters = document.querySelectorAll('.filter-tab');
  if (!blogGrid) return;

  // Show skeleton loading state
  showSkeleton(blogGrid, 6);

  try {
    const posts = await fetchJSON('data/blog.json');

    function renderPosts(filter = 'all') {
      blogGrid.innerHTML = '';
      const filtered = filter === 'all' ? posts : posts.filter(post => post.tags.includes(filter));

      if (!filtered.length) {
        blogGrid.innerHTML = `<div class="blog-empty">No posts found for "${filter}".</div>`;
        return;
      }

      filtered.forEach(post => {
        const card = document.createElement('article');
        card.className = 'blog-card';
        card.innerHTML = `
          <img src="${post.cover}" alt="${post.title} cover image" loading="lazy">
          <div class="blog-card-content">
            <div class="blog-meta">
              <span>${post.date}</span>
              <span>${post.readTime}</span>
            </div>
            <h2><a href="blog-post.html?id=${post.id}">${post.title}</a></h2>
            <p>${post.excerpt}</p>
            <div class="tag-list">
              ${post.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
            </div>
          </div>
        `;
        blogGrid.appendChild(card);
      });
    }

    filters.forEach(tab => {
      tab.addEventListener('click', function () {
        filters.forEach(button => button.classList.remove('active'));
        this.classList.add('active');
        renderPosts(this.dataset.filter);
      });
    });

    renderPosts();
  } catch (error) {
    showError(blogGrid, 'Failed to load blog posts. Please try again later.');
  }
});
