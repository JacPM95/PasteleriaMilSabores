import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatearPrecio } from '../utils/carrito';

export default function Administrador({ productos, setProductos }) {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({ codigo: '', nombre: '', categoria: '', precio: '' });
  const [mensaje, setMensaje] = useState('');

  function actualizar(e) { setFormulario({ ...formulario, [e.target.name]: e.target.value }); }
  function guardar(e) {
    e.preventDefault();
    if (productos.some((p) => p.codigo === formulario.codigo)) { setMensaje('Ese código ya existe.'); return; }
    setProductos([...productos, { ...formulario, precio: Number(formulario.precio), imagen: 'logo.png' }]);
    setFormulario({ codigo: '', nombre: '', categoria: '', precio: '' });
    setMensaje('Producto guardado correctamente.');
  }

  function cerrarSesion() {
    sessionStorage.removeItem('adminAutenticado');
    navigate('/login');
  }

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center gap-3"><h1 className="color-cafe">Panel administrador</h1><button className="btn btn-outline-secondary" onClick={cerrarSesion}>Cerrar sesión</button></div>
      <p className="lead">Gestión básica de productos mediante estados de React.</p>
      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <form className="card p-4 shadow-sm" onSubmit={guardar}>
            <h2 className="h4">Nuevo producto</h2>
            {mensaje && <div className="alert alert-beige">{mensaje}</div>}
            {['codigo', 'nombre', 'categoria', 'precio'].map((campo) => (
              <div className="mb-3" key={campo}><label className="form-label text-capitalize">{campo}</label><input className="form-control" name={campo} type={campo === 'precio' ? 'number' : 'text'} value={formulario[campo]} onChange={actualizar} required /></div>
            ))}
            <button className="btn btn-cafe">Guardar producto</button>
          </form>
        </div>
        <div className="col-12 col-lg-7">
          <div className="table-responsive card shadow-sm">
            <table className="table table-striped mb-0"><thead><tr><th>Código</th><th>Producto</th><th>Precio</th></tr></thead><tbody>{productos.map((p) => <tr key={p.codigo}><td>{p.codigo}</td><td>{p.nombre}</td><td>${formatearPrecio(p.precio)}</td></tr>)}</tbody></table>
          </div>
        </div>
      </div>
    </section>
  );
}
