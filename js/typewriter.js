const typewriterElement = document.getElementById('heroTypewriter');
const defaultTaglines = ['Full-Stack Builder.', 'Creative Director.', 'Anime × Dev.'];
let typewriterIndex = 0;
let charIndex = 0;
let isDeleting = false;

function getTaglines() {
  return (window.DARKWING_META && window.DARKWING_META.taglines) || defaultTaglines;
}

function typewriter() {
  const taglines = getTaglines();
  const currentText = taglines[typewriterIndex];

  if (!typewriterElement) return;

  if (isDeleting) {
    charIndex -= 1;
    typewriterElement.textContent = currentText.slice(0, charIndex);
  } else {
    charIndex += 1;
    typewriterElement.textContent = currentText.slice(0, charIndex);
  }

  let delay = 120;

  if (isDeleting) {
    delay = 60;
  }

  if (!isDeleting && charIndex === currentText.length) {
    delay = 1400;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typewriterIndex = (typewriterIndex + 1) % taglines.length;
    delay = 180;
  }

  setTimeout(typewriter, delay);
}

window.addEventListener('load', () => {
  if (typewriterElement) {
    typewriter();
  }
});