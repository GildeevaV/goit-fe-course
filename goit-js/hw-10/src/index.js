import './styles.css';
import menu from './menu.json';
import menuItem from './menu.hbs';

const menuUl = document.querySelector('.js-menu');

function createMenuList(menu) {
  const items = menu.map(menu => menuItem(menu)).join('');
  menuUl.insertAdjacentHTML('beforeend', items);
}

createMenuList(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const input = document.getElementById('theme-switch-control');
const pageTheme = document.body;
const currentTheme = localStorage.getItem('Theme');

const checkBox = document.querySelector('input[type="checkbox"]');
input.addEventListener('click', clickEvent);

if (currentTheme === 'DARK') {
  pageTheme.classList.add('dark-theme');
  checkBox.checked = true;
} else {
  pageTheme.classList.add('light-theme');
  checkBox.checked = false;
}

function clickEvent(e) {
  if (pageTheme.classList.contains('light-theme')) {
    pageTheme.classList.remove('light-theme');
    pageTheme.classList.add('dark-theme');
    localStorage.setItem('Theme', 'DARK');
  } else {
    pageTheme.classList.remove('dark-theme');
    pageTheme.classList.add('light-theme');
    localStorage.setItem('Theme', 'LIGHT');
  }
}

localStorage.getItem('Theme');
