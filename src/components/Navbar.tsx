import { Menu, X, Cpu, Lightbulb, Share2, User, Briefcase, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/about", label: "Sobre Mí", icon: User },
    { href: "/tips", label: "Tips", icon: Lightbulb },
    { href: "/services", label: "Servicios", icon: Briefcase },
    { href: "/store", label: "Tienda", icon: ShoppingBag },
    { href: "/social", label: "Redes", icon: Share2 },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-card/70 backdrop-blur-xl border-b border-border/30 shadow-lg" 
          : "bg-gradient-to-r from-primary/90 via-primary to-accent/80 shadow-2xl shadow-primary/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-16" : "h-20 md:h-24"
        }`}>
          <Link 
            to="/" 
            className={`flex items-center gap-3 font-bold transition-all duration-500 ${
              isScrolled 
                ? "text-primary text-lg" 
                : "text-primary-foreground text-xl md:text-2xl"
            }`}
          >
            <div className={`transition-all duration-500 ${
              isScrolled 
                ? "w-8 h-8 bg-primary/10 rounded-lg p-1.5" 
                : "w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl p-2 backdrop-blur-sm"
            }`}>
              <Cpu className="w-full h-full" />
            </div>
            <span className="tracking-tight">Innovadora Digital</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    : isActive(item.href)
                      ? "bg-white/30 text-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/20"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? "text-foreground hover:bg-primary/10" 
                : "text-primary-foreground hover:bg-white/20"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-80 pb-4" : "max-h-0"
        }`}>
          <div className={`pt-2 border-t ${isScrolled ? "border-border/50" : "border-white/20"}`}>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl my-1 transition-all duration-300 ${
                  isScrolled 
                    ? isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    : isActive(item.href)
                      ? "bg-white/30 text-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/20"
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.3s ease-out ${index * 0.05}s`
                }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
