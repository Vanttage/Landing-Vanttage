export default function Services() {
  return (
    <section className="w-full py-24 px-6">
      <h2 className="text-4xl font-bold mb-16 text-center">Servicios</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Desarrollo Web</h3>
          <p>Sitios rápidos, escalables y optimizados con Next.js.</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-4">UI / UX</h3>
          <p>
            Diseños modernos enfocados en conversión y experiencia de usuario.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Optimización SEO</h3>
          <p>Estructuras optimizadas para posicionar mejor en Google.</p>
        </div>
      </div>
    </section>
  );
}
