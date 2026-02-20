/* ============================================
   MAIN.JS — Lógica principal
   ============================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar módulos
  if (typeof initMenu === 'function') initMenu();
  if (typeof initHeroAnimations === 'function') initHeroAnimations();
  if (typeof initTypingEffect === 'function') initTypingEffect();
  if (typeof initScrollAnimations === 'function') initScrollAnimations();
  if (typeof initContactForm === 'function') initContactForm();
});
