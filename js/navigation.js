/**
 * Wellington Builders - Navigation & Header Logic
 */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileClose = document.querySelector('.mobile-close-btn');
  const backdrop = document.querySelector('.drawer-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  // Sticky Header on Scroll
  let scrollUpdateScheduled = false;
  const updateScrollState = () => {
    const isScrolled = window.scrollY > 40;
    header?.classList.toggle('scrolled', isScrolled);
    backToTopBtn?.classList.toggle('visible', isScrolled);
    scrollUpdateScheduled = false;
  };

  window.addEventListener('scroll', () => {
    if (!scrollUpdateScheduled) {
      scrollUpdateScheduled = true;
      window.requestAnimationFrame(updateScrollState);
    }
  }, { passive: true });
  updateScrollState();

  // Mobile Drawer Toggle
  const openDrawer = () => {
    mobileDrawer?.classList.add('open');
    backdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer?.classList.remove('open');
    backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  };

  mobileToggle?.addEventListener('click', openDrawer);
  mobileClose?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Active Link State based on current URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Back to Top Button
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  });
});
