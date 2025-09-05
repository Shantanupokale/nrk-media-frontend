import dyplogo from "@/assets/dyplogo.svg"; // ✅ make sure file is in src/assets

const Work = () => {

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-6 pt-16 px-4 bg-[#F7FCFE] border-b border-gray-200">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our <span className="text-primary">WORK</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Dive Into Cinematic World Of NRK Media
          </p>
        </div>
      </section>

      {/* Featured Project Card */}
      <section className="container mx-auto px-4 py-10 bg-[#F7FCFE]">
        <div className="flex flex-col items-center">
          {/* Project Title */}
          <h2 className="text-xl font-semibold text-foreground text-center">
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
