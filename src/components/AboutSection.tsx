import { Cpu, Code, Wifi, Zap, Sparkles, CircuitBoard } from "lucide-react";

const AboutSection = () => {
  const techIcons = [
    { icon: Cpu, delay: "0s" },
    { icon: Code, delay: "1s" },
    { icon: Wifi, delay: "2s" },
    { icon: Zap, delay: "3s" },
    { icon: CircuitBoard, delay: "4s" },
  ];

  return (
    <section id="sobre-mi" className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              {/* Floating tech icons */}
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
                <Cpu className="w-5 h-5 text-accent" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Innovadora Digital
              </h1>
              <p className="text-primary font-medium mb-4">
                Creadora & Desarrolladora
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Soy una creadora y desarrolladora apasionada por la informática, 
                la electrónica y las tecnologías modernas. Me encanta explorar nuevas 
                herramientas y compartir mis conocimientos a través de este espacio. 
                Aquí encontrarás tips, consejos y todo lo que he aprendido en mi 
                camino por el mundo digital.
              </p>
            </div>
          </div>

          {/* Tech Icons Row */}
          <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-border/50">
            {techIcons.map((item, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ animationDelay: item.delay }}
              >
                <item.icon className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
