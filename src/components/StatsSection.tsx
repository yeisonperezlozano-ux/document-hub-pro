import { Building2, CheckCircle, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "+50",
    label: "Clientes Corporativos",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Cumplimiento Legal",
  },
  {
    icon: Users,
    value: "+200",
    label: "Colaboradores",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Soporte Operativo",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 mb-4 transition-all group-hover:scale-110 group-hover:bg-primary-foreground/20">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
