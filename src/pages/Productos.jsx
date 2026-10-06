import { useState } from 'react';
import ProductoCard from '../components/ProductoCard';

export default function Productos({ productos, agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState('');
  const filtrados = productos.filter((producto) => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <section className="container py-5">
      <div className="d-md-flex justify-content-between align-items-center mb-4">
        <h1 className="color-cafe">Catálogo de productos</h1>
        <input className="form-control buscador" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar producto" />
      </div>
      <div className="row g-4">
        {filtrados.map((producto) => (
          <div className="col-12 col-sm-6 col-lg-4" key={producto.codigo}>
            <ProductoCard producto={producto} agregarAlCarrito={agregarAlCarrito} />
          </div>
        ))}
      </div>
    </section>
  );
}
