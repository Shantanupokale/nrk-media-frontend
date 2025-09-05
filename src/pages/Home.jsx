import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Camera, Video, Image, Palette, Users, Trophy, ArrowRight } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Capture your moments with our expert photographers specializing in all types of photography.",
    },
    {
      icon: Video,
      title: "360° Virtual Tours",
      description: "Immersive virtual experiences that bring your spaces to life for remote viewers.",
    },
    {
      icon: Image,
      title: "Photo Editing",
      description: "Professional retouching and editing services to make your images perfect.",
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Strategic visual storytelling and brand development for maximum impact.",
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Team Members" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Services Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What We <span className="text-primary">Do</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive visual solutions to elevate your brand and tell your story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;