import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');

  function ingresar(e) {
    e.preventDefault();
    if (correo === 'admin@pasteleria.cl' && clave === 'admin123') {
      sessionStorage.setItem('adminAutenticado', 'true');
      navigate('/administrador');
    }
    else setError('Correo o contraseña incorrectos.');
  }

  function cargarPrueba() {
    setCorreo('admin@pasteleria.cl');
    setClave('admin123');
  }

  return (
    <section className="container py-5 formulario-angosto">
      <h1 className="color-cafe text-center">Iniciar sesión</h1>
      <form onSubmit={ingresar} className="card p-4 shadow-sm">
        {error && <div className="alert alert-danger">{error}</div>}
        <label className="form-label">Correo</label>
        <input className="form-control mb-3" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        <label className="form-label">Contraseña</label>
        <input className="form-control mb-3" type="password" value={clave} onChange={(e) => setClave(e.target.value)} required />
        <button className="btn btn-cafe mb-2">Ingresar</button>
        <button type="button" className="btn btn-outline-secondary" onClick={cargarPrueba}>Usar usuario de prueba</button>
      </form>
    </section>
  );
}
