export default function Portfolio() {
  return (
    <section className="w-full py-24 px-6">
      <h2 className="text-4xl font-bold mb-16 text-center">Proyectos</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="border rounded-xl h-64 flex items-center justify-center">
          Proyecto 1
        </div>

        <div className="border rounded-xl h-64 flex items-center justify-center">
          Proyecto 2
        </div>

        <div className="border rounded-xl h-64 flex items-center justify-center">
          Proyecto 3
        </div>
      </div>
    </section>
  );
}
