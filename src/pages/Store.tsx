import Layout from "@/components/Layout";
import { ShoppingBag, Star, Heart, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Store = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("store-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("store-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const products: Array<{
    id: string;
    name: string;
    description: string;
    price: string;
    rating: number;
    image: string;
    category: string;
  }> = [];

  const categories = ["Todos", "Cursos", "Templates", "E-books", "Recursos", "Servicios"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <section className="pt-28 md:pt-32 pb-16 px-4 min-h-[calc(100vh-200px)]">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          }`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-medium">Tienda Digital</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recursos & Productos
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre cursos, templates, e-books y recursos exclusivos para potenciar 
              tus habilidades en desarrollo y diseño.
            </p>
          </div>

          {/* Categories */}
          <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group glass-card p-6 hover:scale-[1.02] transition-all duration-500 ${
                    isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{product.image}</span>
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
                    >
                      <Heart 
                        className={`w-5 h-5 transition-all duration-300 ${
                          favorites.includes(product.id) 
                            ? "fill-red-500 text-red-500 scale-110" 
                            : "text-muted-foreground hover:text-red-400"
                        }`} 
                      />
                    </button>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <button className="flex items-center gap-2 btn-primary px-4 py-2 text-sm">
                      Ver más
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 glass-card transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <ShoppingBag className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Próximamente
              </h3>
              <p className="text-muted-foreground">
                Estamos preparando productos increíbles para ti. ¡Vuelve pronto!
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Store;
