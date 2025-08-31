import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Creative Photography Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              We create super-rich{" "}
              <span className="text-primary">experiences</span> online!
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Transform your brand with stunning visuals. We specialize in creative photography, 
              360° virtual tours, and compelling visual storytelling that captivates your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Illustrated Characters */}
          <div className="relative hidden lg:block">
            <svg
              viewBox="0 0 500 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Center Character with VR Headset */}
              <g transform="translate(250, 200)">
                <circle cx="0" cy="-50" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <path d="M-35,-50 L-35,-20 Q-35,20 0,20 Q35,20 35,-20 L35,-50" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <rect x="-25" y="-60" width="50" height="15" rx="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <circle cx="-10" cy="-52" r="3" fill="hsl(var(--primary))"/>
                <circle cx="10" cy="-52" r="3" fill="hsl(var(--primary))"/>
                <path d="M-15,20 L-20,100 M15,20 L20,100" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <path d="M-35,-10 L-60,10 M35,-10 L60,10" stroke="hsl(var(--primary))" strokeWidth="2"/>
              </g>

              {/* Left Character with Laptop */}
              <g transform="translate(100, 200)">
                <circle cx="0" cy="-50" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <path d="M-30,-50 L-30,-20 Q-30,20 0,20 Q30,20 30,-20 L30,-50" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <rect x="-40" y="0" width="50" height="30" rx="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <path d="M-40,30 L-45,35 L15,35 L10,30" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <circle cx="-5" cy="-50" r="2" fill="hsl(var(--primary))"/>
                <circle cx="5" cy="-50" r="2" fill="hsl(var(--primary))"/>
              </g>

              {/* Right Character with Camera */}
              <g transform="translate(400, 200)">
                <circle cx="0" cy="-50" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <path d="M-30,-50 L-30,-20 Q-30,20 0,20 Q30,20 30,-20 L30,-50" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <rect x="-20" y="-10" width="25" height="20" rx="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <circle cx="-7" cy="0" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <circle cx="-7" cy="0" r="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"/>
                <rect x="8" y="-5" width="8" height="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"/>
              </g>

              {/* Decorative Elements */}
              <circle cx="50" cy="50" r="3" fill="hsl(var(--primary))" opacity="0.5" className="animate-pulse"/>
              <circle cx="450" cy="80" r="3" fill="hsl(var(--primary))" opacity="0.5" className="animate-pulse delay-500"/>
              <circle cx="80" cy="350" r="3" fill="hsl(var(--primary))" opacity="0.5" className="animate-pulse delay-1000"/>
              <circle cx="420" cy="320" r="3" fill="hsl(var(--primary))" opacity="0.5" className="animate-pulse delay-1500"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;