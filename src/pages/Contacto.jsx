import { useState } from 'react';

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  function enviar(e) { e.preventDefault(); setEnviado(true); e.currentTarget.reset(); }
  return (
    <section className="container py-5 contenido-estrecho">
      <h1 className="color-cafe">Contacto</h1>
      {enviado && <div className="alert alert-success">Gracias. Recibimos tu consulta.</div>}
      <form onSubmit={enviar} className="card p-4 shadow-sm">
        <label className="form-label">Nombre</label><input className="form-control mb-3" required />
        <label className="form-label">Correo</label><input className="form-control mb-3" type="email" required />
        <label className="form-label">Mensaje</label><textarea className="form-control mb-3" rows="5" required />
        <button className="btn btn-cafe">Enviar consulta</button>
      </form>
    </section>
  );
}
