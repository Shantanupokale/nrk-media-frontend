
import humans from "@/assets/hero/humans.svg";
import heroimg from "@/assets/hero/heroimg.svg";
import vector1 from "@/assets/hero/vector1.svg";
import { Button } from "@/components/ui/button";
import Testimonials from "./testimonial";

const Hero = () => {
  return (
    <div className="bg-[#F7FCFE] text-gray-900">

{/* Hero Section */}
<section className="pt-16 py-8  relative overflow-hidden">
  <div className="container mx-auto space-y-6">
    
    {/* Heading */}
    <h1 className="text-6xl px-48 pt-8 leading-snug font-comfortaa">
      We create super - rich <br /> experiences online !
    </h1>

    {/* Row: Vector + Buttons + Humans */}
    <div className="flex flex-row items-center justify-between gap-8 relative z-10">
      
      {/* Left side: vector + buttons */}
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <img src={vector1} alt="Vector" className="w-36" />

        <div className="flex gap-4 -mt-16">
          <Button className="bg-[#212B39] text-white px-8 py-6 rounded-lg font-nunito font-semibold">
            Get In Touch
          </Button>
          <Button
            variant="outline"
            className="border-[#212B39] text-[#212B39] px-8 py-6 rounded-lg font-nunito font-semibold"
          >
            Our Services
          </Button>
        </div>
      </div>
      <div className="">
        <img src={humans} alt="Hero" className="max-w-4xl -mt-24 z-0 pr-16" />
      </div>
    </div>
  </div>
      </section>
      
      



      {/* What We Do */}
<section className=" border-t border-gray-300">
  <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-300 ">
    
    {/* Left Title */}
    <div className="flex items-center justify-center border-r border-gray-300 p-16">
      <h2 className="text-6xl font-bold font-montserrat text-[#212B39] leading-snug">
        What We <br /> Do<span className="text-[#FF5C33]">..?</span>
      </h2>
    </div>

    {/* Production */}
    <div className="border-r border-gray-300 p-16">
      <h2 className="text-4xl font-bold font-nunito mb-2">Production</h2>
      <p className="italic font-georgia mb-4">
        We Create Super-Rich Experiences Online!
      </p>
      <p className="text-gray-700 leading-relaxed font-montserrat pr-8">
        NRK is a full-scale Digital Marketing Agency based out of New Delhi, India.
        We mix our years of experience and knowledge to create solutions for our clients
        which are not only performance driven, but also creative. We are running
        kick-ass digital campaigns for our clients, even as you read this!
      </p>
    </div>

    {/* Marketing */}
    <div className="p-16">
      <h2 className="text-4xl font-bold font-nunito mb-2">Marketing</h2>
      <p className="italic font-georgia mb-4">
        Marketing Brands With Care
      </p>
      <p className="text-gray-700 leading-relaxed font-montserrat pr-8">
        What is marketing if it is not performance driven? We create digital
        experiences which stick with audiences and also reach the end objective.
        Trust us with making your brand visible and desired, with highly focused
        performance marketing.
      </p>
    </div>

  </div>
</section>


      {/* Virtual Tour + Strategy */}
      <section className="bg-white">
<div className="container mx-auto">
  <img src={heroimage} alt="" className="w-screen" />
</div>

</section>

{/* Virtual Tour + Strategy */}
<section className="bg-[#F7FCFE] border-b border-black w-full ">
  <div className="container mx-auto grid grid-cols-2  ">

    {/* Left */}
    <div className="px-24 py-16 border-r-2 border-black ">
      <h3 className="text-4xl font-nunito font-extrabold text-[#FF5C33] mb-2">
        360 Virtual Tour
      </h3>
      <h4 className="italic font-georgia text-md   mb-4">
        Real Experience Right From Your Comfort <br/> - Designed For Comfort And Ease
      </h4>
      <p className="text-gray-700 leading-relaxed font-montserrat pr-16">
        In a digital world where everything’s connected, we believe that the
        approach to digital communications has to be joined-up too. Our
        approach combines creativity & technology and blends a diverse range
        of digital marketing disciplines — from mobile and responsive web
        design to search and social media campaigns — all under one roof.
      </p>
    </div>

    {/* Right */}
    <div className="px-24 py-16 ">
      <h3 className="text-4xl font-nunito font-extrabold text-[#FF5C33] mb-2">
        Strategy, Creativity & Results!
      </h3>
      <h4 className="italic font-georgia text-md mb-4">
        Our Approach Is Backed By Strategy, Creativity And <br/>Optimized For Results.
      </h4>
      <p className="text-gray-700 leading-relaxed font-montserrat pr-16">
        We understand that each client and each project we undertake is
        different and so we have developed a repeatable process that we know
        works. Our methodology puts the user at the heart of the experience
        from the start. By working iteratively through a pre-defined set of
        stages, we create beautiful and usable solutions that work hard and
        deliver targeted results.
      </p>
    </div>

  </div>
</section>

<Testimonials/>
    </div>
  );
};

export default Hero;
