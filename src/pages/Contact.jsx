import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import MapEmbed from "@/components/MapEmbed";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace this with your own backend API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F7FCFE] pt-10">
      {/* Hero Section */}
      <section className="py-10 pt-16 px-4 bg-gradient-hero border-b-2">
        <div className="container mx-auto text-center space-y-10">
          <h1 className="text-5xl font-bold font-montserrat text-[#FF5C33] ">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg font-georgia max-w-4xl italic mx-auto">
            We're Here To Help. Reach Out To Us With Any Questions Or Inquiries,
            And We'll Get Back To You Promptly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-10 px-4 flex justify-center">
        <div className="container w-[60vw] mx-auto flex justify-center">
          <div className="rounded-xl px-8 w-full max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-2 ">
                <div className="space-y-2 font-poppins font-thin ">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-[#F4F1F1]"
                  />
                </div>

                <div className="space-y-2 font-poppins font-thin">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-[#F4F1F1]"
                  />
                </div>
              </div>

              <div className="space-y-2 font-poppins font-thin">
                <Label htmlFor="phone">Your Mobile No.</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 9951234XXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-[#F4F1F1]"
                />
              </div>

              <div className="space-y-2 font-poppins font-thin">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-[#F4F1F1] min-h-[150px]"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="w-32 rounded-xl font-nunito bg-[#1e293b] text-white hover:bg-[#334155] px-5 py-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Get In Touch</>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#F7FCFE]">
        <div className="container w-[60vw] mx-auto">
          <h2 className="text-2xl font-bold font-jakarta text-foreground mb-8 text-center">
            Find Us Here
          </h2>
          <MapEmbed />
        </div>
      </section>
    </div>
  );
};

export default Contact;
