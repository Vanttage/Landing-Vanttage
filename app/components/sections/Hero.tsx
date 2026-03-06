export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        Creamos experiencias digitales que venden
      </h1>

      <p className="text-lg max-w-2xl mb-8">
        Desarrollo web moderno, rápido y enfocado en resultados para empresas y
        marcas que quieren destacar online.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-black text-white rounded-lg">
          Ver proyectos
        </button>

        <button className="px-6 py-3 border border-black rounded-lg">
          Contactar
        </button>
      </div>
    </section>
  );
}
