import { NavLink } from 'react-router-dom';

export default function Header({ cantidad }) {
  const enlaces = [
    ['/', 'Inicio'], ['/nosotros', 'Nosotros'], ['/productos', 'Productos'],
    ['/blog', 'Blog'], ['/contacto', 'Contacto'], ['/login', 'Registro / Login']
  ];

  return (
    <header className="bg-white border-bottom border-2 border-rosa">
      <nav className="navbar navbar-expand-lg container py-2">
        <NavLink className="navbar-brand" to="/">
          <img src="/img/logo.png" alt="Pastelería 1000 Sabores" className="logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-label="Abrir menú">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="menuPrincipal">
          <div className="navbar-nav mx-auto gap-lg-2">
            {enlaces.map(([ruta, nombre]) => (
              <NavLink key={ruta} to={ruta} className={({ isActive }) => `nav-link fw-semibold ${isActive ? 'active' : ''}`}>
                {nombre}
              </NavLink>
            ))}
          </div>
          <NavLink to="/carrito" className="btn btn-cafe rounded-pill px-4">
            🛒 Carrito ({cantidad})
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
