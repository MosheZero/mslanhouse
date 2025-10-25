
// Mobile menu toggle
const hamb = document.getElementById('hamb');
const menu = document.getElementById('menu');
if (hamb && menu) {
  hamb.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    hamb.setAttribute('aria-expanded', String(open));
  });
}

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ==== Carrossel de imagens ====
function initCarousel(id) {
  const carousel = document.getElementById(id);
  if (!carousel) return;
  const track = carousel.querySelector('.carousel-track');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  let index = 0;
  const slides = track.children;

  function update() {
    const width = slides[0].clientWidth + 16; // imagem + margem
    track.style.transform = `translateX(-${index * width}px)`;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });
  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });
  window.addEventListener('resize', update);
}

initCarousel('carousel-cartoes');
initCarousel('carousel-etiquetas');
