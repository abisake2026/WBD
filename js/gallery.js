/**
 * Wellington Builders - Visual Gallery & Lightbox Logic
 */

const GALLERY_ITEMS = [
  {
    src: 'Galary img/img1.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 1',
    desc: 'A glimpse into the craftsmanship and quality of Wellington Builders & Developers, Coimbatore.'
  },
  {
    src: 'Galary img/img2.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 2',
    desc: 'Quality construction and thoughtful design by Wellington Builders & Developers.'
  },
  {
    src: 'Galary img/img3.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 3',
    desc: 'Residential and commercial excellence across Coimbatore and beyond.'
  },
  {
    src: 'Galary img/img4.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 4',
    desc: 'Every detail handled with care and responsibility by our experienced team.'
  },
  {
    src: 'Galary img/img5.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 5',
    desc: 'Practical engineering and quality workmanship in every project we undertake.'
  },
  {
    src: 'Galary img/img6.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 6',
    desc: 'Built with experience, earned through trust — Wellington Builders & Developers.'
  },
  {
    src: 'Galary img/img7.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 7',
    desc: 'Spaces designed to stand the test of time, crafted with attention to every detail.'
  },
  {
    src: 'Galary img/img8.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 8',
    desc: 'From residential homes to commercial buildings — quality at every stage.'
  },
  {
    src: 'Galary img/img9.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 9',
    desc: 'Decades of construction experience reflected in every project we complete.'
  },
  {
    src: 'Galary img/img10.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 10',
    desc: 'Interior and exterior works executed with professional care and skill.'
  },
  {
    src: 'Galary img/img11.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 11',
    desc: 'Reliable construction services built on a foundation of trust and workmanship.'
  },
  {
    src: 'Galary img/img12.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 12',
    desc: 'Site engineering and project execution handled with expertise and responsibility.'
  },
  {
    src: 'Galary img/img13.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 13',
    desc: 'Each project a reflection of our commitment to quality and honest work.'
  },
  {
    src: 'Galary img/img14.png',
    category: 'architecture',
    categoryName: 'Architecture',
    title: 'Wellington Builders – Project Gallery 14',
    desc: 'Wellington Builders & Developers — building better spaces across Coimbatore.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxDots = document.getElementById('lightbox-dots');

  let activeIndex = 0;
  let currentFilteredList = [...GALLERY_ITEMS];

  // Render Gallery Items
  const renderGallery = (items) => {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = items.map((item, index) => `
      <div class="gallery-item" data-category="${item.category}" data-index="${index}">
        <img src="${item.src}" alt="${item.title}" class="gallery-img" loading="lazy" decoding="async">
        <div class="gallery-overlay">
          <span class="gallery-item-category">${item.categoryName}</span>
          <h4 class="gallery-item-title">${item.title}</h4>
        </div>
        <div class="gallery-zoom-icon">
          <i class="fa-solid fa-expand"></i>
        </div>
      </div>
    `).join('');

    // Scroll-reveal: add .is-visible when each card enters the viewport
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
      io.observe(el);
      el.addEventListener('click', () => {
        const itemIndex = parseInt(el.getAttribute('data-index'), 10);
        openLightbox(itemIndex);
      });
    });
  };

  if (galleryGrid) {
    renderGallery(GALLERY_ITEMS);
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        currentFilteredList = [...GALLERY_ITEMS];
      } else {
        currentFilteredList = GALLERY_ITEMS.filter(item => item.category === filter);
      }
      renderGallery(currentFilteredList);
    });
  });

  // Lightbox functions
  const openLightbox = (index) => {
    if (!lightbox || !currentFilteredList[index]) return;
    activeIndex = index;
    renderLightboxDots();
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  const updateLightboxContent = () => {
    const item = currentFilteredList[activeIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxCaption.innerHTML = `
      <strong>${item.title}</strong>
      <p style="font-size:0.85rem; color:#c7a9a3; margin-top:4px;">${item.desc}</p>
    `;
    lightboxDots?.querySelectorAll('.carousel-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
      if (index === activeIndex) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
  };

  const renderLightboxDots = () => {
    if (!lightboxDots) return;
    lightboxDots.innerHTML = currentFilteredList.map((item, index) => `
      <button class="carousel-dot${index === activeIndex ? ' active' : ''}" type="button" data-index="${index}" aria-label="Show image: ${item.title}"${index === activeIndex ? ' aria-current="true"' : ''}></button>
    `).join('');
  };

  const showNext = () => {
    activeIndex = (activeIndex + 1) % currentFilteredList.length;
    updateLightboxContent();
  };

  const showPrev = () => {
    activeIndex = (activeIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
    updateLightboxContent();
  };

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxNext?.addEventListener('click', showNext);
  lightboxPrev?.addEventListener('click', showPrev);
  lightboxDots?.addEventListener('click', event => {
    const dot = event.target.closest('.carousel-dot');
    if (!dot) return;
    activeIndex = Number(dot.dataset.index);
    updateLightboxContent();
  });

  // Close on outside click
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
