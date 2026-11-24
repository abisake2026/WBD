/**
 * Wellington Builders - Projects Data, Filtering, & Details Logic
 * Covers Coimbatore prime locations: Race Course, RS Puram, Peelamedu, Saravanampatti, Avinashi Road
 */

const COMPLETED_PROJECT_DEFAULTS = {
  specifications: {
    structure: 'Available on enquiry',
    flooring: 'Available on enquiry',
    doors: 'Available on enquiry',
    plumbing: 'Available on enquiry',
    electrical: 'Available on enquiry'
  },
  amenities: [],
  locationAdvantages: [],
  floorPlanImg: null
};

const WELLINGTON_PROJECTS = [
  {
    id: 'ukkadam-rental-apartment',
    name: 'Ukkadam Rental Apartment',
    category: 'apartments',
    categoryName: 'Residential Apartments',
    status: 'ongoing',
    statusLabel: 'Ongoing Project',
    location: 'Ukkadam, Coimbatore',
    shortDesc: 'A three-floor rental apartment development with approximately 10,000 sq. ft. of construction and dedicated water and septic infrastructure.',
    image: 'assets/images/luxury-apartment.webp',
    price: 'On Request',
    priceLabel: 'Price on request',
    area: 'Approx. 10,000 sq. ft.',
    units: '3 floors',
    possession: 'Ongoing',
    featuredOnHome: true,
    actionLabel: 'View Project',
    overview: 'A multi-level rental apartment development in Ukkadam designed with a practical approach to space utilisation and long-term functionality. The project covers approximately 10,000 sq. ft. of construction and includes three floors, supported by dedicated water storage and septic infrastructure.',
    architecture: 'Scope: Building construction only.',
    projectFacts: [
      { label: 'Project Type', value: 'Rental Apartment' },
      { label: 'Construction Scope', value: 'Building Only' },
      { label: 'Total Built-up Area', value: 'Approx. 10,000 sq. ft.' },
      { label: 'Floors', value: '3' },
      { label: 'Approx. Area per Floor', value: '3,000 sq. ft.' },
      { label: 'House Area', value: '1,000 sq. ft.' },
      { label: 'Top Floor Area', value: '1,000 sq. ft.' },
      { label: 'Water Tank Capacity', value: '80,000 litres' },
      { label: 'Septic Tank Capacity', value: '60,000 litres' }
    ],
    specifications: {
      structure: 'Available on enquiry',
      flooring: 'Available on enquiry',
      doors: 'Available on enquiry',
      plumbing: 'Available on enquiry',
      electrical: 'Available on enquiry'
    },
    amenities: [],
    locationAdvantages: [],
    gallery: ['assets/images/luxury-apartment.webp'],
    floorPlanImg: null
  },
  {
    id: 'gandhi-nagar-commercial-building',
    name: 'Gandhi Nagar Commercial Building',
    category: 'commercial',
    categoryName: 'Commercial Properties',
    status: 'ongoing',
    statusLabel: 'Ongoing Project',
    location: 'Gandhi Nagar, Coimbatore',
    shortDesc: 'A practical commercial building with 12 individual shop spaces across approximately 2,000 sq. ft.',
    image: 'assets/images/commercial-tech.webp',
    price: 'On Request',
    priceLabel: 'Price on request',
    area: 'Approx. 2,000 sq. ft.',
    units: '12 shops',
    possession: 'Ongoing',
    featuredOnHome: true,
    actionLabel: 'View Project',
    overview: 'A commercial building developed in Gandhi Nagar with 12 individual shop spaces, designed to provide practical commercial accommodation for businesses.',
    architecture: 'The project focuses on functional planning, efficient utilisation of available space, and durable construction. Scope: Building construction only.',
    projectFacts: [
      { label: 'Project Type', value: 'Commercial' },
      { label: 'Units', value: '12 shops' },
      { label: 'Area', value: 'Approx. 2,000 sq. ft.' },
      { label: 'Construction Scope', value: 'Building Only' }
    ],
    specifications: {
      structure: 'Available on enquiry',
      flooring: 'Available on enquiry',
      doors: 'Available on enquiry',
      plumbing: 'Available on enquiry',
      electrical: 'Available on enquiry'
    },
    amenities: [],
    locationAdvantages: [],
    gallery: ['assets/images/commercial-tech.webp'],
    floorPlanImg: null
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'gandhi-nagar-residence-2021',
    name: 'Gandhi Nagar Residence — 2021',
    category: 'residential',
    categoryName: 'Residential House',
    status: 'completed',
    statusLabel: 'Completed in 2021',
    location: 'Gandhi Nagar',
    shortDesc: 'A 1,200 sq. ft. residential house completed with building and interior works.',
    image: 'assets/images/hero-villa.webp',
    price: '₹42 Lakhs',
    priceLabel: 'Project value: ₹42 Lakhs',
    area: '1,200 sq. ft.',
    units: 'Residential house',
    possession: 'Completed in 2021',
    overview: 'A residential house in Gandhi Nagar completed in 2021, covering approximately 1,200 sq. ft.',
    architecture: 'The project included the construction of the house along with interior works, delivering a more complete residential solution for the client.',
    projectFacts: [
      { label: 'Year', value: '2021' },
      { label: 'Property Type', value: 'Residential House' },
      { label: 'Built-up Area', value: '1,200 sq. ft.' },
      { label: 'Project Value', value: '₹42 Lakhs' },
      { label: 'Scope', value: 'Building + Interior Works' }
    ]
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'avinashi-residence-2024',
    name: 'Avinashi Residence — 2024',
    category: 'residential',
    categoryName: 'Residential House',
    status: 'completed',
    statusLabel: 'Completed in 2024',
    location: 'Avinashi',
    shortDesc: 'A 1,327 sq. ft. residential construction project focused on structural work and practical requirements.',
    image: 'assets/images/hero-villa.webp',
    price: 'On Request',
    priceLabel: 'Project value not listed',
    area: '1,327 sq. ft.',
    units: 'Residential house',
    possession: 'Completed in 2024',
    overview: 'A residential construction project in Avinashi covering approximately 1,327 sq. ft.',
    architecture: 'The project was executed with a focus on structural construction and practical residential requirements.',
    projectFacts: [
      { label: 'Year', value: '2024' },
      { label: 'Property Type', value: 'Residential House' },
      { label: 'Built-up Area', value: '1,327 sq. ft.' },
      { label: 'Scope', value: 'Building Only' }
    ]
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'karamadai-residence-2023',
    name: 'Karamadai Residence — 2023',
    category: 'residential',
    categoryName: 'Residential House',
    status: 'completed',
    statusLabel: 'Completed in 2023',
    location: 'Karamadai',
    shortDesc: 'A 1,567 sq. ft. residential house planned for structural quality and practical living.',
    image: 'assets/images/hero-villa.webp',
    price: 'On Request',
    priceLabel: 'Project value not listed',
    area: '1,567 sq. ft.',
    units: 'Residential house',
    possession: 'Completed in 2023',
    overview: 'A residential house project in Karamadai covering approximately 1,567 sq. ft.',
    architecture: 'The project demonstrates our experience in executing residential construction with attention to structural quality and practical planning.',
    projectFacts: [
      { label: 'Year', value: '2023' },
      { label: 'Property Type', value: 'Residential House' },
      { label: 'Built-up Area', value: '1,567 sq. ft.' },
      { label: 'Scope', value: 'Building Only' }
    ]
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'virapandi-residence-2023',
    name: 'Virapandi Residence — 2023',
    category: 'residential',
    categoryName: 'Residential House',
    status: 'completed',
    statusLabel: 'Completed in 2023',
    location: 'Virapandi',
    shortDesc: 'A 4,300 sq. ft. residential construction project demonstrating experience with larger-scale homes.',
    image: 'assets/images/hero-villa.webp',
    price: 'On Request',
    priceLabel: 'Project value not listed',
    area: '4,300 sq. ft.',
    units: 'Residential house',
    possession: 'Completed in 2023',
    overview: 'A large residential construction project in Virapandi, covering approximately 4,300 sq. ft.',
    architecture: 'The project reflects our capability in handling larger-scale residential construction requirements.',
    projectFacts: [
      { label: 'Year', value: '2023' },
      { label: 'Property Type', value: 'Residential House' },
      { label: 'Built-up Area', value: '4,300 sq. ft.' },
      { label: 'Scope', value: 'Building Only' }
    ]
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'karamadai-residence-2024',
    name: 'Karamadai Residence — 2024',
    category: 'residential',
    categoryName: 'Residential House',
    status: 'completed',
    statusLabel: 'Completed in 2024',
    location: 'Karamadai',
    shortDesc: 'A residential construction project completed in 2024, covering approximately 1,150 sq. ft.',
    image: 'assets/images/hero-villa.webp',
    price: 'On Request',
    priceLabel: 'Project value not listed',
    area: '1,150 sq. ft.',
    units: 'Residential house',
    possession: 'Completed in 2024',
    overview: 'A residential construction project completed in Karamadai in 2024, covering approximately 1,150 sq. ft.',
    architecture: 'Scope: Building Only.',
    projectFacts: [
      { label: 'Year', value: '2024' },
      { label: 'Property Type', value: 'Residential House' },
      { label: 'Built-up Area', value: '1,150 sq. ft.' },
      { label: 'Scope', value: 'Building Only' }
    ]
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'residential-engineering-project-2019',
    name: 'Residential Engineering Project — 2019',
    category: 'residential',
    categoryName: 'Residential Engineering',
    status: 'completed',
    statusLabel: 'Completed in 2019',
    location: 'Near Lawrence School',
    shortDesc: 'Residential site engineering and project execution covering house construction and interior works.',
    image: 'assets/images/construction-engineering.webp',
    price: 'On Request',
    priceLabel: 'Project value not listed',
    area: 'Area not specified',
    units: 'Residential project',
    possession: 'Completed in 2019',
    overview: 'A residential project where our team contributed through site engineering and project execution, covering house construction and interior works.',
    architecture: 'The project provided valuable experience in site coordination, construction supervision, and execution.',
    projectFacts: [
      { label: 'Year', value: '2019' },
      { label: 'Role', value: 'Site Engineer' },
      { label: 'Scope', value: 'House + Interior Works' }
    ]
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'pollachi-exterior-roofing-2018',
    name: 'Exterior Design & Roofing Project — 2018',
    category: 'construction',
    categoryName: 'Exterior Work & Design',
    status: 'completed',
    statusLabel: 'Completed in 2018',
    location: 'Pollachi',
    shortDesc: 'Exterior design and roofing work focused on the structure and overall architectural appearance.',
    image: 'assets/images/construction-engineering.webp',
    price: 'On Request',
    priceLabel: 'Project value not listed',
    area: 'Area not specified',
    units: 'Exterior project',
    possession: 'Completed in 2018',
    overview: 'An exterior design and roofing project completed in Pollachi in 2018, focused on improving the external structure and overall architectural appearance.',
    architecture: 'Scope: Roofing / Exterior Development.',
    projectFacts: [
      { label: 'Year', value: '2018' },
      { label: 'Project Type', value: 'Exterior Work & Design' },
      { label: 'Scope', value: 'Roofing / Exterior Development' }
    ]
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'karamadai-building-project-2024',
    name: 'Karamadai Building Project — 2024',
    category: 'residential',
    categoryName: 'Residential Construction',
    status: 'completed',
    statusLabel: 'Completed in 2024',
    location: 'Karamadai',
    shortDesc: 'A residential building construction project completed in Karamadai in 2024.',
    image: 'assets/images/hero-villa.webp',
    price: 'On Request',
    priceLabel: 'Project value not listed',
    area: 'Area not specified',
    units: 'Residential building',
    possession: 'Completed in 2024',
    overview: 'A residential building construction project completed in Karamadai in 2024.',
    architecture: 'Scope: Building Only.',
    projectFacts: [
      { label: 'Year', value: '2024' },
      { label: 'Project Type', value: 'Residential Construction' },
      { label: 'Scope', value: 'Building Only' }
    ]
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'mysore-residence-2025',
    name: 'Mysore Residence — 2025',
    category: 'residential',
    categoryName: 'Residential House',
    status: 'completed',
    statusLabel: 'Completed in 2025',
    location: 'Mysore',
    shortDesc: 'A residential project combining house construction with interior and exterior works.',
    image: 'assets/images/hero-villa.webp',
    price: 'On Request',
    priceLabel: 'Project value not listed',
    area: 'Area not specified',
    units: 'Residential house',
    possession: 'Completed in 2025',
    overview: 'A residential project in Mysore completed in 2025, involving house construction along with interior and exterior works.',
    architecture: 'The project combined structural construction with finishing and external development to deliver a more complete residential solution.',
    projectFacts: [
      { label: 'Year', value: '2025' },
      { label: 'Property Type', value: 'Residential House' },
      { label: 'Scope', value: 'House + Interior + Exterior Works' }
    ]
  },
  {
    ...COMPLETED_PROJECT_DEFAULTS,
    id: 'virapandi-residence-2025',
    name: 'Virapandi Residence — 2025',
    category: 'residential',
    categoryName: 'Residential House',
    status: 'completed',
    statusLabel: 'Completed in 2025',
    location: 'Virapandi',
    shortDesc: 'A residential house construction project completed in Virapandi in 2025.',
    image: 'assets/images/hero-villa.webp',
    price: 'On Request',
    priceLabel: 'Project value not listed',
    area: 'Area not specified',
    units: 'Residential house',
    possession: 'Completed in 2025',
    overview: 'A residential house construction project completed in Virapandi in 2025.',
    architecture: 'Scope: House Construction.',
    projectFacts: [
      { label: 'Year', value: '2025' },
      { label: 'Property Type', value: 'Residential House' },
      { label: 'Scope', value: 'House Construction' }
    ]
  },
];

// Helper: Render Project Card HTML
function createProjectCardHtml(project) {
  const statusClass = project.status; // ongoing, completed, upcoming
  return `
    <article class="project-card" data-category="${project.category}" data-status="${project.status}">
      <div class="project-thumb-wrapper">
        <img src="${project.image}" alt="${project.name} - ${project.location}" class="project-thumb" loading="lazy" decoding="async">
        <span class="project-badge-status ${statusClass}">
          <span class="status-dot"></span>
          ${project.statusLabel}
        </span>
        <span class="project-category-tag">${project.categoryName}</span>
      </div>
      <div class="project-info">
        <div>
          <div class="project-meta-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${project.location}</span>
          </div>
          <h3 class="project-name">${project.name}</h3>
          <p class="project-snippet">${project.shortDesc}</p>
          <div class="project-specs-row">
            <div class="project-spec-item">
              <span class="spec-label">Area</span>
              <span class="spec-val">${project.area}</span>
            </div>
            <div class="project-spec-item">
              <span class="spec-label">Units</span>
              <span class="spec-val">${project.units}</span>
            </div>
            <div class="project-spec-item">
              <span class="spec-label">Pricing</span>
              <span class="spec-val" style="color:var(--color-red); font-size:0.8rem;">Enquire</span>
            </div>
          </div>
        </div>
        <div class="project-card-footer">
          <a href="project-details.html?id=${project.id}" class="btn btn-outline-red btn-sm">
            <span>${project.actionLabel || 'View Details'}</span>
            <i class="fa-solid fa-arrow-right btn-icon"></i>
          </a>
          <a href="contact.html?project=${encodeURIComponent(project.name)}" class="btn btn-secondary btn-sm" title="Quick Enquiry">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
    </article>
  `;
}

// Initialization for Listing & Details Pages
document.addEventListener('DOMContentLoaded', () => {
  // 1. PROJECTS LISTING PAGE INITIALIZATION
  const projectsGrid = document.getElementById('all-projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (projectsGrid) {
    // Render initial cards
    projectsGrid.innerHTML = WELLINGTON_PROJECTS.map(createProjectCardHtml).join('');

    // Filtering logic
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const cards  = projectsGrid.querySelectorAll('.project-card');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          const status   = card.getAttribute('data-status');
          let show = false;

          if (filter === 'all') {
            show = true;
          } else if (['apartments','villas','plots','commercial','residential','construction'].includes(filter)) {
            show = category === filter;
          } else if (['completed','ongoing','upcoming'].includes(filter)) {
            show = status === filter;
          }

          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // 2. FEATURED PROJECTS ON HOME PAGE
  const featuredGrid = document.getElementById('featured-projects-grid');
  if (featuredGrid) {
    featuredGrid.innerHTML = WELLINGTON_PROJECTS
      .filter(project => project.featuredOnHome)
      .map(createProjectCardHtml)
      .join('');

  }

  // 3. PROJECT DETAILS PAGE LOGIC
  const detailContainer = document.getElementById('project-detail-content');
  if (detailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = WELLINGTON_PROJECTS.find(p => p.id === projectId) || WELLINGTON_PROJECTS[0];

    // Populate document title and meta
    document.title = `${project.name} | Wellington Builders Coimbatore`;

    // Render Details
    detailContainer.innerHTML = `
      <!-- Hero Banner -->
      <section class="detail-hero">
        <img src="${project.image}" alt="${project.name}" class="detail-hero-bg" fetchpriority="high" decoding="async">
        <div class="detail-hero-overlay"></div>
        <div class="container detail-hero-content">
          <div class="hero-badge">
            <span class="badge-icon"><i class="fa-solid fa-gem"></i></span>
            <span>${project.categoryName} &bull; ${project.location}</span>
          </div>
          <h1 style="margin-bottom:16px;">${project.name}</h1>
          <p style="max-width:700px; color:#e8d2c4; font-size:1.15rem; margin-bottom:24px;">${project.shortDesc}</p>
          <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
            <span class="project-badge-status ${project.status}" style="position:static;">
              <span class="status-dot"></span>
              ${project.statusLabel}
            </span>
            <span class="placeholder-tag">${project.priceLabel || `[Editable Placeholder: Pricing ${project.price}]`}</span>
          </div>
        </div>
      </section>

      <!-- Main Overview & Specifications -->
      <section style="background:var(--bg-secondary); padding:80px 0;">
        <div class="container">
          <div style="display:grid; grid-template-columns: 1.8fr 1.2fr; gap:50px;">
            <div>
              <div class="section-tag"><span class="tag-dot"></span> Architectural Overview</div>
              <h2 style="margin-bottom:24px;">Project Overview</h2>
              <p style="margin-bottom:24px; font-size:1.1rem; line-height:1.8;">${project.overview}</p>
              <p style="margin-bottom:36px; line-height:1.8;">${project.architecture}</p>
              ${project.projectFacts ? `
                <h3 style="margin-bottom:20px;">Project Details</h3>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(160px, 1fr)); gap:14px; margin-bottom:40px;">
                  ${project.projectFacts.map(fact => `
                    <div style="padding:16px; border:1px solid var(--border-light); border-radius:12px; background:var(--bg-tertiary);">
                      <span style="display:block; margin-bottom:6px; color:var(--text-muted); font-size:0.82rem;">${fact.label}</span>
                      <strong>${fact.value}</strong>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <h3 style="margin-bottom:20px;">Premium Specifications</h3>
              <div style="background:var(--bg-tertiary); border:1px solid var(--border-light); border-radius:12px; padding:28px; margin-bottom:40px;">
                <div style="display:flex; flex-direction:column; gap:16px;">
                  <div>
                    <h5 style="color:var(--color-red); font-family:var(--font-mono); font-size:0.85rem; text-transform:uppercase; margin-bottom:4px;">Structure</h5>
                    <p style="font-size:0.95rem;">${project.specifications.structure}</p>
                  </div>
                  <div>
                    <h5 style="color:var(--color-red); font-family:var(--font-mono); font-size:0.85rem; text-transform:uppercase; margin-bottom:4px;">Flooring</h5>
                    <p style="font-size:0.95rem;">${project.specifications.flooring}</p>
                  </div>
                  <div>
                    <h5 style="color:var(--color-red); font-family:var(--font-mono); font-size:0.85rem; text-transform:uppercase; margin-bottom:4px;">Doors & Windows</h5>
                    <p style="font-size:0.95rem;">${project.specifications.doors}</p>
                  </div>
                  <div>
                    <h5 style="color:var(--color-red); font-family:var(--font-mono); font-size:0.85rem; text-transform:uppercase; margin-bottom:4px;">Plumbing & Sanitary</h5>
                    <p style="font-size:0.95rem;">${project.specifications.plumbing}</p>
                  </div>
                </div>
              </div>

              ${project.floorPlanImg ? `
              <!-- Floor Plan Showcase -->
              <div class="section-tag"><span class="tag-dot"></span> Master Schematics</div>
              <h3 style="margin-bottom:20px;">Architectural Floor Plans</h3>
              <div class="plan-display-box">
                <img src="${project.floorPlanImg}" alt="Floor plan for ${project.name}" class="plan-img">
                <p style="margin-top:16px; font-size:0.88rem; color:var(--text-muted);">
                  Schematic Ground Floor & Upper Level Layout. Detailed structural drawings available upon enquiry.
                </p>
              </div>
              ` : ''}
            </div>

            <!-- Sidebar Enquiry & Project Snapshot -->
            <div>
              <div style="background:var(--bg-tertiary); border:1px solid var(--border-medium); border-radius:16px; padding:36px; position:sticky; top:110px;">
                <h3 style="margin-bottom:8px;">Project Snapshot</h3>
                <p style="font-size:0.9rem; margin-bottom:24px;">Direct from Wellington Builders Sales Desk</p>

                <div style="display:flex; flex-direction:column; gap:14px; margin-bottom:30px; border-bottom:1px solid var(--border-light); padding-bottom:24px;">
                  <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Location</span>
                    <strong style="color:#fff;">${project.location}</strong>
                  </div>
                  <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Category</span>
                    <strong style="color:#fff;">${project.categoryName}</strong>
                  </div>
                  <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Unit Sizes</span>
                    <strong style="color:#fff;">${project.area}</strong>
                  </div>
                  <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Total Units</span>
                    <strong style="color:#fff;">${project.units}</strong>
                  </div>
                  <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Status</span>
                    <strong style="color:var(--color-red);">${project.statusLabel}</strong>
                  </div>
                </div>

                <h4 style="margin-bottom:16px;">Schedule Site Visit & Brochure</h4>
                <form id="detail-enquiry-form">
                  <div class="form-group">
                    <label>Your Name *</label>
                    <input type="text" class="form-control" id="detail-name" placeholder="Enter full name" required>
                  </div>
                  <div class="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" class="form-control" id="detail-phone" placeholder="+91 XXXXX XXXXX" required>
                  </div>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" class="form-control" id="detail-email" placeholder="name@example.com">
                  </div>
                  <input type="hidden" id="detail-project" value="${project.name}">
                  <button type="submit" class="btn btn-primary" style="width:100%; margin-top:10px;">
                    <span>Request Instant Callback</span>
                    <i class="fa-solid fa-paper-plane"></i>
                  </button>
                  <div id="detail-form-success" class="form-success-banner" style="margin-top:16px;">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>Thank you! Our Coimbatore sales team will connect with you shortly.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${project.amenities.length ? `
      <!-- Amenities Section -->
      <section style="background:var(--bg-primary); padding:90px 0;">
        <div class="container">
          <div class="section-header text-center">
            <div class="section-tag"><span class="tag-dot"></span> Lifestyle & Comfort</div>
            <h2>Curated World-Class Amenities</h2>
            <p class="subtitle">Every detail meticulously planned to deliver an unparalleled living experience.</p>
          </div>
          <div class="amenities-grid">
            ${project.amenities.map(a => `
              <div class="amenity-card">
                <i class="fa-solid ${a.icon} amenity-icon"></i>
                <h4 class="amenity-title">${a.name}</h4>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      ` : ''}

      ${project.locationAdvantages.length ? `
      <!-- Location Advantages -->
      <section style="background:var(--bg-secondary); padding:90px 0; border-top:1px solid var(--border-light);">
        <div class="container">
          <div class="section-header">
            <div class="section-tag"><span class="tag-dot"></span> Strategic Connectivity</div>
            <h2>Location Advantages</h2>
            <p style="color:var(--text-muted); font-size:1.05rem;">Situated in high-connectivity Coimbatore nodes with rapid access to key hubs.</p>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:24px;">
            ${project.locationAdvantages.map((adv, idx) => `
              <div style="background:var(--bg-tertiary); border:1px solid var(--border-light); padding:24px; border-radius:12px; display:flex; align-items:flex-start; gap:16px;">
                <span style="font-family:var(--font-mono); color:var(--color-red); font-size:1.2rem; font-weight:700;">0${idx+1}</span>
                <p style="color:var(--text-secondary); margin:0;">${adv}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      ` : ''}
    `;

    // Handle Detail Form Submission
    const detailForm = document.getElementById('detail-enquiry-form');
    const successBanner = document.getElementById('detail-form-success');
    if (detailForm && successBanner) {
      detailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const phone = document.getElementById('detail-phone').value.trim();
        if (phone.length < 8) {
          alert('Please enter a valid phone number');
          return;
        }
        successBanner.classList.add('show');
        detailForm.reset();
      });
    }
  }
});
