export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg">
      <div className="flex items-center justify-between py-6">
        <div className="text-xl font-bold">Vanttage</div>

        <div className="flex gap-8 text-sm">
          <a href="#services">Servicios</a>
          <a href="#portfolio">Portafolio</a>
          <a href="#clients">Clientes</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
