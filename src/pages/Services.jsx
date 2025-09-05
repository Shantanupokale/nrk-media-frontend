import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { 
  Camera, 
  Video, 
  Image, 
  Palette, 
  Globe, 
  Smartphone,
  TrendingUp,
  Mail,
  Users,
  Megaphone,
  PenTool,
  Monitor,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Search Engine Optimization",
      description: "Boost your online visibility with our expert SEO strategies, making your brand stand out in search results.",
      features: [
        "Keyword research and analysis",
        "On-page and off-page optimization",
        "Technical SEO audits",
        "Local SEO strategies"
      ]
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Drive engagement and brand loyalty through our dynamic social media campaigns designed to captivate your audience.",
      features: [
        "Content strategy development",
        "Multi-platform management",
        "Community engagement",
        "Analytics and reporting"
      ]
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Elevate your content game with our captivating and SEO-friendly content designed to attract, educate, and convert.",
      features: [
        "Blog writing and management",
        "Video content creation",
        "Infographic design",
        "Content distribution strategy"
      ]
    },
    {
      icon: Video,
      title: "360° Virtual Tour",
      description: "Showcase properties, products, or spaces with engaging 360° virtual tours that captivate viewers, build trust, and drive conversions.",
      features: [
        "High-resolution 360° photography",
        "Interactive hotspots",
        "Custom branding integration",
        "VR-compatible experiences"
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture your leads and build lasting relationships through effective email marketing campaigns that drive conversions.",
      features: [
        "Campaign strategy and design",
        "Automated email sequences",
        "A/B testing and optimization",
        "Performance tracking"
      ]
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "Transform your website into a user-friendly powerhouse with our creative design and development expertise.",
      features: [
        "Responsive web design",
        "E-commerce solutions",
        "CMS development",
        "Performance optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse Our Services To Grow Your Brand Creatively And Efficiently
          </p>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <svg viewBox="0 0 600 300" className="w-full max-w-2xl h-auto">
              {/* Left character with laptop */}
              <g transform="translate(150, 150)">
                <circle cx="0" cy="-40" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <path d="M-30,-40 L-30,-10 Q-30,20 0,20 Q30,20 30,-10 L30,-40" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <rect x="-35" y="5" width="50" height="30" rx="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <circle cx="-8" cy="-40" r="2" fill="hsl(var(--primary))"/>
                <circle cx="8" cy="-40" r="2" fill="hsl(var(--primary))"/>
              </g>

              {/* Center character with VR */}
              <g transform="translate(300, 150)">
                <circle cx="0" cy="-40" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <rect x="-25" y="-50" width="50" height="12" rx="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <text x="0" y="-42" textAnchor="middle" fill="hsl(var(--primary))" fontSize="8" fontWeight="bold">VR</text>
                <path d="M-35,-40 L-35,-10 Q-35,30 0,30 Q35,30 35,-10 L35,-40" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <path d="M-35,0 L-50,20 M35,0 L50,20" stroke="hsl(var(--primary))" strokeWidth="2"/>
              </g>

              {/* Right character with camera */}
              <g transform="translate(450, 150)">
                <circle cx="0" cy="-40" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <path d="M-30,-40 L-30,-10 Q-30,20 0,20 Q30,20 30,-10 L30,-40" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <rect x="-20" y="-5" width="30" height="20" rx="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <circle cx="-5" cy="5" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <circle cx="-5" cy="5" r="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"/>
              </g>

              {/* Connecting elements */}
              <circle cx="100" cy="100" r="2" fill="hsl(var(--primary))" opacity="0.5"/>
              <circle cx="500" cy="100" r="2" fill="hsl(var(--primary))" opacity="0.5"/>
              <circle cx="300" cy="50" r="2" fill="hsl(var(--primary))" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* VR Special Section */}
      <section className="py-20 px-4 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Bring Your Spaces To Life With Virtual Reality
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Showcase Properties, Products, Or Destinations With Our Interactive VR Tours That Captivate, 
            Engage, And Convert Like Never Before.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90">
              Take A Virtual Tour Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

   
    </div>
  );
};

export default Services;