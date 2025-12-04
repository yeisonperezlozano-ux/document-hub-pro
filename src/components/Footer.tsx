import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Leaf className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-primary-foreground">
                SINERGIA SAS
              </span>
              <p className="text-sm text-primary-foreground/70">
                Integrando calidad y sostenibilidad.
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidad
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 SINERGIA SAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
