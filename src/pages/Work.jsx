import dyplogo from "@/assets/dyplogo.svg"; // ✅ make sure file is in src/assets

const Work = () => {

  return (
    <div className="min-h-screen bg-[#F7FCFE] pt-20">
      {/* Hero Section */}
      <section className="py-8 px-4 bg-[#F7FCFE] border-b border-black">
        <div className="container mx-auto text-center space-y-6">
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-montserrat text-[#FF5C33]">
            Our <span className="text-[#19223F]">WORK</span>
          </h1>
          <p className="mt-3 text-md italic font-georgia text-[#000000]">
Dive Into Cinematic World Of NRK Media          </p>
        </div>
      </section>

      {/* Featured Project Card */}
      <section className="container mx-auto px-4 py-10 bg-[#F7FCFE]">
        <div className="flex flex-col items-center">
          {/* Project Title */}
          <h2 className="text-3xl font-semibold font-nunito text-foreground text-center">
            D. Y. Patil College Of Engineering
          </h2>

          {/* Project Card */}
          <div className="rounded-2xl overflow-hidden  max-w-3xl w-full">
            <img
              src={dyplogo}
              alt="D. Y. Patil College Of Engineering"

            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
