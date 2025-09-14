import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router";
import navlogo from "@/assets/navbar/navlogo.png"

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Our Services" },
    { href: "/work", label: "Work" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-2  bg-[#F7FCFE]  font-nunito">
      {/* Full-width bar */}
      <nav className="w-full h-16  flex justify-center">
        {/* Centered inner navbar */}
        <div className="flex items-center justify-between w-[60vw]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 -ml-24">
            <img
              src={navlogo}
              alt="NRK Logo"
              className="h-36"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-14 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-nunito font-semibold transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link to="/contact" className="hidden md:block">
            <Button className="rounded-xl bg-[#1e293b] text-white hover:bg-[#334155] px-5 py-6 text-base">
              Get In Touch
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
