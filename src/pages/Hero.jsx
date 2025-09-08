import { Button } from "@/components/ui/button";
import humans from "@/assets/hero/humans.svg";
import img1 from "@/assets/hero/img1.svg";
import img2 from "@/assets/hero/img2.svg";
import pic from "@/assets/hero/pic.svg";

const Hero = () => {
  return (
    <div className="bg-[#F7FCFE] text-gray-900">

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-snug font-comfortaa">
              We create super - rich <br /> experiences online !
            </h1>

            <div className="flex gap-4">
              <Button className="bg-[#FF5C33] text-white px-8 py-4 rounded-lg font-nunito font-semibold">
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-[#FF6B00] text-[#FF6B00] px-8 py-4 rounded-lg font-nunito font-semibold"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img src={humans} alt="Hero" className="max-w-lg w-full" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 border-t">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat">
            What We <span className="text-[#FF5C33]">Do..?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-4 font-nunito">Production</h3>
            <p className="text-gray-700 leading-relaxed font-montserrat-light">
              NRK is a full-scale Digital Marketing Agency based out of New Delhi,
              India. We mix our years of experience and knowledge to create solutions
              for our clients which are not only performance driven, but also creative.
              We are running kick-ass digital campaigns for our clients, even as you
              read this!
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 font-nunito">Marketing</h3>
            <p className="text-gray-700 leading-relaxed font-montserrat-light">
              What is marketing if it is not performance driven? We create digital
              experiences which stick with audiences and reach the end objective. Trust
              us with making your brand visible and desired, with highly focused
              performance marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Tour + Strategy */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div>
            <img src={img1} alt="Virtual Tour" className="mb-6 w-full" />
            <h3 className="text-2xl font-semibold text-[#FF6B00] mb-4 font-georgia">
              360 Virtual Tour
            </h3>
            <p className="text-gray-700 leading-relaxed font-montserrat-light">
              In a digital world where everything’s connected, we believe that the
              approach to digital communications has to be joined-up too. Our approach
              combines creativity & technology and blends a diverse range of digital
              marketing disciplines — from mobile and responsive web design to search
              and social media campaigns — all under one roof.
            </p>
          </div>

          <div>
            <img src={img2} alt="Strategy" className="mb-6 w-full" />
            <h3 className="text-2xl font-semibold text-[#FF6B00] mb-4 font-georgia">
              Strategy, Creativity & Results!
            </h3>
            <p className="text-gray-700 leading-relaxed font-montserrat-light">
              We understand that each client and each project we undertake is
              different and so we have developed a repeatable process that we know
              works. Our methodology puts the user at the heart of the experience from
              the start. By working iteratively through a pre-defined set of stages, we
              create beautiful and usable solutions that work hard and deliver targeted
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#F7FCFE]">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Testimonials</h2>
          <p className="text-gray-500">Happy Customers</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center">
          <p className="mb-6 text-lg text-gray-700 leading-relaxed font-georgia">
            “Working with <span className="text-[#FF5C33] font-bold">NRK STUDIO</span>
            was a game-changer for us. Their expertise in digital marketing made our
            brand stand out in a crowded marketplace. We saw a significant increase in
            our online visibility and conversion rates.”
          </p>
          <div className="flex flex-col items-center">
            <img
              src={pic}
              alt="Customer"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h4 className="font-semibold">Albert Flores</h4>
            <p className="text-gray-500 text-sm">Manager of Test</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Hero;
