// CONTROL DE MENÚ LATERAL 
const btnHamburguesa = document.querySelector('.btn_hamburguesa');
const menuLateral = document.querySelector('.menu_lateral');
const btnDespliegueLat = document.querySelector('.btn_despliegue_lat'); 

function toggleMenuMovil() {
    // Si estamos en PC, ignorar el evento de la hamburguesa, ya que el menú está siempre visible
    if (window.innerWidth > 1024) return;
    menuLateral.classList.toggle('activo');
    // Ocultar/mostrar hamburguesa para evitar doble clic o interferencia
    if(menuLateral.classList.contains('activo')){
        btnHamburguesa.classList.add('oculto');
    } else {
        btnHamburguesa.classList.remove('oculto');
    }
}
/* Función para manejar el colapso del menú en PC*/
function toggleMenuDesktop() {
    menuLateral.classList.toggle('colapsado');
    if(menuLateral.classList.contains('colapsado')) {
        menuLateral.classList.remove('activo');
        btnHamburguesa.classList.remove('oculto'); 
    }
}
// Eventos del Menú
btnHamburguesa.addEventListener('click', toggleMenuMovil);
// Evento para el botón de colapso lateral 
btnDespliegueLat.addEventListener('click', toggleMenuDesktop); 
// AVISO DE PRÓXIMAMENTE
function mostrarAviso(mensaje = "Sección habilitada próximamente") {
    const aviso = document.querySelector(".aviso_prox");
    const avisoP = aviso.querySelector("p");
    if (avisoP) {
        avisoP.textContent = mensaje;
    }
    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");
    }, 2000);
} 
// Eventos para las opciones adicionales (Widgets)
document.getElementById("opc_articulos").addEventListener("click", () => mostrarAviso("Seccion Habilitada Proximamente..."));
document.getElementById("opc_progreso").addEventListener("click", () => mostrarAviso("Seccion Habilitada Proximamente..."));
document.getElementById("opc_logros").addEventListener("click", () => mostrarAviso("Seccion Habilitada Proximamente..."));
// Funcionalidad para iconos de la barra superior 
document.querySelector(".icono_notificaciones").addEventListener("click", () => mostrarAviso("Revisando notificaciones..."));
document.querySelector(".icn_usuario").addEventListener("click", () => mostrarAviso("Menú de usuario (Perfil y Salir) en desarrollo."));
// Funcionalidad para opciones del menú lateral 
const menuOpciones = document.querySelectorAll(".opc_menu");
menuOpciones.forEach(opc => {
    opc.addEventListener("click", (e) => {
        const texto = opc.textContent.trim();
        // Acciones de Proximamete
        if (texto === "Artículos" || texto === "Progreso" || texto === "Logros") {
            e.preventDefault();
            mostrarAviso(`Sección "${texto}" habilitada próximamente`);
        }
        // Cerrar el Menu en Movil
        if (window.innerWidth <= 1024 && menuLateral.classList.contains('activo')) {
             toggleMenuMovil();
        }
    });
});