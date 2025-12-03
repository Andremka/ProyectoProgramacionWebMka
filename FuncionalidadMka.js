const btnHamburguesa = document.querySelector('.btn_hamburguesa');
const menuLateral = document.querySelector('.menu_lateral');
const opacidad = document.querySelector('.opacidad_menu_lateral');
const body = document.body;

btnHamburguesa.addEventListener('click', () => {
    menuLateral.classList.toggle('activo');
    menuLateral.classList.toggle('oculto');
    opacidad.classList.toggle('activo');
    body.classList.toggle('menu_abierto');
});

opacidad.addEventListener('click', () => {
    menuLateral.classList.remove('activo');
    menuLateral.classList.add('oculto');
    opacidad.classList.remove('activo');
    body.classList.remove('menu_abierto');
});