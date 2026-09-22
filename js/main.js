const initializeTheme = () => {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;

  const applyTheme = (isLight) => {
    document.body.classList.toggle('light-theme', isLight);
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
    document.documentElement.style.colorScheme = isLight ? 'light' : 'dark';
    themeToggle.textContent = isLight ? '☀' : '☾';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    themeToggle.setAttribute('aria-pressed', String(isLight));
  };

  applyTheme(localStorage.getItem('theme') === 'light');
  themeToggle.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    applyTheme(isLight);
  });
};

const initializeProjectFilters = () => {
  const filterButtons = document.querySelectorAll('.filter');
  const projects = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      projects.forEach((project) => {
        project.hidden = filter !== 'all' && project.dataset.category !== filter;
      });
    });
  });
};

const initializeGlobalEvents = () => {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
};

initializeTheme();
initializeProjectFilters();
initializeGlobalEvents();
