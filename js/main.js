// Language switching functionality
function changeLanguage(lang) {
  // Update the html lang attribute
  document.documentElement.lang = lang;
  
  // Update all language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    // Get the language from the button's onclick attribute
    const btnLang = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
    btn.classList.remove('active');
    if (btnLang === lang) {
      btn.classList.add('active');
    }
  });

  // Update all translatable elements
  document.querySelectorAll(`[data-${lang}]`).forEach(element => {
    element.textContent = element.getAttribute(`data-${lang}`);
  });

  // Store the language preference
  localStorage.setItem('preferred-language', lang);
}

// Set initial language based on stored preference or default to Japanese
document.addEventListener('DOMContentLoaded', () => {
  const storedLang = localStorage.getItem('preferred-language') || 'en';
  changeLanguage(storedLang);
});