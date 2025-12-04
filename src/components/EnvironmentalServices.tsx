import { Recycle, FileCheck, TreeDeciduous, ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-planting.jpg";

const services = [
  {
    icon: Recycle,
    title: "Gestión Integral de Residuos",
    description:
      "Manejo, recolección, transporte y disposición final de residuos peligrosos (RESPEL) y no peligrosos, con certificados de trazabilidad.",
    tags: ["Economía Circular", "Certificación de disposición"],
  },
  {
    icon: FileCheck,
    title: "Consultoría y Trámites",
    description:
      "Asesoría jurídica y técnica ante autoridades ambientales. Elaboración de Planes de Gestión Ambiental (PGA) y Estudios de Impacto.",
    tags: ["Licencias Ambientales", "Auditorías de cumplimiento"],
  },
  {
    icon: TreeDeciduous,
    title: "Paisajismo y Reforestación",
    description:
      "Diseño de zonas verdes corporativas, mantenimiento de jardines verticales y planes de compensación forestal.",
    tags: ["Mantenimiento de zonas verdes", "Poda técnica y tala autorizada"],
  },
];

export const EnvironmentalServices = () => {
  return (
    <section id="servicios-ambientales" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-tag mb-4">Línea Verde</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Servicios <span className="text-accent">Ambientales</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Gestión técnica y estratégica para garantizar el cumplimiento normativo 
            y reducir la huella ecológica de su empresa.
          </p>
        </div>

        {/* Services Grid with Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Services Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated p-6 group cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center transition-all group-hover:bg-accent group-hover:scale-110">
                      <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-auto">
            <img
              src={servicesImage}
              alt="Plantación de árboles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-foreground font-display text-xl font-semibold">
                Comprometidos con el medio ambiente
              </p>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Cada proyecto es una oportunidad para crear impacto positivo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
