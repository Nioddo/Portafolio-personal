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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'Enviado';
    btn.style.background = '#16a34a';
    setTimeout(() => {
        btn.textContent = 'Enviar';
        btn.style.background = '';
        form.reset();
    }, 3000);
});

