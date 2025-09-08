
import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";
// Custom SVGs (as image paths)
import content from "src/assets/services_page_icons/icons/content.svg";
import earth from "src/assets/services_page_icons/icons/Icon.svg";
import virtualTourIcon from "src/assets/services_page_icons/icons/layout 1.svg";
import emailIcon from "src/assets/services_page_icons/icons/mail 2.svg";
import social from "src/assets/services_page_icons/icons/Group.svg";
import seo from "src/assets/services_page_icons/icons/seo.svg";

const Services = () => {
  const services = [
    {
      icon: seo,
      isComponent: false,
      title: "Search Engine Optimization",
      description:
        "Boost your online visibility with our expert SEO strategies, making your brand stand out in search results.",
    },
    {
      icon: social,
      isComponent: false,
      title: "Social Media Management",
      description:
        "Drive engagement and brand loyalty through our dynamic social media campaigns designed to captivate your audience.",
    },
    {
      icon: content,
      isComponent: false,
      title: "Content Marketing",
      description:
        "Elevate your content game with our captivating and SEO-friendly content designed to attract, educate, and convert.",
    },
    {
      icon: earth,
      isComponent: false,
      title: "360° Virtual Tour",
      description:
        "Showcase properties, products, or spaces with engaging 360° virtual tours that captivate viewers, build trust, and drive conversions.",
    },
    {
      icon: emailIcon,
      isComponent: false,
      title: "Email Marketing",
      description:
        "Nurture your leads and build lasting relationships through effective email marketing campaigns that drive conversions.",
    },
    {
      icon: virtualTourIcon,
      isComponent: false,
      title: "Web Development",
      description:
        "Transform your website into a user-friendly powerhouse with our creative design and development expertise.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7FCFE] pt-12 relative ">
      {/* Hero Section */}
      <section className="py-14 px-4 border-b-2">
      <div className="container mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900">
        Our Services
        </h1>
        <p className="font-georgia text-lg max-w-2xl mx-auto italic">
        Browse Our Services To Grow Your Brand Creatively And Efficiently
        </p>
        {/* Humans SVG illustration */}
        <div className="flex justify-center">
        <img
          src="src/assets/services_page_icons/humans.svg"
          alt="Humans illustration"
          className="max-w-4xl -mt-24 z-0"
        />
        </div>
      </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => {
          const isLastRow = idx >= services.length - 3;
          const isLastCol = (idx + 1) % 3 === 0;

          return (
          <div
            key={idx}
            className={`
            flex flex-col items-center text-center space-y-3 px-6 py-10
            border-gray-300
            ${!isLastCol ? "border-r" : ""}
            ${!isLastRow ? "border-b" : ""}
            `}
          >
            {service.isComponent ? (
            <service.icon className="w-10 h-10 text-gray-700" />
            ) : (
            <img
              src={service.icon}
              alt={service.title}
              className="w-10 h-10"
            />
            )}
            <h3 className="text-lg font-jakarta font-semibold ">
            {service.title}
            </h3>
            <p className="text-gray-600 font-jakarta text-sm font-normal px-6 leading-relaxed">
            {service.description}
            </p>
          </div>
          );
        })}
        </div>
      </div>
      </section>

      {/* VR Section */}
      <section className="pb-12 px-4 text-center relative">
      <div className="container  px-8 py-2 mx-auto space-y-6 relative z-10">
        <h2 className="text-5xl font-montserrat font-semibold text-[#FF5C33] leading-tight">
        <span>Bring Your Spaces To Life With</span>
        <br />
        <span>Virtual Reality</span>
        </h2>
        <p className=" mx-auto text-lg italic font-georgia py-8 max-w-4xl">
        Showcase Properties, Products, Or Destinations With Our Immersive VR
        Tours That Captivate, Engage, And Convert Like Never Before.
        </p>
        <Button size="lg" className="mt-4 py-6 font-nunito font-thin text-lg bg-[#19223F]">
        Take A Virtual Tour Now
        </Button>
      </div>
      </section>

      {/* Overlay VR image hidden over footer */}
      <img
      src="/src/assets/services_page_icons/vr-guy.svg"
      alt="VR Background"
      className="absolute left-1/2 bottom-0 -translate-x-1/2 z-0 max-w-4xl opacity-0 md:opacity-100 pointer-events-none"
      style={{ pointerEvents: "none" }}
      />
    </div>
    );
};

export default Services;
