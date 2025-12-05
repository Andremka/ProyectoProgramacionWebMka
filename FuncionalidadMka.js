//MENU HAMBURGUESA
const btnHamburguesa = document.querySelector('.btn_hamburguesa');
const menuLateral = document.querySelector('.menu_lateral');
const opacidad = document.querySelector('.opacidad_menu_lateral');
const body = document.body;

btnHamburguesa.addEventListener('click', () => {
    menuLateral.classList.toggle('activo');
    opacidad.classList.toggle('activo');

    if(menuLateral.classList.contains('activo')){
        btnHamburguesa.classList.add('oculto');
    } else {
        btnHamburguesa.classList.remove('oculto');
    }
});

opacidad.addEventListener('click', () => {
    menuLateral.classList.remove('activo');
    opacidad.classList.remove('activo');
    btnHamburguesa.classList.remove('oculto');
});

// LISTA DE CONTENIDOS 
function mostrarContenido(idContenido) {
    const contenidos = document.querySelectorAll('.contenido_detalle');
    contenidos.forEach(c => c.classList.remove('activo'));

    const contenidoSeleccionado = document.getElementById(idContenido);
    if (contenidoSeleccionado) contenidoSeleccionado.classList.add('activo');
}
// AVISO DE "PRÓXIMAMENTE"
function mostrarAviso() {
    const aviso = document.querySelector(".aviso_prox");

    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");
    }, 2000);
}

// FUNCIONALIDAD PARA LAS OPCIONES ADICIONALES DEL MAIN
document.getElementById("opc_articulos").addEventListener("click", mostrarAviso);
document.getElementById("opc_progreso").addEventListener("click", mostrarAviso);
document.getElementById("opc_logros").addEventListener("click", mostrarAviso);

// FUNCIONALIDAD PARA EL MENU LATERAL
const menuOpciones = document.querySelectorAll(".opc_menu");

menuOpciones.forEach(opc => {
    opc.addEventListener("click", (e) => {

        const texto = opc.textContent.trim();

        if (texto === "Artículos" || texto === "Progreso" || texto === "Logros") {
            e.preventDefault();
            mostrarAviso();
        }

        menuLateral.classList.remove("activo");
        opacidad.classList.remove("activo");
        btnHamburguesa.classList.remove("oculto");
    });
});
