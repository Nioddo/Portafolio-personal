const hb = document.getElementById('hb');
const menu = document.getElementById('menu');

hb.addEventListener('click', () => {
    menu.classList.toggle('abierto');
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abierto');
    });
});

const form = document.getElementById('form');
form.addEventListener('submit', () => {
    const btn = form.querySelector('button');
    btn.textContent = 'Enviando...';
    btn.disabled = true;
});

// Header transparente que aparece al hacer scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

