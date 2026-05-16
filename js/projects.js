document.addEventListener('DOMContentLoaded', async function () {
  const grid = document.getElementById('projectsGrid');
  const homeGrid = document.getElementById('homeProjectGrid');
  const filters = document.querySelectorAll('.filter-tab');

  if (!grid && !homeGrid) return;

  if (grid) showSkeleton(grid, 6);

  try {
    const projects = await fetchJSON('data/projects.json');

    if (homeGrid) {
      const top = projects.slice(0, 3);
      homeGrid.innerHTML = top.map((item) => `
        <article class="home-project-card">
          <img src="${item.thumbnail}" alt="${item.title} preview" loading="lazy">
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `).join('');
    }

    if (!grid) return;

    function renderProjects(filter = 'all') {
      grid.innerHTML = '';
      const filtered = filter === 'all' ? projects : projects.filter(item => item.category === filter);

      filtered.forEach(item => {
        const card = document.createElement('article');
        card.className = item.featured ? 'featured-card' : 'project-card tilt-card';
        card.innerHTML = `
          <img src="${item.thumbnail}" alt="${item.title} screenshot" loading="lazy">
          <div class="project-copy">
            <div class="project-title">
              <strong>${item.title}</strong>
              ${item.featured ? '<span class="tag">Featured</span>' : ''}
            </div>
            <p class="project-description">${item.description}</p>
            <div class="project-tags">
              ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${item.live}" target="_blank" rel="noreferrer noopener">Live</a>
              <a href="${item.github}" target="_blank" rel="noreferrer noopener">GitHub</a>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    filters.forEach(tab => {
      tab.addEventListener('click', () => {
        filters.forEach(button => button.classList.remove('active'));
        tab.classList.add('active');
        renderProjects(tab.dataset.filter);
      });
    });

    renderProjects();
  } catch (error) {
    if (grid) {
      showError(grid, 'Failed to load projects. Please try again later.');
    }
  }
});
