export function calcularTotal(carrito) {
  return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

export function formatearPrecio(precio) {
  return precio.toLocaleString('es-CL');
}
