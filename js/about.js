document.addEventListener('DOMContentLoaded', async function () {
  const skillsGrid = document.getElementById('skillsGrid');
  const currentWork = document.getElementById('currentWork');
  const socialRow = document.getElementById('socialRow');

  if (skillsGrid) {
    const res = await fetch('data/skills.json');
    const skills = await res.json();
    skillsGrid.innerHTML = skills.map(skill => `
      <div class="skill-card" data-scroll>
        <div class="skill-meta">
          <span class="skill-name">${skill.name}</span>
          <span>${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" style="width: ${skill.level}%;"></div>
        </div>
      </div>
    `).join('');
  }

  if (currentWork) {
    const meta = window.DARKWING_META || await fetch('data/meta.json').then(r => r.json());
    currentWork.innerHTML = `<div class="current-work-card" data-scroll>
        <p>${meta.currentlyWorkingOn || 'Designing an AI-driven portfolio dashboard and launching a new studio web app.'}</p>
      </div>`;
  }

  if (socialRow && window.DARKWING_META && window.DARKWING_META.socials) {
    socialRow.innerHTML = `
      <a href="${window.DARKWING_META.socials.github}" target="_blank" rel="noreferrer noopener">GitHub</a>
      <a href="${window.DARKWING_META.socials.instagram}" target="_blank" rel="noreferrer noopener">Instagram</a>
      <a href="${window.DARKWING_META.socials.pinterest}" target="_blank" rel="noreferrer noopener">Pinterest</a>
    `;
  }
});