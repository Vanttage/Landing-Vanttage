export default function Contact() {
  return (
    <section className="w-full py-24 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Contacto</h2>

      <form className="max-w-xl mx-auto flex flex-col gap-6">
        <input
          type="text"
          placeholder="Nombre"
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
        />

        <textarea
          placeholder="Mensaje"
          rows={5}
          className="border p-3 rounded-lg"
        />

        <button className="bg-black text-white py-3 rounded-lg">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
