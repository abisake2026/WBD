/**
 * Wellington Builders - Interactive FAQ Accordion & Real-time Search
 * Answers are kept transparent, professional, and editable as requested.
 */

const FAQ_DATA = [
  // General Questions
  {
    category: 'general',
    categoryName: 'General Questions',
    question: 'Who are Wellington Builders?',
    answer: 'Wellington Builders is a premier real estate development and construction enterprise based in Coimbatore, Tamil Nadu. We specialize in architecturally distinct residential apartments, bespoke luxury villas, planned residential layouts, and commercial properties engineered to international quality standards.'
  },
  {
    category: 'general',
    categoryName: 'General Questions',
    question: 'Where is Wellington Builders located?',
    answer: 'Our locations are in Veerapandi Pirivu, Coimbatore - 641019, and Coonoor, Nilgiris. Please contact our team before visiting.'
  },
  {
    category: 'general',
    categoryName: 'General Questions',
    question: 'What types of properties do you offer?',
    answer: 'We develop across six core categories: Premium High-Rise Residential Apartments, Ultra-Luxury Private Cantilever Villas, DTCP/RERA Approved Gated Residential Plots, Grade-A Commercial Office & Retail Spaces, Custom Building Construction, and End-to-End Real Estate Development.'
  },
  {
    category: 'general',
    categoryName: 'General Questions',
    question: 'How can I contact your team?',
    answer: 'You can connect directly with our sales and client relation desks via phone at +91 80566 97968, the WhatsApp enquiry button on this website, or email at info@wellingtonbuilders.in. You can also submit an enquiry through any of our project contact forms.'
  },

  // Property Questions
  {
    category: 'property',
    categoryName: 'Property Questions',
    question: 'How can I purchase an apartment?',
    answer: 'The purchase journey begins by exploring our available apartment configurations, visiting the project site or virtual model, choosing your preferred unit floor plan, submitting the booking application with standard KYC identification, and completing the formal agreement as per RERA guidelines.'
  },
  {
    category: 'property',
    categoryName: 'Property Questions',
    question: 'Do you offer luxury villas?',
    answer: 'Yes, our signature luxury villa developments (such as Wellington Crest in Race Course and Wellington Aurora in Kovaipudur) feature private cantilevered architecture, swimming plunge pools, double-height living spaces, and customizable interior floor layouts.'
  },
  {
    category: 'property',
    categoryName: 'Property Questions',
    question: 'Are residential plots available?',
    answer: 'Yes, we offer master-planned gated residential plots with complete infrastructure—including wide bitumen avenue roads, underground storm drainage, individual water connections, and underground electricity cabling in rapidly developing Coimbatore corridors like Saravanampatti and Thudiyalur.'
  },
  {
    category: 'property',
    categoryName: 'Property Questions',
    question: 'Can I schedule a property visit?',
    answer: 'Yes. We encourage all prospective buyers and families to inspect our project sites in person. You can click "Schedule Site Visit" on any project page or call our concierge desk to arrange a guided property walkthrough at your convenience.'
  },

  // Construction Questions
  {
    category: 'construction',
    categoryName: 'Construction Questions',
    question: 'Do you provide customised construction services?',
    answer: 'Yes. In addition to our landmark developments, our construction wing undertakes turnkey custom villa and commercial building construction for private clients who own land in and around Coimbatore. We manage structural design, permissions, civil works, and interior fitouts.'
  },
  {
    category: 'construction',
    categoryName: 'Construction Questions',
    question: 'Can I discuss my building requirements?',
    answer: 'Our senior architects and civil engineers are available for structured technical consultations. You can share your plot dimensions, lifestyle requirements, and architectural preferences, and we will formulate a comprehensive feasibility and layout proposal.'
  },
  {
    category: 'construction',
    categoryName: 'Construction Questions',
    question: 'Do you provide construction consultations?',
    answer: 'Yes. We provide structural feasibility analysis, soil test coordination, green building consultation, Vaastu alignment reviews, and budget estimation services for clients planning greenfield construction projects.'
  },

  // Booking and Payment
  {
    category: 'booking',
    categoryName: 'Booking and Payment',
    question: 'How can I enquire about a property?',
    answer: 'Simply fill out the contact form on our website with your preferred property type and contact details, or send an instant message via our WhatsApp portal. Our dedicated property advisor will share comprehensive brochures, pricing sheets, and floor plans within 2 hours.'
  },
  {
    category: 'booking',
    categoryName: 'Booking and Payment',
    question: 'What documents are required when purchasing a property?',
    answer: 'Standard documentation includes government-issued Photo ID (Aadhaar Card, Passport, or PAN card), proof of current address, passport-sized photographs, and relevant banking details for transaction records. Non-Resident Indians (NRIs) also require overseas address proof and NRE/NRO bank documentation. [Editable Placeholder: Verification based on actual prevailing statutory regulations].'
  },
  {
    category: 'booking',
    categoryName: 'Booking and Payment',
    question: 'Can I schedule a meeting with your sales team?',
    answer: 'Yes. You can book an appointment at our Coimbatore corporate office or arrange an online video walkthrough with our senior sales advisors if you reside outside Coimbatore or overseas.'
  },

  // Project Questions
  {
    category: 'project',
    categoryName: 'Project Questions',
    question: 'How can I check project availability?',
    answer: 'Current availability of specific units, floor levels, plot numbers, and commercial plates is updated weekly. Contact our sales office directly or submit a project enquiry for an up-to-the-minute inventory ledger.'
  },
  {
    category: 'project',
    categoryName: 'Project Questions',
    question: 'How can I get project details?',
    answer: 'Complete project brochures containing high-resolution 3D renders, architectural floor plans, technical specifications, and location maps are available for download on our project pages or can be emailed directly to your inbox.'
  },
  {
    category: 'project',
    categoryName: 'Project Questions',
    question: 'How can I receive updates about ongoing projects?',
    answer: 'Registered buyers and interested clients receive monthly construction milestone reports containing drone photography, engineering progress summaries, and expected delivery timelines.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const accordionContainer = document.getElementById('faq-accordion-container');
  const searchInput = document.getElementById('faq-search-input');
  const categoryTabs = document.querySelectorAll('.faq-category-tab');

  let currentCategory = 'all';
  let searchQuery = '';

  const renderFAQ = () => {
    if (!accordionContainer) return;

    const filtered = FAQ_DATA.filter(item => {
      const matchesCat = (currentCategory === 'all') || (item.category === currentCategory);
      const matchesQuery = searchQuery === '' || 
        item.question.toLowerCase().includes(searchQuery) ||
        item.answer.toLowerCase().includes(searchQuery);
      return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
      accordionContainer.innerHTML = `
        <div style="text-align:center; padding:50px 20px; background:var(--bg-secondary); border-radius:12px; border:1px solid var(--border-light);">
          <i class="fa-solid fa-circle-question" style="font-size:2.5rem; color:var(--color-red); margin-bottom:14px;"></i>
          <h3>No matching questions found</h3>
          <p style="color:var(--text-muted); margin-top:8px;">Have a specific question not listed here? Our team in Coimbatore is ready to help.</p>
          <a href="contact.html" class="btn btn-primary btn-sm" style="margin-top:20px;">Contact Our Team</a>
        </div>
      `;
      return;
    }

    accordionContainer.innerHTML = filtered.map((item, idx) => `
      <div class="faq-item ${idx === 0 && searchQuery === '' ? 'active' : ''}">
        <button class="faq-question" type="button" aria-expanded="${idx === 0 && searchQuery === '' ? 'true' : 'false'}">
          <span>${item.question}</span>
          <span class="faq-toggle-icon"><i class="fa-solid fa-chevron-down"></i></span>
        </button>
        <div class="faq-answer" style="${idx === 0 && searchQuery === '' ? 'max-height: 500px;' : ''}">
          <p>${item.answer}</p>
        </div>
      </div>
    `).join('');

    // Accordion Toggle Handling
    const faqItems = accordionContainer.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = null;
            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  };

  renderFAQ();

  // Search Input Filter
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderFAQ();
  });

  // Category Tabs
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      renderFAQ();
    });
  });
});
