// CONTROL DE MENÚ LATERAL 
const btnHamburguesa = document.querySelector('.btn_hamburguesa');
const menuLateral = document.querySelector('.menu_lateral');
const btnDespliegueLat = document.querySelector('.btn_despliegue_lat');
const opcArticulosWidget = document.getElementById("opc_articulos"); 
const opcArticulosMenu = document.getElementById("opcArticulosMenu");

function toggleMenuMovil() {
    // Si estamos en PC, ignorar el evento de la hamburguesa, ya que el menú está siempre visible
    if (window.innerWidth > 1024) return;
    menuLateral.classList.toggle('activo');
}
/* Función para manejar el colapso del menú en PC*/
function toggleMenuDesktop() {
    menuLateral.classList.toggle('colapsado');
    if(menuLateral.classList.contains('colapsado')) {
        menuLateral.classList.remove('activo');
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
// Eventos para las opciones adicionales 
if (opcArticulosWidget) {
    opcArticulosWidget.addEventListener("click", () => mostrarAviso("Sección Artículos habilitada próximamente"));
}
// Funcionalidad para opciones del menú lateral 
const menuOpciones = document.querySelectorAll(".opc_menu");
menuOpciones.forEach(opc => {
    opc.addEventListener("click", (e) => {
        const texto = opc.textContent.trim();
        // Acciones de Proximamete
        if (texto === "Artículos") {
            e.preventDefault();
            mostrarAviso(`Sección "${texto}" habilitada próximamente`);
        }
        // Cerrar el Menu en Movil
        if (window.innerWidth <= 1024 && menuLateral.classList.contains('activo')) {
             toggleMenuMovil();
        }
    });
});
// --- MENÚ DE USUARIO ---
const btnMenuUsuario = document.getElementById('btn_menu_usuario');
const menuUsuarioDropdown = document.getElementById('menu_usuario_desp');
function toggleMenuUsuario() {
    menuUsuarioDropdown.classList.toggle('show');
}
// Alternar visibilidad en el icono
menuUsuarioDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});
btnMenuUsuario.addEventListener('click', (e) => {
    e.stopPropagation(); 
    toggleMenuUsuario();
});
// Ocultar el menú si se hace clic afuera
document.addEventListener('click', (e) => {
    // Si el menú está abierto y el clic fue afuera del menú y el botón
    if (menuUsuarioDropdown.classList.contains('show') && !menuUsuarioDropdown.contains(e.target) && e.target !== btnMenuUsuario) {
    menuUsuarioDropdown.classList.remove('show');
    }
});
// Agregado de "próximamente" a soporte tecnico
const opcionesUsuario = document.querySelectorAll('.opc_soporte');
opcionesUsuario.forEach(opc => {
    opc.addEventListener("click", (e) => {
        e.preventDefault();
         const textoOpcion = opc.querySelector('span').textContent.trim();
        mostrarAviso(`Accediendo a: ${textoOpcion} (Próximamente...)`);
        menuUsuarioDropdown.classList.remove('show');
     });
});
/* ----- FORMULARIO DE SUSCRIPCION ---- */ 
const formSuscripcion = document.getElementById('form_suscripcion');
const inputCorreoSuscripcion = document.getElementById('input_correo_suscripcion');
if (formSuscripcion && inputCorreoSuscripcion) {
    formSuscripcion.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const correoIngresado = inputCorreoSuscripcion.value.trim();
        if (correoIngresado === "") {
            mostrarAviso("Por favor, ingresa tu correo electrónico para suscribirte.");
            return;
        }
        mostrarAviso("Correo enviado exitosamente! Gracias por suscribirte.");
        inputCorreoSuscripcion.value = '';
    });
}