import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import humans from "src/assets/services_page_icons/humans.svg";
import imag1 from "src/assets/aboutus/img1.svg"; // (bottom-left upward arrow)
import imag2 from "src/assets/aboutus/img3.svg"; // (top-right coins + telescope)

const About = () => {
  return (
    <div className="min-h-screen bg-[#F7FCFE] pt-20">
      {/* HERO */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-montserrat text-[#0F172A]">
            About <span className="text-[#FF5A36]">Us</span>
          </h1>
          <p className="mt-3 text-md italic font-georgia text-[#000000]">
            We Live And Breathe Digital. The Internet Is Our Home.
          </p>

          {/* large illustration */}
          <div className="mt-6 flex justify-center">
            <img
              src={humans}
              alt="Humans illustration"
              className="w-full max-w-4xl -mt-10 md:-mt-16 "
            />
          </div>

          {/* intro paragraph block */}
          <p className="mt-8 max-w-5xl  mx-auto text-lg leading-7 font-montserrat font-extralight text-[#000000]">
            We are a buzzing digital media agency based out of New Delhi, India.
            Our team consists of experienced and hardworking social bees who
            breathe and live digital. Change on Facebook, Twitter, YouTube,
            Instagram, Google algorithm? Rest assured that we are aware of it
            the moment it’s out. We combine our years of experience in creating
            integrated social solutions with creative output to generate a rich
            digital experience for our clients. We think, we research, we
            create, and for our clients, we thrive to deliver best solutions to
            their every problem.
          </p>
        </div>
      </section>

      {/* VISION + MISSION GRID */}
      <section className="">
        <div className="container mx-auto">
          {/* row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Vision – text block (top-left) */}
            <div className="p-20 border border-black">
              <h2 className="text-6xl px-12 font-semibold text-[#FF5A36]">Our Vision</h2>
              <p className="mt-2 text-lg px-12 italic text-[#0F172A] font-georgia">
                Insights, Metrics And Analytics - Everything Is Connected!
              </p>
              <p className="mt-4 text-lg px-12 leading-7 font-montserrat  text-[#334155]">
                In a digital world where everything’s connected, we believe that
                the approach to digital communications has to be joined-up too.
                Our approach combines creativity & technology and blends a
                diverse range of digital marketing disciplines — from mobile and
                responsive web design to search and social media campaigns — all
                under one roof.
              </p>
            </div>

            {/* Vision – image block (top-right) */}
            <div className=" w-full flex items-center justify-center p-0">
              <img src={imag2} alt="Vision illustration" className="w-full m-0 p-0 border border-black" />
            </div>
          </div>

          {/* row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Mission – image block (bottom-left) */}
            <div className=" w-full flex items-center justify-center p-0">
              <img src={imag1} alt="Mission illustration" className="w-full m-0 p-0 border border-black" />
            </div>

            {/* Mission – text block (bottom-right) */}
            <div className="p-20 border border-black">
              <h2 className="text-6xl px-12 font-semibold text-[#FF5A36]">Our Mission</h2>
              <p className="mt-2 text-lg px-12 italic text-[#0F172A] font-georgia" >
                Our Approach Is Backed By Strategy, Creativity And Optimized For Results.
              </p>
              <p className="mt-4 text-lg px-12 leading-7 text-[#334155] font-montserrat ">
                We understand that each client and each project we undertake is
                different and so we have developed a repeatable process that we
                know works. Our methodology puts the user at the heart of the
                experience from the start. By working iteratively through a
                pre-defined set of stages, we create beautiful and usable
                solutions that work hard and deliver targeted results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
