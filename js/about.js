document.addEventListener('DOMContentLoaded', async function () {
  const skillsGrid = document.getElementById('skillsGrid');
  const currentWork = document.getElementById('currentWork');
  const socialRow = document.getElementById('socialRow');

  if (skillsGrid) {
    const skills = await fetchJSON('data/skills.json');
    const categories = [
      { key: 'Frontend', label: 'Frontend' },
      { key: 'Backend', label: 'Backend' },
      { key: 'Other', label: 'Other' }
    ];

    const iconMap = {
      'React / Vite': 'https://cdn.simpleicons.org/react',
      'HTML / CSS / Vanilla JS': 'https://cdn.simpleicons.org/html5',
      'UI / UX Systems': 'https://cdn.simpleicons.org/figma',
      'Supabase': 'https://cdn.simpleicons.org/supabase',
      'GraphQL': 'https://cdn.simpleicons.org/graphql',
      'Edge Functions': 'https://cdn.simpleicons.org/cloudflareworkers',
      'Stable Diffusion': 'https://cdn.simpleicons.org/stabilityai',
      'Anime Edits': 'https://cdn.simpleicons.org/adobephotoshop',
      '3D Renders': 'https://cdn.simpleicons.org/blender'
    };

    skillsGrid.innerHTML = categories.map((category) => {
      const items = skills.filter((skill) => {
        if (category.key === 'Other') return !['Frontend', 'Backend'].includes(skill.category);
        return skill.category === category.key;
      });

      return `
        <section class="skill-group-card" data-scroll>
          <h3>${category.label}</h3>
          <div class="skill-logo-list">
            ${items.map((skill) => `
              <article class="skill-logo-item">
                <img src="${iconMap[skill.name] || 'https://cdn.simpleicons.org/javascript'}" alt="${skill.name} logo" loading="lazy">
                <span>${skill.name}</span>
              </article>
            `).join('')}
          </div>
        </section>
      `;
    }).join('');
  }

  if (currentWork) {
    const meta = window.DARKWING_META || await fetch('data/meta.json').then(r => r.json());
    currentWork.innerHTML = `<div class="current-work-card" data-scroll>
        <p>${meta.currentlyWorkingOn || 'Building PromptVault - an AI art community platform. React + Supabase.'}</p>
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
