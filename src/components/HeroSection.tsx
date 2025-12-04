import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-planting.jpg";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Manos plantando un árbol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-float animation-delay-200" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6 animate-fade-up backdrop-blur-sm border border-accent/30">
            Excelencia Operativa y Responsabilidad Ecológica
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Soluciones Integrales para un{" "}
            <span className="text-accent">Futuro Sostenible</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/85 mb-10 max-w-2xl animate-fade-up animation-delay-200">
            En SINERGIA SAS unimos el mantenimiento eficiente de sus instalaciones 
            con la gestión ambiental responsable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button variant="cta" size="lg" className="group">
              Servicios Ambientales
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero" size="lg">
              Servicios Generales
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer animate-fade-in animation-delay-400"
      >
        <span className="text-sm font-medium">Descubrir más</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
