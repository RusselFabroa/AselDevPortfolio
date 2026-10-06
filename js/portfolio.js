'use strict';

// Public summaries use the CV, project notes, and owner-confirmed capabilities.
// Workflow diagrams contain no production data or application screenshots.
const projectOverviews = {
  affiliate: {
    category: 'CURRENT PERSONAL PROJECT / AI CONTENT PRODUCTION',
    title: 'Asel Affiliate Studio',
    description: 'An AI-powered content production studio that turns scripts into scene images and exports a complete package of images, scripts, text-to-speech assets, and post ideas.',
    contributions: [
      'Connect scripts with AI-assisted scenario and scene image generation.',
      'Package generated images, scripts, text-to-speech assets, and post ideas for export.',
      'Bring script-to-scene generation and content packaging into one production workflow.'
    ],
    stack: ['AI integration', 'Scene image generation', 'Text-to-speech assets', 'Content export'],
    note: 'Direct video generation is coming soon. The current workflow supports scene generation and content package export.'
  },
  knowledgepipe: {
    category: 'PERSONAL PROJECT / RAG & KNOWLEDGE RETRIEVAL',
    title: 'Asel DX KnowledgePipe',
    description: 'A RAG knowledge preparation and retrieval platform that turns raw documents into clean, traceable, searchable, and governed datasets for AI workflows.',
    contributions: [
      'Build a document pipeline covering ingestion, text extraction, chunking, and quality review.',
      'Support approved, versioned datasets with source traceability and controlled publishing.',
      'Implement hybrid retrieval combining vector, keyword, and fuzzy search, with evaluation tools for reviewing retrieval quality.'
    ],
    stack: ['C# / .NET', 'Blazor', 'PostgreSQL', 'pgvector', 'Hybrid retrieval', 'RAG'],
    note: 'A personal project in continued development, focused on reliable knowledge preparation and retrieval for AI workflows.'
  },
  ams: {
    category: 'TDK PHILIPPINES / INTERNAL ENTERPRISE SYSTEM',
    title: 'Attendance Management System (AMS)',
    description: 'An internal workforce and production attendance platform integrating company RFID, biometric attendance, and production login records with attendance monitoring, manpower allocation, compliance alerts, and automatically generated dashboards.',
    contributions: [
      'Connect attendance and onsite signals from company RFID, biometric systems, and production login records.',
      'Support production allocation, manpower monitoring, and certified operator checks for operational teams.',
      'Build snapshot-backed dashboards, recurring background synchronization, and attendance and compliance reporting.'
    ],
    stack: ['C#', 'ASP.NET Core Blazor Server', 'MudBlazor', 'MySQL', 'Oracle sources', 'Hangfire'],
    note: 'Internal TDK Philippines project. The application, source code, and employee data remain private; this page provides a high-level overview.'
  },
  taps: {
    category: 'TDK PHILIPPINES / INTERNAL ENTERPRISE SYSTEM',
    title: 'TPC Abnormality Prevention System (TAPS)',
    description: 'A centralized abnormality reporting and prevention platform connecting QR-based reporting with department routing, accountable ownership, resolution tracking, and management dashboards. Detect. Report. Resolve. Prevent.',
    contributions: [
      'Build location-based QR reporting and concern routing to responsible teams.',
      'Support case ownership, physical location verification, status history, and resolution review.',
      'Provide management dashboards for response performance, operational visibility, and prevention follow-up.'
    ],
    stack: ['C#', 'Blazor Server', 'MudBlazor', 'PostgreSQL', 'QR workflows', 'ApexCharts'],
    note: 'Internal TDK Philippines project. The application, source code, and operational reports remain private; this page provides a high-level overview.'
  },
  energy: {
    category: 'TDK / REGIONAL AUTOMATION',
    title: 'Energy & facility reporting',
    description: 'Regional automation and digitalization initiatives for Energy and Facility Management across TDK branches in Southeast Asia, coordinated with Japan HQ.',
    contributions: [
      'Build and deploy energy monitoring and reporting tools that support sustainability and cost-efficiency targets.',
      'Coordinate requirements, rollout, and knowledge sharing between Philippines operations and Japan HQ stakeholders.',
      'Drive process visibility through enterprise reporting and digital solutions tracked against energy productivity KPIs.'
    ],
    stack: ['Operational dashboards', 'KPI reporting', 'Workflow automation', 'Tableau'],
    note: 'Internal regional work. Production applications and operational data are not publicly linked.'
  },
  payroll: {
    category: 'INTERACTIVE BUILDERS CORP. / FREELANCE',
    title: 'Payroll & leave management',
    description: 'A Payroll & Leave Management System built for Interactive Builders Corp. in Makati to automate HR workflows.',
    contributions: [
      'Develop the system using PHP Laravel and MySQL.',
      'Implement role-based access control for HR workflows.',
      'Build reporting modules that speed up report generation and improve transparency for HR teams.'
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'Role-based access control'],
    note: 'Client work completed during my July–November 2023 freelance engagements. A public source repository is not linked.'
  },
  events: {
    category: 'FANGIRLASIA CO. / FREELANCE',
    title: 'A home for live events',
    description: 'The official company website for FangirlAsia Co., a K-Pop event management company.',
    contributions: [
      'Develop and launch the official event management website.',
      'Build a responsive, mobile-first interface using Bootstrap.',
      'Create a consistent experience across desktop and mobile screens.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    note: 'Client work completed during my 2023 freelance engagements. Contact me to discuss the implementation.'
  },
  bfar: {
    category: 'BFAR MIMAROPA / INTERNSHIP',
    title: 'Payroll & attendance',
    description: 'A Payroll & Attendance System built during my backend development internship with the Bureau of Fisheries and Aquatic Resources, MIMAROPA.',
    contributions: [
      'Digitize employee records and HR processing.',
      'Build database-driven backend features and optimize SQL queries for responsiveness and data integrity.',
      'Collaborate in an Agile team across frontend and backend tasks.'
    ],
    stack: ['Backend development', 'SQL', 'Database optimization', 'Agile'],
    note: 'Internship work completed from March to June 2023. A public source repository is not linked.'
  }
};

// Navigation stays usable without JavaScript through the noscript fallback.
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMobileMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}
menuToggle.addEventListener('click', () => {
  const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  menuToggle.setAttribute('aria-label', willOpen ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !willOpen;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    closeMobileMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 768px)').addEventListener('change', event => {
  if (event.matches) closeMobileMenu();
});

// Filter actual work; keep result counts available to assistive technology.
const filterButtons = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project');
const projectGroups = document.querySelectorAll('[data-project-group]');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let count = 0;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    projects.forEach(project => {
      project.hidden = filter !== 'all' && project.dataset.category !== filter;
      if (!project.hidden) count += 1;
    });
    projectGroups.forEach(group => {
      group.hidden = !Array.from(group.querySelectorAll('.project')).some(project => !project.hidden);
    });
    const category = filter === 'all' ? 'all' : button.textContent.trim().toLowerCase();
    document.getElementById('project-results').textContent = `Showing ${count} ${category} ${count === 1 ? 'project' : 'projects'}.`;
  });
});

// Native dialog supplies Escape dismissal, a focus trap, and focus restoration.
const projectDialog = document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectOverviews[button.dataset.project];
    if (!project) return;
    document.getElementById('dialog-category').textContent = project.category;
    document.getElementById('dialog-title').textContent = project.title;
    document.getElementById('dialog-description').textContent = project.description;
    document.getElementById('dialog-note').textContent = project.note;
    document.getElementById('dialog-contributions').replaceChildren(...project.contributions.map(contribution => {
      const item = document.createElement('li');
      item.textContent = contribution;
      return item;
    }));
    document.getElementById('dialog-stack').replaceChildren(...project.stack.map(technology => {
      const tag = document.createElement('span');
      tag.textContent = technology;
      return tag;
    }));
    projectDialog.showModal();
    document.body.classList.add('modal-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
projectDialog.addEventListener('click', event => {
  const bounds = projectDialog.getBoundingClientRect();
  if (event.target === projectDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    projectDialog.close();
  }
});

// Feedback covers pending, success, and clipboard failure without a fake form.
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
let copyReset;
copyButton.addEventListener('click', async () => {
  window.clearTimeout(copyReset);
  copyButton.disabled = true;
  copyButton.setAttribute('aria-busy', 'true');
  copyStatus.textContent = 'Copying email address…';
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('fabroa.russel246@gmail.com');
    copyStatus.textContent = 'Email address copied.';
    copyButton.setAttribute('aria-label', 'Email address copied');
    copyButton.querySelector('use').setAttribute('href', '#icon-check');
    copyReset = window.setTimeout(() => {
      copyButton.setAttribute('aria-label', 'Copy email address');
      copyButton.querySelector('use').setAttribute('href', '#icon-copy');
      copyStatus.textContent = '';
    }, 3500);
  } catch {
    copyStatus.textContent = 'Couldn’t copy. Select the email address or click it to get in touch.';
  } finally {
    copyButton.disabled = false;
    copyButton.removeAttribute('aria-busy');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

// Content is visible by default. Motion enhances it rather than gating it.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!reducedMotion.matches) entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

  const navLinks = document.querySelectorAll('.desktop-nav a');
  const sectionObserver = new IntersectionObserver(entries => {
    const active = entries.filter(entry => entry.isIntersecting).sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
    if (!active) return;
    navLinks.forEach(link => {
      if (link.hash === `#${active.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}
