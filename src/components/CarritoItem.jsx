import { formatearPrecio } from '../utils/carrito';

export default function CarritoItem({ item, cambiarCantidad, eliminarProducto }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div>
          <h2 className="h5 color-cafe">{item.nombre}</h2>
          <p className="mb-0">${formatearPrecio(item.precio)} CLP</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary" onClick={() => cambiarCantidad(item.codigo, -1)}>-</button>
          <span className="fw-bold px-2">{item.cantidad}</span>
          <button className="btn btn-outline-secondary" onClick={() => cambiarCantidad(item.codigo, 1)}>+</button>
          <button className="btn btn-outline-danger ms-2" onClick={() => eliminarProducto(item.codigo)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}
