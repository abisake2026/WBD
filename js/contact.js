/**
 * Wellington Builders - Contact Form Validation, WhatsApp Integration, & Map Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('wellington-contact-form');
  const successBanner = document.getElementById('contact-form-success');
  const projectInput = document.getElementById('contact-project');

  // Pre-fill project name from URL if passed (e.g. from project cards)
  const urlParams = new URLSearchParams(window.location.search);
  const prefilledProject = urlParams.get('project');
  if (prefilledProject && projectInput) {
    projectInput.value = decodeURIComponent(prefilledProject);
  }

  // Form Validation & Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Fields
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const phoneInput = document.getElementById('contact-phone');
      const propertyType = document.getElementById('contact-property-type');
      const messageInput = document.getElementById('contact-message');

      // Reset errors
      document.querySelectorAll('.form-group').forEach(group => group.classList.remove('has-error'));

      // 1. Name Check
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showFieldError(nameInput, 'Please enter your full name (minimum 2 characters)');
        isValid = false;
      }

      // 2. Email Check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'Please provide a valid email address');
        isValid = false;
      }

      // 3. Phone Check
      const phoneClean = phoneInput.value.replace(/[\s\-\(\)\+]/g, '');
      if (!phoneClean || phoneClean.length < 8) {
        showFieldError(phoneInput, 'Please provide a valid contact number (at least 8-10 digits)');
        isValid = false;
      }

      // 4. Property Type Check
      if (!propertyType.value) {
        showFieldError(propertyType, 'Please select your interested property category');
        isValid = false;
      }

      // 5. Message Check
      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        showFieldError(messageInput, 'Please leave a brief message regarding your requirements');
        isValid = false;
      }

      if (isValid) {
        // Simulated successful submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalContent = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Enquiry...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalContent;
          if (successBanner) {
            successBanner.classList.add('show');
            successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          contactForm.reset();
        }, 1200);
      }
    });
  }

  function showFieldError(inputElement, errorMsg) {
    const group = inputElement.closest('.form-group');
    if (group) {
      group.classList.add('has-error');
      let errorSpan = group.querySelector('.form-error-msg');
      if (errorSpan) {
        errorSpan.textContent = errorMsg;
      }
    }
  }

  // Quick WhatsApp Launcher Button
  const waDirectBtn = document.getElementById('whatsapp-direct-send');
  if (waDirectBtn) {
    waDirectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = '918056697968';
      const msg = encodeURIComponent('Hello Wellington Builders Coimbatore team, I would like to enquire about your luxury properties and projects.');
      window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    });
  }
});
