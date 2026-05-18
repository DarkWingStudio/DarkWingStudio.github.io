document.addEventListener('DOMContentLoaded', async function () {
  const experienceGrid = document.getElementById('experienceGrid');
  if (!experienceGrid) return;

  showSkeleton(experienceGrid, 4);

  try {
    const entries = await fetchJSON('data/experience.json');
    experienceGrid.innerHTML = entries.map((entry) => `
      <article class="experience-card">
        <div class="experience-meta">
          <strong>${entry.role}</strong>
          <span>${entry.range}</span>
        </div>
        <div class="experience-meta">
          <span>${entry.org}</span>
          ${entry.link ? `<a class="entry-link" href="${entry.link}" target="_blank" rel="noreferrer noopener">View</a>` : ''}
        </div>
        <ul class="experience-points">
          ${entry.points.map((point) => `<li>${point}</li>`).join('')}
        </ul>
      </article>
    `).join('');
  } catch (error) {
    showError(experienceGrid, 'Failed to load experience. Please try again later.');
  }
});
