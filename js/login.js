/* INICIO DE SESIÓN ADMINISTRATIVO DE DEMOSTRACIÓN */
function iniciarSesionAdmin() {
    var correo = document.getElementById('correo-admin').value;
    var clave = document.getElementById('clave-admin').value;

    if (correo === 'admin@pasteleria.cl' && clave === 'admin123') {
        window.location.href = '../admin/index.html';
    } else {
        alert('Correo o contraseña incorrectos.');
    }
}

/* RELLENA LOS DATOS DEL USUARIO DE PRUEBA */
function cargarUsuarioPrueba() {
    document.getElementById('correo-admin').value = 'admin@pasteleria.cl';
    document.getElementById('clave-admin').value = 'admin123';
}

/* REVISA LOS CAMPOS OBLIGATORIOS DEL REGISTRO */
function registrarUsuario() {
    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var region = document.getElementById('region').value;
    var edad = document.getElementById('edad').value;

    if (nombre === '' || correo === '' || telefono === '' ||
        direccion === '' || region === '' || edad === '') {
        alert('Falta rellenar los campos obligatorios.');
        return;
    }

    alert('¡Gracias por registrarte con nosotros!');
    document.getElementById('formulario-registro').reset();
}
