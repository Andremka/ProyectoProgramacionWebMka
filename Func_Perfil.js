document.addEventListener('DOMContentLoaded', function() {
    //  DATOS SIMULADOS DE LOS PROGRESOS TECNICOS Y TACTICOS
    const datosProgreso = {
        tecnica: 45, 
        tactica: 100  
    };
    // ---- GUARDADO y REINICIO DE FORMULARIOS ----
    // Función para mostrar alerta y resetear los formularios 
    function manejarGuardado(event, formId) {
        // Evita que la página se recargue al enviar los inputs
        event.preventDefault(); 
        alert('Datos guardados correctamente.');
        const form = document.getElementById(formId);
        if (form) {
            form.reset(); 
        }
    }
    // Asignacio de eventos a los botones de guardado
    const btnDatos = document.getElementById('btnGuardarDatos');
    const btnCuenta = document.getElementById('btnGuardarCuenta');
    if (btnDatos) {
        btnDatos.addEventListener('click', function(event) {
            manejarGuardado(event, 'formDatosPersonales');
        });
    }
    if (btnCuenta) {
        btnCuenta.addEventListener('click', function(event) {
            manejarGuardado(event, 'formCuenta');
        });
    }
    // ----  Animación de Barras y Logros  -----
    // elementos de la barra Técnica 
    const rellenoTecnica = document.getElementById('rellenoTecnica');
    const porcentajeTecnica = document.getElementById('porcentajeTecnica');
    const logroTecnicoIcon = document.getElementById('logroTecnicoIcon'); 
    // elementos de la barra Táctica 
    const rellenoTactica = document.getElementById('rellenoTactica');
    const porcentajeTactica = document.getElementById('porcentajeTactica');
    const logroTacticoIcon = document.getElementById('logroTacticoIcon');
    // Función para animar la barra y verificar el logro
    function animarBarra(rellenoElemento, porcentajeElemento, valor, logroIcono) {
        //llenado de la barra de progreso
        rellenoElemento.style.width = valor + '%';
        // Cambio a %
        porcentajeElemento.textContent = valor + '%';
        // Verifica si el logro esta al 100%
        if (valor >= 100) {
            logroIcono.classList.add('logro_desbloqueado');
            logroIcono.classList.remove('logro_pendiente');
        } else {
            logroIcono.classList.add('logro_pendiente');
            logroIcono.classList.remove('logro_desbloqueado');
        }
    }
    // verificación al cargar la página
    if (rellenoTecnica && porcentajeTecnica && logroTecnicoIcon) {
        animarBarra(rellenoTecnica, porcentajeTecnica, datosProgreso.tecnica, logroTecnicoIcon);
    }
    if (rellenoTactica && porcentajeTactica && logroTacticoIcon) {
        animarBarra(rellenoTactica, porcentajeTactica, datosProgreso.tactica, logroTacticoIcon);
    }
});