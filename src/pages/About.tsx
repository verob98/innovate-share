import Layout from "@/components/Layout";
import { Cpu, Code, Wifi, Zap, Sparkles, CircuitBoard } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import fotoPerfil from "../media/foto para curriculo.png"; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const techIcons = [
    { icon: Cpu, delay: "0s" },
    { icon: Code, delay: "1s" },
    { icon: Wifi, delay: "2s" },
    { icon: Zap, delay: "3s" },
    { icon: CircuitBoard, delay: "4s" },
  ];

  return (
    <Layout>
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(var(--primary), 0.3); }
          50% { box-shadow: 0 0 40px rgba(var(--primary), 0.6); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-pulse-glow { animation: glow-pulse 3s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
      `}</style>

      <section 
        ref={sectionRef}
        className="pt-28 md:pt-32 pb-16 px-4 min-h-[calc(100vh-200px)] flex items-center"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`glass-card p-8 md:p-12 transition-all duration-1000 ease-out ${
            isVisible 
              ? "opacity-100 translate-y-0 scale-100" 
              : "opacity-0 translate-y-16 scale-95"
          }`}>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Content */}
              <div className={`flex-1 text-center lg:text-left transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}>
                {/* Avatar pequeño */}
                <div className={`relative mb-8 mx-auto lg:mx-0 w-24 h-24 transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-12"
                }`}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 animate-float-gentle">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden shadow-lg">
                      <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                </div>

                <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 transition-all duration-1000 delay-400 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}>
                  Innovadora Digital
                </h1>
                <p className={`text-lg text-primary font-semibold mb-6 transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  💻 Informática | ⚡ Electrónica | 🚀 Tecnología
                </p>
                <p className={`text-base md:text-lg text-muted-foreground leading-relaxed mb-8 transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  Soy una creadora y desarrolladora apasionada por la informática, 
                  la electrónica y las tecnologías modernas. Me encanta explorar nuevas 
                  herramientas y compartir mis conocimientos a través de este espacio. 
                  Aquí encontrarás tips, consejos y todo lo que he aprendido en mi 
                  camino por el mundo digital. ✨
                </p>

                {/* Tech Icons Row */}
                <div className={`flex justify-center lg:justify-start gap-4 transition-all duration-1000 delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                  {techIcons.map((item, index) => (
                    <div
                      key={index}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-125 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary/50 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{ 
                        transitionDelay: `${800 + index * 100}ms`
                      }}
                    >
                      <item.icon className="w-7 h-7" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Photo - Right Side */}
              <div className={`relative hidden lg:block w-64 h-full transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-20 animate-pulse-glow"></div>
                  <div className="relative rounded-3xl overflow-hidden border-2 border-primary/50 shadow-2xl">
                    <img 
                       src={fotoPerfil}
                      alt="Perfil"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent/30 blur-xl animate-float-gentle"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-primary/20 blur-xl animate-float-gentle" style={{ animationDelay: "2s" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
