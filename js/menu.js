/* ============================================
   MENU.JS — Navegación y menú móvil
   ============================================ */

'use strict';

/**
 * Inicializa el menú de navegación móvil
 * y el comportamiento del header al hacer scroll.
 */
function initMenu() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  // Toggle menú móvil
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav__menu--open');
      navToggle.classList.toggle('nav__toggle--active');
    });
  }

  // Cerrar menú al hacer clic en un enlace
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('nav__menu--open');
      if (navToggle) navToggle.classList.remove('nav__toggle--active');
    });
  });

  // Header con fondo al hacer scroll
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('header--scrolled', window.scrollY > 50);
    });
  }
}
