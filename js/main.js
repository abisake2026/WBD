/**
 * Wellington Builders - Master Main JavaScript
 * Location: Coimbatore, Tamil Nadu, India
 */

document.addEventListener('DOMContentLoaded', () => {
  // Console Brand Banner
  console.log(
    '%c WELLINGTON BUILDERS %c COIMBATORE, TAMIL NADU %c',
    'background: #c7a9a3; color: #3e3239; font-weight: bold; padding: 4px 8px; border-radius: 3px;',
    'background: #493b42; color: #f7efe7; padding: 4px 8px; border-radius: 3px;',
    'background: transparent;'
  );

  // Dynamic Year in Footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Newsletter Form Quick Handler
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        alert('Thank you for subscribing to Wellington Builders updates!');
        input.value = '';
      }
    });
  }
});
