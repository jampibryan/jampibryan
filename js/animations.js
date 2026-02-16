/* ============================================
   ANIMATIONS.JS — Control de animaciones
   ============================================ */

'use strict';

/**
 * Hero: aparición escalonada de elementos
 */
function initHeroAnimations() {
  const elements = document.querySelectorAll('.hero-animate');
  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = parseInt(el.dataset.delay, 10) || 0;
    setTimeout(() => {
      el.classList.add('hero-animate--visible');
    }, delay);
  });

  // Efecto de brillo en la imagen al cargar
  const imgWrapper = document.querySelector('.hero__image-wrapper');
  if (imgWrapper) {
    setTimeout(() => {
      imgWrapper.classList.add('hero__image-wrapper--loaded');
    }, 1200);
  }
}

/**
 * Efecto de escritura para el título profesional
 */
function initTypingEffect() {
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  const titles = [
    'Desarrollador Full Stack',
    'Tecnologías de la Información',
    'Data Science & IA',
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseAfterType = 2000;
  const pauseAfterDelete = 500;

  function type() {
    const currentTitle = titles[titleIndex];

    if (!isDeleting) {
      typingEl.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(type, pauseAfterType);
        return;
      }
      setTimeout(type, typingSpeed);
    } else {
      typingEl.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, pauseAfterDelete);
        return;
      }
      setTimeout(type, deletingSpeed);
    }
  }

  // Esperar la animación del hero antes de iniciar la escritura
  setTimeout(type, 1000);
}

/**
 * Observa elementos con la clase .animate
 * y les aplica la animación al entrar en el viewport.
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate--fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}
