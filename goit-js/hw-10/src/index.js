import './styles.css';
import menu from './menu.json';
import menuItem from './menu.hbs';

const menuUl = document.querySelector('.js-menu')
// menuUl.innerHTML()

function createMenuList(list) {
    
}
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const input = document.querySelector('#theme-switch-control');
const bodyTheme = document.body;
let currentTheme = localStorage.getItem('theme');

const checkBox = document.querySelector('input[tupe = "checkBox"]')
input.addEventListener('click', clickEvent)

 if (currentTheme === DARK) {
     bodyTheme.classList.add('dark-theme');
     checkBox.checked = true;
 }else{
     bodyTheme.classList.add('light-theme');
     checkBox.checked = false;
 }

// bodyTheme.classList.add('light-theme');

function clickEvent(e) {
    if (bodyTheme.classList.contains('light-theme')) {
        bodyTheme.classList.remove('light-theme');
        bodyTheme.classList.add('dark-theme');
        localStorage.setItem('Theme', 'DARK')
    }else{
        bodyTheme.classList.remove('dark-theme');
        bodyTheme.classList.add('light-theme');
        localStorage.setItem('Theme', 'LIGHT')
    }
}

localStorage.getItem('Theme')