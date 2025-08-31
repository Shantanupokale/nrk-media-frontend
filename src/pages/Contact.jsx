import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@nrkmedia.com",
      link: "mailto:hello@nrkmedia.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Creative Street, New York, NY 10001",
      link: "#"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're Here To Help. Reach Out To Us With Any Questions Or Inquiries, And We'll Get Back To You Promptly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you. Whether you have a question about our services, 
                  pricing, or anything else, our team is ready to answer all your questions.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Find Us Here</h2>
          <MapEmbed />
        </div>
      </section>
    </div>
  );
};

export default Contact;