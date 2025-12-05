import { Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";

const SocialSection = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:bg-[#0077B5]",
    },
    {
      name: "TikTok",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      href: "https://tiktok.com",
      color: "hover:bg-foreground",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/",
      color: "hover:bg-[#25D366]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      color: "hover:bg-[#1877F2]",
    },
  ];

  return (
    <section id="redes" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conecta Conmigo
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Sígueme en mis redes sociales para más contenido, tips exclusivos 
            y novedades del mundo tech.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 p-4 rounded-2xl bg-secondary/50 transition-all duration-300 hover:scale-110 hover:text-primary-foreground ${social.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-card group-hover:bg-transparent flex items-center justify-center transition-all duration-300">
                  <social.icon className="w-7 h-7" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary-foreground transition-colors">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
