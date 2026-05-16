class ParticleBackground {
  constructor(selector) {
    this.container = document.querySelector(selector);
    if (!this.container) return;

    // Check for reduced motion preference
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      return; // Don't animate if reduced motion is enabled
    }

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.createParticles();
    requestAnimationFrame(() => this.animate());
  }

  resize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }

  createParticles() {
    this.particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      alpha: 0.1 + Math.random() * 0.4,
      size: 1 + Math.random() * 2,
      velocity: 0.15 + Math.random() * 0.4
    }));
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(particle => {
      particle.y -= particle.velocity;
      if (particle.y < -10) {
        particle.y = this.canvas.height + 10;
        particle.x = Math.random() * this.canvas.width;
      }
      this.ctx.beginPath();
      this.ctx.fillStyle = `rgba(123, 47, 255, ${particle.alpha})`;
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.animate());
  }
}

window.addEventListener('load', () => new ParticleBackground('.hero-section'));