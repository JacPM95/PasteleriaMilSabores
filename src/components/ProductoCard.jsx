import { formatearPrecio } from '../utils/carrito';

export default function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <article className="card producto-card h-100 shadow-sm">
      <img src={`/img/${producto.imagen}`} className="card-img-top producto-img" alt={producto.nombre} />
      <div className="card-body d-flex flex-column">
        <small className="text-muted">{producto.categoria}</small>
        <h2 className="h5 color-cafe mt-2">{producto.nombre}</h2>
        <p className="fs-5 fw-bold mt-auto">${formatearPrecio(producto.precio)} CLP</p>
        <button className="btn btn-cafe" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
      </div>
    </article>
  );
}
