import React, { useState, useEffect } from "react";
import pic from "@/assets/hero/pic.svg";
import comma from "@/assets/hero/apost.svg";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with NRK STUDIO was a game-changer for us. Their expertise in digital marketing made our brand stand out in a crowded marketplace. We saw a significant increase in our online visibility and conversion rates.",
      name: "Albert Flores",
      position: "Manager of Test",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      quote:
        "Working with NRK STUDIO was a game-changer for us. Their expertise in digital marketing made our brand stand out in a crowded marketplace. We saw a significant increase in our online visibility and conversion rates.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
    },
    {
      id: 3,
      quote:
        "Working with NRK STUDIO was a game-changer for us. Their expertise in digital marketing made our brand stand out in a crowded marketplace. We saw a significant increase in our online visibility and conversion rates.",
      name: "Michael Chen",
      position: "CEO, TechStart",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ];

  // Auto-roll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 px-24 bg-[#F7FCFE]">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-montserrat font-bold">Testimonials</h2>
        <p className="text-gray-500 font-montserrat font-medium py-2">Happy Customers</p>
      </div>

      <div className=" mx-auto  px-16 text-center relative">
        
              {/* Testimonial content */}
            <div className="overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
                {testimonials.map((testimonial) => (
                <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 grid grid-cols-2 items-center gap-16  px-12 mx-auto"
                    >
                        
                   {/* Left column - Quote */}
<div className="text-left pr-8">
  <img src={comma} alt="" className="py-4" />
  <p className="mb-6 font-semibold text-lg font-jakarta leading-relaxed">
    {testimonial.quote.split("NRK STUDIO").map((part, i) => (
      <React.Fragment key={i}>
        {part}
        {i < testimonial.quote.split("NRK STUDIO").length - 1 && (
          <span className="text-[#FF5C33] font-bold">NRK STUDIO</span>
        )}
      </React.Fragment>
    ))}
  </p>
  <h4 className="font-semibold text-xl">{testimonial.name}</h4>
  <p className="text-gray-500 text-sm">{testimonial.position}</p>
</div>


                    {/* Right column - Image */}
                    <div className="flex justify-center lg:justify-end">
                    <img
                        src={pic}
                        alt={testimonial.name}
                        className="w-full   object-cover rounded-md"
                    />
                    </div>
                </div>
                ))}
            </div>
            </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentTestimonial ? "bg-[#FF5C33]" : "bg-gray-300"
              }`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
