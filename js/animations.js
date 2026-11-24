/**
 * Wellington Builders - Scroll reveals and stat counters
 */
document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gridSelectors = [
    '.category-grid',
    '.projects-grid',
    '.why-grid',
    '.services-grid',
    '.gallery-grid',
    '.stats-grid'
  ];
  const revealSelectors = [
    '.section-header',
    '.intro-layout > *',
    '.home-page .intro-highlight-card',
    '.contact-grid > *',
    '.contact-info-card',
    '.contact-map-wrap',
    '.service-card',
    '.testimonial-slide',
    '.faq-item',
    '.reveal-fade-up'
  ];

  gridSelectors.forEach((selector) => {
    revealSelectors.push(`${selector} > *`);
  });

  const revealTargets = document.querySelectorAll(revealSelectors.join(', '));

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible', 'is-inview');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -6% 0px'
    });

    revealTargets.forEach((target) => {
      const parent = target.parentElement;
      const isGridItem = parent && gridSelectors.some((selector) => parent.matches(selector));
      if (isGridItem) {
        const index = Array.prototype.indexOf.call(parent.children, target);
        target.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 70}ms`);
      }

      target.classList.add('scroll-reveal');
      revealObserver.observe(target);
    });

    document.addEventListener('focusin', (event) => {
      const target = event.target instanceof Element
        ? event.target.closest('.scroll-reveal')
        : null;
      if (target) {
        target.classList.add('is-visible', 'is-inview');
        revealObserver.unobserve(target);
      }
    });
  } else {
    revealTargets.forEach((target) => {
      target.classList.add('is-visible', 'is-inview');
    });
  }

  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0 || reduceMotion) {
    return;
  }

  let counted = false;
  const statsStrip = document.querySelector('.stats-strip');
  if (!statsStrip || !('IntersectionObserver' in window)) {
    return;
  }

  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        statNumbers.forEach((stat) => {
          const target = Number.parseInt(stat.getAttribute('data-target') || '0', 10);
          const value = stat.querySelector('.num-val');
          if (!value) {
            return;
          }

          const duration = 1800;
          const startTime = performance.now();
          const updateCount = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            value.textContent = Math.floor(progress * (2 - progress) * target).toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              value.textContent = target.toLocaleString();
            }
          };

          requestAnimationFrame(updateCount);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  countObserver.observe(statsStrip);
});
