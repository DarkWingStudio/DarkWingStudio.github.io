document.addEventListener('DOMContentLoaded', async function () {
  const grid = document.getElementById('projectsGrid');
  const homeGrid = document.getElementById('homeProjectGrid');
  const featuredMount = document.getElementById('featuredProjectMount');
  const filters = document.querySelectorAll('.filter-tab');

  if (!grid && !homeGrid) return;

  if (grid) showSkeleton(grid, 6);

  try {
    const projects = await fetchJSON('data/projects.json');
    const tagIcons = {
      React: 'https://cdn.simpleicons.org/react/61DAFB',
      Vite: 'https://cdn.simpleicons.org/vite/646CFF',
      Tailwind: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      Supabase: 'https://cdn.simpleicons.org/supabase/3ECF8E',
      GraphQL: 'https://cdn.simpleicons.org/graphql/E10098',
      HTML: 'https://cdn.simpleicons.org/html5/E34F26',
      CSS: 'https://cdn.simpleicons.org/css/1572B6',
      JavaScript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
      SEO: 'https://cdn.simpleicons.org/google/4285F4'
    };

    if (homeGrid) {
      const top = projects.slice(0, 3);
      homeGrid.innerHTML = top.map((item) => `
        <article class="home-project-card">
          <div class="home-project-card-media">
            <img src="${item.thumbnail}" alt="${item.title} preview" loading="lazy">
          </div>
          <div class="home-project-card-body">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <div class="home-project-card-footer">
            <a class="home-project-card-btn" href="${item.live}" target="_blank" rel="noreferrer noopener">Live</a>
          </div>
        </article>
      `).join('');
    }

    if (featuredMount) {
      const featured = projects.find((item) => item.featured);
      if (featured) {
        featuredMount.innerHTML = `
          <article class="featured-card" id="${featured.id}">
            <img src="${featured.thumbnail}" alt="${featured.title} screenshot" loading="eager">
            <div class="featured-copy">
              <h3>${featured.title}</h3>
              <p>${featured.description}</p>
              <p><strong>Stack:</strong> React + Vite + Tailwind + GitHub GraphQL API + Supabase (6-hour TTL cache)</p>
              <p><strong>What makes it hard:</strong> ${featured.challenge || 'Rate limiting, proxy protection, and production constraints.'}</p>
              <p><strong>Outcome:</strong> ${featured.outcome || featured.metric || 'Live and actively maintained.'}</p>
              <div class="project-links">
                <a href="${featured.live}" target="_blank" rel="noreferrer noopener">Live</a>
                ${featured.github ? `<a href="${featured.github}" target="_blank" rel="noreferrer noopener">GitHub</a>` : ''}
              </div>
            </div>
          </article>
        `;
      }
    }

    if (!grid) return;

    function renderProjects(filter = 'all') {
      grid.innerHTML = '';
      const filtered = filter === 'all' ? projects : projects.filter(item => item.category === filter);

      filtered.forEach(item => {
        const card = document.createElement('article');
        card.className = item.featured ? 'featured-card' : 'project-card tilt-card';
        card.id = item.id;
        card.innerHTML = `
          <img src="${item.thumbnail}" alt="${item.title} screenshot" loading="lazy">
          <div class="project-copy">
            <div class="project-title">
              <strong>${item.title}</strong>
              ${item.featured ? '<span class="tag">Featured</span>' : ''}
            </div>
            <p class="project-description">${item.description}</p>
            <div class="project-tags">
              ${item.tags.map(tag => `
                <span class="tag">
                  ${tagIcons[tag] ? `<img src="${tagIcons[tag]}" alt="${tag} logo" loading="lazy">` : ''}
                  ${tag}
                </span>
              `).join('')}
            </div>
            <div class="project-links">
              <a href="${item.live}" target="_blank" rel="noreferrer noopener">Live</a>
              ${item.github ? `<a href="${item.github}" target="_blank" rel="noreferrer noopener">GitHub</a>` : ''}
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
