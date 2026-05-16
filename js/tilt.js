document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('pointermove', function (event) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = (x / rect.width - 0.5) * 16;
      const py = (y / rect.height - 0.5) * 16;
      card.style.transform = `perspective(1000px) rotateX(${ -py }deg) rotateY(${ px }deg)`;
    });

    card.addEventListener('pointerleave', function () {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  });
});