"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-[#061729] overflow-hidden">
      {/* Glow background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px]
      bg-[radial-gradient(circle,rgba(30,167,255,0.25)_0%,rgba(30,167,255,0.12)_35%,transparent_70%)]
      blur-3xl pointer-events-none"
      />

      <div className="relative px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Empresa */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 max-w-sm"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logos/logo-blue.png"
                alt="Vanttage Logo"
                width={42}
                height={42}
              />

              <span className="text-xl font-semibold tracking-tight">
                Vanttage
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Boutique de ingeniería de software especializada en optimización
              de procesos empresariales mediante tecnología eficiente,
              automatización y arquitectura de software moderna.
            </p>
          </motion.div>

          {/* Navegación */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-white">Navegación</h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-[#1EA7FF] transition">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#1EA7FF] transition">
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="hover:text-[#1EA7FF] transition"
                >
                  Portafolio
                </a>
              </li>

              <li>
                <a href="#clients" className="hover:text-[#1EA7FF] transition">
                  Clientes
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#1EA7FF] transition">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contacto */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +57 310 508 0356
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} />
                +57 322 670 6385
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} />
                vanttagectg@gmail.com
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Cartagena, Colombia
              </li>
            </ul>
          </motion.div>

          {/* Redes */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-white">Síguenos</h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 hover:border-[#1EA7FF] hover:text-[#1EA7FF] transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 hover:border-[#1EA7FF] hover:text-[#1EA7FF] transition"
              >
                <Github size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 hover:border-[#1EA7FF] hover:text-[#1EA7FF] transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 hover:border-[#1EA7FF] hover:text-[#1EA7FF] transition"
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}

        <div className="mt-16 border-t border-white/10 pt-6">
          {/* Derechos centrados */}

          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Vanttage — Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
