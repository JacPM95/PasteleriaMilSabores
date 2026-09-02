/* DATOS Y FUNCIONES BÁSICAS DEL ADMINISTRADOR */

var usuariosIniciales = [
    { id: 1, nombre: 'Ana Torres', correo: 'ana@ejemplo.cl', rol: 'Cliente' },
    { id: 2, nombre: 'Luis Soto', correo: 'luis@ejemplo.cl', rol: 'Cliente' },
    { id: 3, nombre: 'Administrador', correo: 'admin@pasteleria.cl', rol: 'Administrador' }
];

function obtenerProductosAdmin() {
    var guardados = localStorage.getItem('productosAdmin');
    if (guardados) {
        return JSON.parse(guardados);
    }

    localStorage.setItem('productosAdmin', JSON.stringify(productos));
    return productos;
}

function guardarProductosAdmin(lista) {
    localStorage.setItem('productosAdmin', JSON.stringify(lista));
}

function obtenerUsuarios() {
    var guardados = localStorage.getItem('usuariosAdmin');
    if (guardados) {
        return JSON.parse(guardados);
    }

    localStorage.setItem('usuariosAdmin', JSON.stringify(usuariosIniciales));
    return usuariosIniciales;
}

function guardarUsuarios(lista) {
    localStorage.setItem('usuariosAdmin', JSON.stringify(lista));
}

function obtenerParametro(nombre) {
    var parametros = new URLSearchParams(window.location.search);
    return parametros.get(nombre);
}

function mostrarListaProductos() {
    var cuerpo = document.getElementById('lista-productos-admin');
    if (!cuerpo) return;

    var lista = obtenerProductosAdmin();
    cuerpo.innerHTML = '';

    for (var i = 0; i < lista.length; i++) {
        var producto = lista[i];
        cuerpo.innerHTML += '<tr>' +
            '<td>' + producto.codigo + '</td>' +
            '<td>' + producto.nombre + '</td>' +
            '<td>$' + Number(producto.precio).toLocaleString('es-CL') + '</td>' +
            '<td>' +
                '<a href="ver-producto.html?codigo=' + producto.codigo + '">Ver</a>' +
                '<a href="editar-producto.html?codigo=' + producto.codigo + '">Editar</a>' +
            '</td>' +
        '</tr>';
    }
}

function guardarNuevoProducto() {
    var lista = obtenerProductosAdmin();
    var codigo = document.getElementById('codigo').value.trim();

    if (codigo === '' || document.getElementById('nombre').value.trim() === '') {
        alert('Completa el código y el nombre.');
        return;
    }

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].codigo === codigo) {
            alert('Ese código ya existe.');
            return;
        }
    }

    lista.push({
        codigo: codigo,
        nombre: document.getElementById('nombre').value,
        categoria: document.getElementById('categoria').value,
        precio: Number(document.getElementById('precio').value),
        desc: document.getElementById('descripcion').value,
        imagen: document.getElementById('imagen').value || 'logo.png'
    });

    guardarProductosAdmin(lista);
    alert('Producto guardado correctamente.');
    window.location.href = 'productos.html';
}

function cargarProducto() {
    var codigo = obtenerParametro('codigo');
    var lista = obtenerProductosAdmin();
    var producto = null;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].codigo === codigo) producto = lista[i];
    }

    if (!producto) return;

    if (document.getElementById('codigo')) document.getElementById('codigo').value = producto.codigo;
    if (document.getElementById('nombre')) document.getElementById('nombre').value = producto.nombre;
    if (document.getElementById('categoria')) document.getElementById('categoria').value = producto.categoria;
    if (document.getElementById('precio')) document.getElementById('precio').value = producto.precio;
    if (document.getElementById('descripcion')) document.getElementById('descripcion').value = producto.desc;
    if (document.getElementById('imagen')) document.getElementById('imagen').value = producto.imagen;

    var detalle = document.getElementById('detalle-producto');
    if (detalle) {
        detalle.innerHTML = '<h2>' + producto.nombre + '</h2>' +
            '<p><strong>Código:</strong> ' + producto.codigo + '</p>' +
            '<p><strong>Categoría:</strong> ' + producto.categoria + '</p>' +
            '<p><strong>Precio:</strong> $' + Number(producto.precio).toLocaleString('es-CL') + '</p>' +
            '<p><strong>Descripción:</strong> ' + producto.desc + '</p>';
    }
}

function editarProducto() {
    var codigo = obtenerParametro('codigo');
    var lista = obtenerProductosAdmin();

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].codigo === codigo) {
            lista[i].nombre = document.getElementById('nombre').value;
            lista[i].categoria = document.getElementById('categoria').value;
            lista[i].precio = Number(document.getElementById('precio').value);
            lista[i].desc = document.getElementById('descripcion').value;
            lista[i].imagen = document.getElementById('imagen').value;
        }
    }

    guardarProductosAdmin(lista);
    alert('Producto actualizado correctamente.');
    window.location.href = 'productos.html';
}

function mostrarListaUsuarios() {
    var cuerpo = document.getElementById('lista-usuarios-admin');
    if (!cuerpo) return;

    var lista = obtenerUsuarios();
    cuerpo.innerHTML = '';

    for (var i = 0; i < lista.length; i++) {
        var usuario = lista[i];
        cuerpo.innerHTML += '<tr>' +
            '<td>' + usuario.id + '</td>' +
            '<td>' + usuario.nombre + '</td>' +
            '<td>' + usuario.correo + '</td>' +
            '<td>' + usuario.rol + '</td>' +
            '<td>' +
                '<a href="ver-usuario.html?id=' + usuario.id + '">Ver</a>' +
                '<a href="editar-usuario.html?id=' + usuario.id + '">Editar</a>' +
            '</td>' +
        '</tr>';
    }
}

function guardarNuevoUsuario() {
    var lista = obtenerUsuarios();
    var nuevoId = lista.length + 1;

    lista.push({
        id: nuevoId,
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        rol: document.getElementById('rol').value
    });

    guardarUsuarios(lista);
    alert('Usuario guardado correctamente.');
    window.location.href = 'usuarios.html';
}

function cargarUsuario() {
    var id = Number(obtenerParametro('id'));
    var lista = obtenerUsuarios();
    var usuario = null;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) usuario = lista[i];
    }

    if (!usuario) return;

    if (document.getElementById('nombre')) document.getElementById('nombre').value = usuario.nombre;
    if (document.getElementById('correo')) document.getElementById('correo').value = usuario.correo;
    if (document.getElementById('rol')) document.getElementById('rol').value = usuario.rol;

    var detalle = document.getElementById('detalle-usuario');
    if (detalle) {
        detalle.innerHTML = '<h2>' + usuario.nombre + '</h2>' +
            '<p><strong>ID:</strong> ' + usuario.id + '</p>' +
            '<p><strong>Correo:</strong> ' + usuario.correo + '</p>' +
            '<p><strong>Rol:</strong> ' + usuario.rol + '</p>';
    }
}

function editarUsuario() {
    var id = Number(obtenerParametro('id'));
    var lista = obtenerUsuarios();

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].nombre = document.getElementById('nombre').value;
            lista[i].correo = document.getElementById('correo').value;
            lista[i].rol = document.getElementById('rol').value;
        }
    }

    guardarUsuarios(lista);
    alert('Usuario actualizado correctamente.');
    window.location.href = 'usuarios.html';
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarListaProductos();
    mostrarListaUsuarios();
    cargarProducto();
    cargarUsuario();
});
