import { SprayCan, Wrench, Coffee, Bug, ArrowRight } from "lucide-react";

const services = [
  {
    icon: SprayCan,
    title: "Limpieza Institucional e Industrial",
    description:
      "Protocolos de aseo técnico para oficinas, plantas industriales, hospitales y centros comerciales. Uso de maquinaria especializada.",
    cta: "Solicitar inspección",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Locativo",
    description:
      "Reparaciones eléctricas, hidrosanitarias, pintura, y adecuaciones de obra civil menor. Mantenimiento preventivo y correctivo.",
    cta: "Ver alcance",
  },
  {
    icon: Coffee,
    title: "Cafetería y Atención",
    description:
      "Personal capacitado para atención en cafeterías, protocolo y servicio al cliente dentro de sus instalaciones corporativas.",
    cta: "Contratar personal",
  },
  {
    icon: Bug,
    title: "Control de Plagas",
    description:
      "Fumigación y control integrado de plagas con productos amigables con el ambiente y seguros para las personas.",
    cta: "Programa sanitario",
  },
];

export const GeneralServices = () => {
  return (
    <section id="servicios-generales" className="section-padding bg-sage/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-tag mb-4">Facility Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Servicios <span className="text-accent">Generales</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mantenimiento locativo y limpieza especializada para asegurar la operatividad 
            y la imagen impecable de su infraestructura.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated p-6 flex flex-col h-full group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 transition-all group-hover:bg-accent group-hover:scale-110">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {service.description}
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors group/link"
              >
                {service.cta}
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
