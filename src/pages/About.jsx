import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Target, Eye, Users, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional visual storytelling that helps brands connect with their audience and achieve their goals through creative excellence.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading creative agency that transforms ideas into compelling visual narratives, setting new standards in digital creativity.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of talented photographers, designers, and creative strategists passionate about delivering outstanding results.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Innovation, integrity, and excellence drive everything we do, ensuring we deliver beyond expectations for every client.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We Live And Breathe Digital. The Internet Is Our Home.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground">
                We are a buzzing digital media agency based out of New Delhi, India. Our team consists of experienced and 
                hardworking social bees who thrive on creativity and innovation. With over 15 years of combined experience, 
                we've helped hundreds of brands tell their stories through compelling visual content.
              </p>
              <p className="text-muted-foreground">
                Our journey began with a simple belief: that great visual content has the power to transform businesses. 
                Today, we work with clients across industries, from startups to Fortune 500 companies, helping them create 
                memorable experiences that resonate with their audiences.
              </p>
              <Link to="/work">
                <Button variant="default" size="lg">
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full p-8">
                  <g transform="translate(200, 200)">
                    {/* Team illustration */}
                    <circle cx="-60" cy="0" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                    <circle cx="60" cy="0" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                    <circle cx="0" cy="-60" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                    
                    {/* Connecting lines */}
                    <line x1="-20" y1="-30" x2="20" y2="-30" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5"/>
                    <line x1="-40" y1="20" x2="40" y2="20" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5"/>
                    <line x1="-30" y1="-20" x2="-30" y2="20" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5"/>
                    <line x1="30" y1="-20" x2="30" y2="20" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5"/>
                    
                    {/* Center element */}
                    <circle cx="0" cy="0" r="15" fill="hsl(var(--primary))" opacity="0.2"/>
                    <circle cx="0" cy="0" r="8" fill="hsl(var(--primary))"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's work together to create something amazing
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

export default About;