import Layout from "@/components/Layout";
import { ArrowRight, Sparkles, Zap, Code, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: Sparkles, title: "Tips & Consejos", desc: "Aprende trucos útiles", href: "/tips" },
    { icon: Zap, title: "Servicios", desc: "Soluciones digitales", href: "/services" },
    { icon: Code, title: "Tienda", desc: "Recursos exclusivos", href: "/store" },
  ];

  return (
    <Layout>
      <section className="pt-28 md:pt-32 pb-16 px-4 min-h-[calc(100vh-200px)] flex items-center">
        <div className="container mx-auto max-w-5xl">
          {/* Hero Content */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Bienvenida a mi espacio digital</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Innovación &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Tecnología
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explora un mundo de conocimiento digital, desde tips prácticos hasta 
              recursos exclusivos para potenciar tu desarrollo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-2 group"
              >
                Conóceme
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/tips" 
                className="px-8 py-4 text-lg border-2 border-border hover:border-primary rounded-2xl text-foreground hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                Ver Tips
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                to={feature.href}
                className={`group glass-card p-6 text-center hover:scale-105 transition-all duration-500 ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${500 + index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
