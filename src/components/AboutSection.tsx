import { Award, Users, Leaf, Globe } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Certificación de Calidad",
    description: "Procesos estandarizados",
  },
  {
    icon: Users,
    title: "Personal Capacitado",
    description: "Talento humano experto",
  },
  {
    icon: Leaf,
    title: "Tecnología Sostenible",
    description: "Insumos eco-amigables",
  },
  {
    icon: Globe,
    title: "Cobertura Integral",
    description: "Soluciones 360°",
  },
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="label-tag mb-4">Sobre Sinergia SAS</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Más que un proveedor,{" "}
              <span className="text-accent">su aliado estratégico</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Somos una organización multidisciplinaria dedicada a optimizar los 
              procesos de nuestros clientes mediante la integración de servicios 
              de mantenimiento y gestión ambiental.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Entendemos que la eficiencia operativa no debe reñir con la sostenibilidad. 
              Por eso, nuestro enfoque "Sinergia" busca reducir costos operativos mientras 
              maximizamos el cumplimiento normativo y el bienestar de sus instalaciones.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="card-elevated p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-accent/20">
                  <pillar.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
