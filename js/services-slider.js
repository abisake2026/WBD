document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('services-slider-track');
  const previousButton = document.getElementById('services-slider-prev');
  const nextButton = document.getElementById('services-slider-next');

  if (!track || !previousButton || !nextButton) return;

  const updateControls = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    previousButton.disabled = track.scrollLeft <= 1;
    nextButton.disabled = track.scrollLeft >= maxScroll - 1;
  };

  const scrollByCard = direction => {
    const card = track.querySelector('.service-card');
    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reducedMotion ? 'auto' : 'smooth'
    });
  };

  previousButton.addEventListener('click', () => scrollByCard(-1));
  nextButton.addEventListener('click', () => scrollByCard(1));
  track.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
});
