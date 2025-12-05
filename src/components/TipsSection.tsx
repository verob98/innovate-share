import { Lightbulb, Zap, Settings, Sparkles, Code, Shield } from "lucide-react";
import TipCard from "./TipCard";

const TipsSection = () => {
  const tips = [
    {
      id: "tip-1",
      icon: <Lightbulb className="w-7 h-7 text-primary" />,
      title: "Organiza tu código",
      description: "Mantén tu código limpio y organizado usando carpetas y nombres descriptivos. Esto facilitará el mantenimiento a largo plazo.",
    },
    {
      id: "tip-2",
      icon: <Zap className="w-7 h-7 text-accent" />,
      title: "Optimiza el rendimiento",
      description: "Usa lazy loading para imágenes y componentes. Minimiza el uso de librerías pesadas cuando no sean necesarias.",
    },
    {
      id: "tip-3",
      icon: <Settings className="w-7 h-7 text-primary" />,
      title: "Automatiza tareas",
      description: "Configura scripts de automatización para tareas repetitivas. Ahorra tiempo y reduce errores humanos.",
    },
    {
      id: "tip-4",
      icon: <Sparkles className="w-7 h-7 text-accent" />,
      title: "Diseño responsivo",
      description: "Siempre diseña pensando en móviles primero. Usa flexbox y grid para layouts flexibles y adaptables.",
    },
    {
      id: "tip-5",
      icon: <Code className="w-7 h-7 text-primary" />,
      title: "Documenta tu trabajo",
      description: "Escribe comentarios claros y mantén un README actualizado. Tu yo del futuro te lo agradecerá.",
    },
    {
      id: "tip-6",
      icon: <Shield className="w-7 h-7 text-accent" />,
      title: "Seguridad primero",
      description: "Valida siempre los datos de entrada. Usa HTTPS y mantén tus dependencias actualizadas.",
    },
  ];

  return (
    <section id="tips" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tips & Consejos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre consejos prácticos y trucos que he aprendido en mi experiencia 
            con tecnología, desarrollo y el mundo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={tip.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TipCard {...tip} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
