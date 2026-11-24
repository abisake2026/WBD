/**
 * Wellington Builders - Testimonials Slider & Review Display
 * Note: Uses clearly marked editable client placeholders as instructed.
 */

const TESTIMONIALS_DATA = [
  {
    name: 'K. S. Narayanan & Family',
    project: 'Wellington Crest Cantilever Villas, Race Course',
    role: 'Homeowner [Editable Placeholder]',
    rating: 5,
    avatar: 'KN',
    feedback: '“The structural finish and cantilever aesthetics exceeded our architectural expectations. Wellington Builders maintained absolute clarity during every stage of RCC casting and marble curation. A truly landmark home in Coimbatore.”',
    date: 'March 2026'
  },
  {
    name: 'Dr. Priya Ramachandran',
    project: 'Wellington Zenith Heights, Peelamedu',
    role: 'Apartment Owner [Editable Placeholder]',
    rating: 5,
    avatar: 'PR',
    feedback: '“Being located near TIDEL Park with peaceful Western Ghats breezes makes this the best residential investment in Coimbatore. The attention to sound insulation, natural lighting, and high-speed elevators is remarkable.”',
    date: 'January 2026'
  },
  {
    name: 'V. Anand Kumar',
    project: 'Wellington Green Palms, Saravanampatti',
    role: 'Plot Investor [Editable Placeholder]',
    rating: 5,
    avatar: 'VA',
    feedback: '“Clear DTCP documentation, wide avenue roads with underground cabling, and prompt registration support. Wellington Builders is an exemplar of transparency in Coimbatore real estate development.”',
    date: 'November 2025'
  },
  {
    name: 'Rajesh Subramanian',
    project: 'Wellington Aurora Mansions, Kovaipudur',
    role: 'Villa Owner [Editable Placeholder]',
    rating: 5,
    avatar: 'RS',
    feedback: '“The hillside view and the quality of teak carpentry and German sanitary fittings are top notch. Their engineering team was always accessible to accommodate our custom interior requirements.”',
    date: 'August 2025'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('testimonial-track');
  const dotsContainer = document.getElementById('testimonial-dots');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  if (!track) return;

  // Render Slides
  track.innerHTML = TESTIMONIALS_DATA.map((item) => `
    <div class="testimonial-slide">
      <i class="fa-solid fa-quote-right quote-icon"></i>
      <div class="testimonial-rating">
        ${Array.from({ length: item.rating }).map(() => '<i class="fa-solid fa-star"></i>').join('')}
      </div>
      <p class="testimonial-text">${item.feedback}</p>
      <div class="testimonial-author-box">
        <div class="author-avatar">${item.avatar}</div>
        <div class="author-info">
          <h4>${item.name}</h4>
          <span>${item.project} &bull; ${item.role}</span>
          <div><span class="placeholder-tag">[Verified Client Feedback Placeholder]</span></div>
        </div>
      </div>
    </div>
  `).join('');

  // Render Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = TESTIMONIALS_DATA.map((_, idx) => `
      <div class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>
    `).join('');
  }

  let currentIndex = 0;
  const totalSlides = TESTIMONIALS_DATA.length;
  let autoSlideTimer = null;

  const updateSlide = (index) => {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    const dots = dotsContainer?.querySelectorAll('.slider-dot');
    dots?.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  };

  const nextSlide = () => {
    const next = (currentIndex + 1) % totalSlides;
    updateSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide(prev);
  };

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  dotsContainer?.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      updateSlide(idx);
      resetAutoSlide();
    });
  });

  // Auto slide
  const startAutoSlide = () => {
    autoSlideTimer = setInterval(nextSlide, 6000);
  };

  const resetAutoSlide = () => {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
    startAutoSlide();
  };

  startAutoSlide();

  track.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
  track.addEventListener('mouseleave', startAutoSlide);
});
