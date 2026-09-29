// =========================================================
// Theme switching (light / dark) — persisted per browser
// =========================================================
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY = 'portfolio-theme';

const applyTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
  themeToggle.setAttribute('aria-pressed', theme === 'dark');
};

const savedTheme = localStorage.getItem(THEME_KEY);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

// =========================================================
// Project filtering
// =========================================================
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const projectCards = [...document.querySelectorAll('.project-card')];
const noResults = document.getElementById('noResults');

const filterProjects = (category) => {
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const matches = category === 'all' || card.dataset.category === category;
    card.classList.toggle('d-none', !matches);
    if (matches) visibleCount += 1;
  });

  noResults.classList.toggle('d-none', visibleCount !== 0);
};

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    filterProjects(btn.dataset.filter);
  });
});

// =========================================================
// Contact form validation
// =========================================================
const form = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

const fields = {
  name: {
    input: document.getElementById('cf-name'),
    error: document.getElementById('err-name'),
    validate: (value) => value.trim().length >= 2,
    message: 'Please enter your name (at least 2 characters).',
  },
  email: {
    input: document.getElementById('cf-email'),
    error: document.getElementById('err-email'),
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    message: 'Please enter a valid email address.',
  },
  message: {
    input: document.getElementById('cf-message'),
    error: document.getElementById('err-message'),
    validate: (value) => value.trim().length >= 10,
    message: 'Message should be at least 10 characters long.',
  },
};

const showAlert = (text, type) => {
  formAlert.textContent = text;
  formAlert.className = `alert alert-${type}`;
};

const validateField = (field) => {
  const value = field.input.value;
  const isValid = field.validate(value);
  field.input.classList.toggle('is-invalid', !isValid);
  field.error.textContent = isValid ? '' : field.message;
  return isValid;
};

Object.values(fields).forEach((field) => {
  field.input.addEventListener('input', () => validateField(field));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const results = Object.values(fields).map(validateField);
  const allValid = results.every(Boolean);

  if (!allValid) {
    showAlert('Please fix the highlighted fields before sending.', 'danger');
    formAlert.classList.remove('d-none');
    return;
  }

  const name = fields.name.input.value.trim();
  showAlert(`Thanks, ${name}! Your message has been noted — I'll get back to you soon.`, 'success');
  formAlert.classList.remove('d-none');
  form.reset();
  Object.values(fields).forEach((field) => field.input.classList.remove('is-invalid'));
});

// =========================================================
// Misc
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();
