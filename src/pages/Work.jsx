import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { ArrowRight, ExternalLink } from "lucide-react";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "photography", "virtual tours", "branding", "web design"];

  const projects = [
    {
      id: 1,
      title: "D. Y. Patil College Of Engineering",
      category: "virtual tours",
      description: "360° Virtual campus tour showcasing state-of-the-art facilities and infrastructure",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 2,
      title: "Fashion Brand Campaign",
      category: "photography",
      description: "High-end fashion photography for international clothing brand",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 3,
      title: "Tech Startup Branding",
      category: "branding",
      description: "Complete brand identity design for innovative tech company",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "web design",
      description: "Modern e-commerce website with integrated payment solutions",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 5,
      title: "Luxury Hotel Virtual Tour",
      category: "virtual tours",
      description: "Immersive 360° experience of premium hotel properties",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 6,
      title: "Product Photography",
      category: "photography",
      description: "Professional product shots for cosmetics brand catalog",
      image: "/api/placeholder/600/400",
      link: "#"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our <span className="text-primary">WORK</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive Into Cinematic World Of NRK Media
          </p>
        </div>
      </section>

      {/* Featured Project Card */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center text-secondary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              D. Y. Patil College Of Engineering
            </h2>
            <div className="max-w-md mx-auto">
              <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="300" height="100" rx="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <text x="200" y="90" textAnchor="middle" fill="currentColor" fontSize="24" fontWeight="bold">DYP</text>
                <text x="200" y="115" textAnchor="middle" fill="currentColor" fontSize="12">
                  D. Y. PATIL COLLEGE
                </text>
                <text x="200" y="130" textAnchor="middle" fill="currentColor" fontSize="12">
                  OF ENGINEERING,
                </text>
                <text x="200" y="145" textAnchor="middle" fill="currentColor" fontSize="12">
                  AKURDI
                </text>
                <line x1="150" y1="160" x2="250" y2="160" stroke="hsl(var(--accent))" strokeWidth="3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sticky top-16 bg-background z-40 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" size="sm" className="bg-background/90">
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Have a Query<span className="text-primary">...?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="lg">
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;