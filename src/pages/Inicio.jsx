import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-5 color-cafe fw-bold">Celebra la dulzura de la vida</h1>
      <p className="lead">Los mejores sabores artesanales para cada celebración.</p>
      <img src="/img/Pagina_inicio.png" className="img-fluid rounded shadow my-4 imagen-inicio" alt="Equipo de Pastelería 1000 Sabores" />
      <div><Link to="/productos" className="btn btn-cafe rounded-pill px-4">Ver catálogo</Link></div>
    </div>
  );
}
