import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "State-of-the-art diagnostic equipment",
    "Genuine spare parts & quality materials",
    "Transparent pricing with no hidden costs",
    "Quick turnaround time",
    "Warranty on all services",
    "Customer-first approach",
  ];

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Happy Customers" },
    { value: "1000+", label: "Cars Serviced" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section
      id="about"
      className="
        relative overflow-hidden scroll-mt-28
        bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.18),_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(30,64,175,0.25),_transparent_55%),linear-gradient(135deg,#000000,#020617,#000000)]
        text-white
        py-24
      "
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#8A6E1A] via-[#D4AF37] to-[#F7E27C] bg-clip-text text-transparent">
                Us
              </span>
            </h2>

            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-white">
                Unique Platinum Services
              </span>
              , your trusted partner for all automotive needs. With years of
              hands-on experience in car repair and body works, we’ve earned our
              reputation through quality craftsmanship and honest service.
            </p>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Our certified technicians use advanced tools and proven techniques
              to deliver outstanding results. From routine servicing to complete
              body restoration, every vehicle receives meticulous care and
              attention.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.35)] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  bg-gradient-to-b from-black/80 via-black/70 to-black/90
                  border border-white/5
                  p-7 rounded-xl text-center
                  shadow-[0_15px_40px_rgba(0,0,0,0.8)]
                  hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]
                  transition-all duration-300
                "
              >
                <p className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-[#8A6E1A] via-[#D4AF37] to-[#F7E27C] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;