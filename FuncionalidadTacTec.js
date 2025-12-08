// LISTA DE CONTENIDOS
function mostrarContenido(idContenido) {
    const contenidos = document.querySelectorAll('.contenido_detalle');
    contenidos.forEach(c => c.classList.remove('activo'));

    const contenidoSeleccionado = document.getElementById(idContenido);
    if (contenidoSeleccionado) contenidoSeleccionado.classList.add('activo');
}