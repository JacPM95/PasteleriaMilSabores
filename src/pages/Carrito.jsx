import CarritoItem from '../components/CarritoItem';
import { calcularTotal, formatearPrecio } from '../utils/carrito';

export default function Carrito({ carrito, cambiarCantidad, eliminarProducto, vaciarCarrito }) {
  function confirmar() {
    if (!carrito.length) return;
    alert(`¡Gracias por tu compra! ID: PED-${Date.now()}`);
    vaciarCarrito();
  }

  return (
    <section className="container py-5 contenido-estrecho">
      <h1 className="color-cafe">Carrito de compras</h1>
      {!carrito.length ? <div className="alert alert-beige">Tu carrito está vacío.</div> : carrito.map((item) => (
        <CarritoItem key={item.codigo} item={item} cambiarCantidad={cambiarCantidad} eliminarProducto={eliminarProducto} />
      ))}
      <div className="card p-4 mt-4">
        <h2 className="h4">Total: ${formatearPrecio(calcularTotal(carrito))} CLP</h2>
        <div className="d-flex flex-wrap gap-2"><button className="btn btn-cafe" onClick={confirmar}>Confirmar compra</button><button className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar carrito</button></div>
      </div>
    </section>
  );
}
