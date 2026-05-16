document.addEventListener('DOMContentLoaded', async function () {
  const timelineGrid = document.getElementById('timelineGrid');
  if (!timelineGrid) return;

  // Show skeleton loading state
  showSkeleton(timelineGrid, 4);

  try {
    const entries = await fetchJSON('data/experience.json');

    const groups = entries.reduce((acc, entry) => {
      const key = entry.type === 'creative' ? 'Creative Work' : 'Dev Work';
      if (!acc[key]) acc[key] = [];
      acc[key].push(entry);
      return acc;
    }, {});

    Object.entries(groups).forEach(([title, group]) => {
      const section = document.createElement('div');
      section.className = 'timeline-group';
      section.innerHTML = `<h3>${title}</h3>`;

      group.forEach(entry => {
        const card = document.createElement('article');
        card.className = 'timeline-entry';
        card.innerHTML = `
          <div class="entry-line">
            <div class="entry-meta">
              <strong>${entry.role}</strong>
              <span>${entry.range}</span>
            </div>
            <div class="entry-meta">
              <span>${entry.org}</span>
              ${entry.link ? `<a class="entry-link" href="${entry.link}" target="_blank" rel="noreferrer noopener">View</a>` : ''}
            </div>
          </div>
          <div class="entry-copy">
            <ul>
              ${entry.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
          </div>
        `;
        section.appendChild(card);
      });

      timelineGrid.appendChild(section);
    });
  } catch (error) {
    showError(timelineGrid, 'Failed to load experience. Please try again later.');
  }
});
