// selector
const themeToggleBtn = document.querySelector('.darkModeButton');

// state
const theme = localStorage.getItem('theme');

// on mount
theme && document.body.classList.add(theme);

// handlers
handleThemeToggle = () => {
    document.body.classList.toggle('darkMode');
    if (document.body.classList.contains('darkMode')) {
    localStorage.setItem('theme', 'darkMode');
    } else {
        localStorage.removeItem('theme');
    }
};

// events
themeToggleBtn.addEventListener('click', handleThemeToggle);