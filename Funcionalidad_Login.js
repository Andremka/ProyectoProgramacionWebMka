document.addEventListener('DOMContentLoaded', function() {
    const formularioLogin = document.getElementById('form_inicio_sesion');
    const inputCorreo = document.getElementById('correo_electronico');
    const inputContrasena = document.getElementById('contrasena');
    // Función para mostrar alertas temporales 
    function mostrarAviso(mensaje) {
        alert(mensaje);
    }
    if (formularioLogin) {
        formularioLogin.addEventListener('submit', function(event) {
            // Prevenir el envío estándar del formulario
            event.preventDefault(); 
            const correo = inputCorreo.value.trim();
            const contrasena = inputContrasena.value.trim();
            // LÓGICA DE VALIDACIÓN          
            if (correo === "" || contrasena === "") {
                mostrarAviso("Por favor, completa ambos campos para iniciar sesión.");
                return; // Detiene la ejecución si hay campos vacíos
            }
            // SIMULACIÓN DE AUTENTICACIÓN           
            window.location.href = "index.html";   
        });
    } else {
        console.error("No se encontró el formulario de inicio de sesión con el ID 'form_inicio_sesion'.");
    }
});