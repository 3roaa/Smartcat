// JavaScript للتفاعل مع تغيير اللغة والوضع الليلي
const toggleLangButton = document.getElementById('toggle-lang');
const toggleThemeButton = document.getElementById('toggle-theme');

// تغيير اللغة
toggleLangButton.addEventListener('click', () => {
  const currentLang = document.documentElement.getAttribute('lang');
  if (currentLang === 'en') {
    document.documentElement.setAttribute('lang', 'ar');
    toggleLangButton.textContent = 'EN';
  } else {
    document.documentElement.setAttribute('lang', 'en');
    toggleLangButton.textContent = 'AR';
  }
});

// تغيير الوضع الليلي
toggleThemeButton.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'light');
    toggleThemeButton.textContent = '🌙';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    toggleThemeButton.textContent = '🌞';
  }
});
