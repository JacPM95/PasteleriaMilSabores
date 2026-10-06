export default function Blog() {
  return (
    <section className="container py-5">
      <h1 className="color-cafe mb-4">Blog</h1>
      <div className="row g-4">
        {['Consejos para elegir una torta', 'Nuestro Récord Guinness'].map((titulo) => (
          <article className="col-12 col-md-6" key={titulo}><div className="card h-100 p-4 shadow-sm"><h2 className="h4">{titulo}</h2><p>Conoce historias y recomendaciones de nuestra pastelería.</p></div></article>
        ))}
      </div>
    </section>
  );
}
