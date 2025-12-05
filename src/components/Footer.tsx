import { Heart, Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Cpu className="w-5 h-5 text-primary" />
            <span className="font-medium">Innovadora Digital</span>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-accent fill-accent" /> y mucho código
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
