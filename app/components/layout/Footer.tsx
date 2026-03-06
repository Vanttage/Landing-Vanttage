import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-vanttage-blue-dark border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/logo-blue.png"
                alt="Vanttage Logo"
                width={40}
                height={40}
              />

              <span className="text-xl font-semibold">Vanttage</span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Boutique de ingeniería de software enfocada en simplificar
              procesos empresariales mediante tecnología eficiente.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Servicios
                </a>
              </li>

              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Portafolio
                </a>
              </li>

              <li>
                <a href="#clients" className="hover:text-white transition">
                  Clientes
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Ingeniería */}
          <div>
            <h4 className="font-semibold mb-4">Ingeniería</h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Arquitectura de Software</li>
              <li>Modernización de Flujos</li>
              <li>Automatización Operativa</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Bogotá, Colombia</li>
              <li>contacto@vanttage.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} Vanttage. Todos los derechos
            reservados.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>

            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
