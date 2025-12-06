import Layout from "@/components/Layout";
import { Code, Palette, Smartphone, Globe, Zap, Shield, Headphones, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Creación de sitios web modernos, rápidos y responsivos usando las últimas tecnologías.",
      color: "from-primary to-primary/60",
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Interfaces atractivas y experiencias de usuario intuitivas que cautivan a tu audiencia.",
      color: "from-accent to-accent/60",
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Desarrollo de aplicaciones móviles multiplataforma con rendimiento nativo.",
      color: "from-primary to-accent",
    },
    {
      icon: Globe,
      title: "SEO & Marketing",
      description: "Optimización para motores de búsqueda y estrategias de marketing digital.",
      color: "from-accent to-primary",
    },
    {
      icon: Zap,
      title: "Automatización",
      description: "Automatiza procesos repetitivos y aumenta la productividad de tu negocio.",
      color: "from-primary to-primary/60",
    },
    {
      icon: Shield,
      title: "Seguridad Web",
      description: "Protección de datos y seguridad informática para tu presencia digital.",
      color: "from-accent to-accent/60",
    },
    {
      icon: Headphones,
      title: "Soporte Técnico",
      description: "Asistencia técnica continua para mantener tus proyectos funcionando perfectamente.",
      color: "from-primary to-accent",
    },
    {
      icon: Rocket,
      title: "Consultoría",
      description: "Asesoramiento personalizado para llevar tu proyecto al siguiente nivel.",
      color: "from-accent to-primary",
    },
  ];

  return (
    <Layout>
      <section className="pt-28 md:pt-32 pb-16 px-4 min-h-[calc(100vh-200px)]">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          }`}>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mis Servicios
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones tecnológicas personalizadas para impulsar tu presencia digital 
              y hacer crecer tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group glass-card p-6 text-center hover:scale-105 transition-all duration-500 cursor-pointer ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>



          {/* CTA Section */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="glass-card p-8 md:p-12 bg-gradient-to-r from-primary/10 via-transparent to-accent/10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ¿Listo para empezar tu proyecto?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Contáctame y conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales.
              </p>
              <a 
                href="/social" 
                className="inline-flex items-center gap-2 btn-primary px-8 py-3 text-lg"
              >
                <Rocket className="w-5 h-5" />
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
