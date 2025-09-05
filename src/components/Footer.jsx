import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  const companyLinks = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Works" },
    { href: "/careers", label: "Career" },
  ];

  const helpLinks = [
    { href: "/support", label: "Customer Support" },
    { href: "/delivery", label: "Delivery Details" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-[#F7FCFE] border-t border-border flex justify-center">
      <div className="w-[75vw] px-8 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Company Links */}
          <div className="col-span-3">
            <h3 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href} className="py-1">
                  <Link
                    to={link.href}
                    className="text-base text-black hover:text-[#FF5C33] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-span-3">
            <h3 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.href} className="py-1">
                  <Link
                    to={link.href}
                    className="text-base text-black hover:text-[#FF5C33] transition-colors "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - wider */}
          <div className="col-span-6">
            <h3 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-4"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-[#E2E8F0] rounded-2xl h-16 px-4 w-full"
                required
              />
              <Button
                type="submit"
                className="h-16 rounded-2xl bg-[#FF5C33] text-white text-xl font-thin hover:bg-[#e14e28] w-full"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#E2E8F0] text-center">
          <p className="text-sm font-medium text-[#2a2a2a]">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by NRK
            Media
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
