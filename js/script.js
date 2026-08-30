// BASE DE DATOS COMPLETA DE PRODUCTOS CON DESCRIPCIONES OFICIALES
var productos = [
    { 
        codigo: 'TC001', 
        categoria: 'Tortas Cuadradas', 
        nombre: 'Torta Cuadrada de Chocolate', 
        precio: 45000, 
        desc: 'Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.', 
        imagen: 'Torta_Cuadrada_Chocolate.jpeg' 
    },
    { 
        codigo: 'TC002', 
        categoria: 'Tortas Cuadradas', 
        nombre: 'Torta Cuadrada de Frutas', 
        precio: 50000, 
        desc: 'Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.', 
        imagen: 'Torta_Cuadrada_de_Frutas.jpeg' 
    },
    { 
        codigo: 'TT001', 
        categoria: 'Tortas Circulares', 
        nombre: 'Torta Circular de Vainilla', 
        precio: 40000, 
        desc: 'Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.', 
        imagen: 'Torta_Ciscular_de_Vainilla.jpeg' 
    },
    { 
        codigo: 'TT002', 
        categoria: 'Tortas Circulares', 
        nombre: 'Torta Circular de Manjar', 
        precio: 42000, 
        desc: 'Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.', 
        imagen: 'Torta_Circular_de_Manjar.jpeg' 
    },
    { 
        codigo: 'PI001', 
        categoria: 'Postres Individuales', 
        nombre: 'Mousse de Chocolate', 
        precio: 5000, 
        desc: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.', 
        imagen: 'Mouse_de_Chocolate.jpeg' 
    },
    { 
        codigo: 'PI002', 
        categoria: 'Postres Individuales', 
        nombre: 'Tiramisú Clásico', 
        precio: 5500, 
        desc: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.', 
        imagen: 'Tiramisu_Clasico.jpeg' 
    },
    { 
        codigo: 'PSA001', 
        categoria: 'Productos Sin Azúcar', 
        nombre: 'Torta Sin Azúcar de Naranja', 
        precio: 48000, 
        desc: 'Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.', 
        imagen: 'Torta_Sin_Azuca_de_Naranja.jpeg' 
    },
    { 
        codigo: 'PSA002', 
        categoria: 'Productos Sin Azúcar', 
        nombre: 'Cheesecake Sin Azúcar', 
        precio: 47000, 
        desc: 'Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.', 
        imagen: 'Cheesecake_Sin_Azucar.jpeg' 
    },
    { 
        codigo: 'PT001', 
        categoria: 'Pastelería Tradicional', 
        nombre: 'Empanada de Manzana', 
        precio: 3000, 
        desc: 'Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.', 
        imagen: 'Empanada_de_Manzana.jpeg' 
    },
    { 
        codigo: 'PT002', 
        categoria: 'Pastelería Tradicional', 
        nombre: 'Tarta de Santiago', 
        precio: 6000, 
        desc: 'Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.', 
        imagen: 'Tarta_de_Santiago.jpeg' 
    },
    { 
        codigo: 'PG001', 
        categoria: 'Productos sin gluten', 
        nombre: 'Brownie Sin Gluten', 
        precio: 4000, 
        desc: 'Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.', 
        imagen: 'Brownie_Sin_Gluten.jpeg' 
    },
    { 
        codigo: 'PG002', 
        categoria: 'Productos sin gluten', 
        nombre: 'Pan Sin Gluten', 
        precio: 3500, 
        desc: 'Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.', 
        imagen: 'Pan_Sin_Gluten.jpeg' 
    },
    { 
        codigo: 'PV001', 
        categoria: 'Productos Vegana', 
        nombre: 'Torta Vegana de Chocolate', 
        precio: 50000, 
        desc: 'Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.', 
        imagen: 'Torta_Vegana_Chocolate.jpeg' 
    },
    { 
        codigo: 'PV002', 
        categoria: 'Productos Vegana', 
        nombre: 'Galletas Veganas de Avena', 
        precio: 4500, 
        desc: 'Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.', 
        imagen: 'Galletas_Veganas_Avena.jpeg' 
    },
    { 
        codigo: 'TE001', 
        categoria: 'Tortas Especiales', 
        nombre: 'Torta Especial de Cumpleaños', 
        precio: 5500, 
        desc: 'Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.', 
        imagen: 'Torta_Especial_Cumpleanos.jpeg' 
    },
    { 
        codigo: 'TE002', 
        categoria: 'Tortas Especiales', 
        nombre: 'Torta Especial de Boda', 
        precio: 60000, 
        desc: 'Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.', 
        imagen: 'Torta_Especial_Boda.jpeg' 
    }
];

// OBTENER O INICIALIZAR EL CARRITO EN LOCALSTORAGE
var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

window.onload = function() {
    actualizarCantidadCarrito();

    if (document.getElementById('grid-productos')) {
        mostrarProductos(productos);
    }

    if (document.getElementById('contenedor-carrito')) {
        mostrarCarrito();
    }
};

// AJUSTE DINÁMICO DE RUTA DE IMÁGENES SEGÚN LA PÁGINA DÓNDE SE CARGUE
function obtenerRutaImagen(nombreImagen) {
    var esPaginaInterna = window.location.pathname.includes('/pages/');
    return (esPaginaInterna ? '../img/' : 'img/') + nombreImagen;
}

// DIBUJA LAS TARJETAS DE PRODUCTO EN EL CATÁLOGO
function mostrarProductos(lista) {
    var contenedor = document.getElementById('grid-productos');
    if (!contenedor) return;
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">No se encontraron productos.</p>';
        return;
    }

    for (var i = 0; i < lista.length; i++) {
        var p = lista[i];
        var rutaImg = obtenerRutaImagen(p.imagen);

        contenedor.innerHTML += 
            '<div class="producto-card">' +
                '<div class="img-container">' +
                    '<img src="' + rutaImg + '" alt="' + p.nombre + '" class="img-producto">' +
                '</div>' +
                '<h3>' + p.nombre + '</h3>' +
                '<p class="categoria"><strong>Categoría:</strong> ' + p.categoria + '</p>' +
                '<p class="desc-corta">' + p.desc + '</p>' +
                '<div class="opcion-tamano">' +
                    '<label><small>Tamaño:</small></label> ' +
                    '<select id="tamano-' + p.codigo + '">' +
                        '<option value="Pequeña (6-8 porciones)">Pequeña</option>' +
                        '<option value="Mediana (12-15 porciones)" selected>Mediana</option>' +
                        '<option value="Grande (20-25 porciones)">Grande</option>' +
                    '</select>' +
                '</div>' +
                '<input type="text" id="msg-' + p.codigo + '" placeholder="Mensaje personalizado" class="input-msg">' +
                '<div class="precio">$' + p.precio.toLocaleString('es-CL') + ' CLP</div>' +
                '<button class="btn" onclick="agregarAlCarrito(\'' + p.codigo + '\')">Agregar al Carrito</button>' +
            '</div>';
    }
}

// BÚSQUEDA Y FILTRADO DE PRODUCTOS
function buscar() {
    var texto = document.getElementById('buscar-input') ? document.getElementById('buscar-input').value.toLowerCase() : '';
    var categoria = document.getElementById('categoria-select') ? document.getElementById('categoria-select').value : '';

    var resultado = productos.filter(function(p) {
        var coincideNombre = p.nombre.toLowerCase().indexOf(texto) !== -1;
        var coincideCategoria = (categoria === '' || p.categoria === categoria);
        return coincideNombre && coincideCategoria;
    });

    mostrarProductos(resultado);
}

// AÑADIR PRODUCTO AL CARRITO CON CANTIDAD ACUMULABLE
function agregarAlCarrito(codigo) {
    var tamanoSelect = document.getElementById('tamano-' + codigo);
    var mensajeInput = document.getElementById('msg-' + codigo);
    
    var tamanoElegido = tamanoSelect ? tamanoSelect.value : 'Mediana';
    var mensajeElegido = mensajeInput ? mensajeInput.value : '';

    var p = productos.find(function(item) { return item.codigo === codigo; });

    if (p) {
        var existente = carrito.find(function(item) {
            return item.codigo === p.codigo && item.tamano === tamanoElegido && item.mensaje === mensajeElegido;
        });

        if (existente) {
            existente.cantidad += 1;
        } else {
            var itemCarrito = {
                idUnico: Date.now() + Math.random(),
                codigo: p.codigo,
                nombre: p.nombre,
                precio: Number(p.precio),
                tamano: tamanoElegido,
                mensaje: mensajeElegido,
                cantidad: 1
            };
            carrito.push(itemCarrito);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCantidadCarrito();
        alert('¡' + p.nombre + ' agregado al carrito!');

        if (mensajeInput) mensajeInput.value = '';
    }
}

// ACTUALIZA EL NÚMERO DEL BOTÓN EN EL MENU
function actualizarCantidadCarrito() {
    var contador = document.getElementById('cant-carrito');
    if (contador) {
        var totalUnidades = carrito.reduce(function(acc, item) { return acc + (item.cantidad || 1); }, 0);
        contador.innerText = totalUnidades;
    }
}

// DIBUJA LA LISTA DE DETALLES, SUBTOTALES Y EL TOTAL A PAGAR EN LA PÁGINA CARRITO.HTML
function mostrarCarrito() {
    var contenedor = document.getElementById('contenedor-carrito');
    var elementoTotal = document.getElementById('total-carrito');
    
    if (!contenedor) return;

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p style="color: #777; font-size: 1.1rem; text-align: center; padding: 20px;">Tu carrito está actualmente vacío.</p>';
        if (elementoTotal) elementoTotal.innerText = 'Total a pagar: $0 CLP';
        return;
    }

    var html = '';
    var totalGeneral = 0;

    for (var i = 0; i < carrito.length; i++) {
        var item = carrito[i];
        
        if (!item.cantidad || item.cantidad < 1) item.cantidad = 1;
        if (!item.precio || isNaN(item.precio)) {
            var prodOriginal = productos.find(function(p) { return p.codigo === item.codigo; });
            item.precio = prodOriginal ? prodOriginal.precio : 0;
        }

        var subtotal = item.precio * item.cantidad;
        totalGeneral += subtotal;

        html += '<div style="background: #FFF; border: 1px solid #E0E0E0; border-radius: 10px; padding: 18px 20px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.03); text-align: left;">' +
            '<div>' +
                '<h4 style="margin: 0 0 5px 0; color: #8B4513; font-size: 1.15rem;">' + item.nombre + '</h4>' +
                '<p style="margin: 0; font-size: 0.9rem; color: #666;"><strong>Tamaño:</strong> ' + item.tamano + '</p>' +
                (item.mensaje ? '<p style="margin: 3px 0 0 0; font-size: 0.85rem; color: #888; font-style: italic;"><strong>Mensaje:</strong> "' + item.mensaje + '"</p>' : '') +
                '<p style="margin: 3px 0 0 0; font-size: 0.9rem; color: #5D4037;"><strong>Precio unitario:</strong> $' + item.precio.toLocaleString('es-CL') + ' CLP</p>' +
            '</div>' +
            
            '<div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">' +
                '<div style="display: flex; align-items: center; border: 1px solid #CCC; border-radius: 6px; overflow: hidden; background: #F9F9F9;">' +
                    '<button onclick="cambiarCantidad(' + item.idUnico + ', -1)" style="border: none; background: #E0E0E0; width: 32px; height: 32px; font-size: 1.2rem; cursor: pointer; color: #333; font-weight: bold;">-</button>' +
                    '<span style="padding: 0 14px; font-weight: bold; font-size: 1rem;">' + item.cantidad + '</span>' +
                    '<button onclick="cambiarCantidad(' + item.idUnico + ', 1)" style="border: none; background: #E0E0E0; width: 32px; height: 32px; font-size: 1.2rem; cursor: pointer; color: #333; font-weight: bold;">+</button>' +
                '</div>' +

                '<div style="min-width: 120px; text-align: right;">' +
                    '<span style="display: block; font-size: 0.8rem; color: #777;">Subtotal:</span>' +
                    '<strong style="color: #8B4513; font-size: 1.1rem;">$' + subtotal.toLocaleString('es-CL') + ' CLP</strong>' +
                '</div>' +

                '<button onclick="eliminarDelCarrito(' + item.idUnico + ')" style="background: #FFF0F0; border: 1px solid #FFCDD2; color: #C62828; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: bold;">❌</button>' +
            '</div>' +
        '</div>';
    }

    contenedor.innerHTML = html;
    if (elementoTotal) {
        elementoTotal.innerText = 'Total a pagar: $' + totalGeneral.toLocaleString('es-CL') + ' CLP';
    }
}

// AUMENTA O DISMINUYE LA CANTIDAD (+1 O -1)
function cambiarCantidad(idUnico, cambio) {
    var item = carrito.find(function(p) { return p.idUnico === idUnico; });
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            eliminarDelCarrito(idUnico);
            return;
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCantidadCarrito();
        mostrarCarrito();
    }
}

// ELIMINA UN PRODUCTO ESPECÍFICO DEL CARRITO
function eliminarDelCarrito(idUnico) {
    carrito = carrito.filter(function(item) {
        return item.idUnico !== idUnico;
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCantidadCarrito();
    mostrarCarrito();
}

// VACIA EL CARRITO COMPLETO
function vaciarCarrito() {
    if (carrito.length === 0) return;
    if (confirm('¿Deseas vaciar todos los productos del carrito?')) {
        carrito = [];
        localStorage.removeItem('carrito');
        actualizarCantidadCarrito();
        mostrarCarrito();
    }
}

// SIMULA LA CONFIRMACIÓN Y EL PAGO
function procesarPago() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }
    alert('¡Gracias por tu compra en Pastelería 1000 Sabores! Tu pedido ha sido confirmado.');
    carrito = [];
    localStorage.removeItem('carrito');
    actualizarCantidadCarrito();
    mostrarCarrito();
}