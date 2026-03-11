import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Accident Repairs",
      image: "11.jpeg",
      link: "/services/accident-repairs",
    },
    {
      title: "Scratch & Dent Repairs",
      image: "22.jpeg",
      link: "/services/scratch-repairs",
    },
    {
      title: "Engine Diagnostics",
      image: "22 (2).jpeg",
      link: "/services/engine-diagnostics",
    },
  ];

  return (
    <>
      <Navbar />

      <section
        id="services"
        className="
          relative overflow-hidden
          pt-44 md:pt-52 pb-28 md:pb-36
          bg-[radial-gradient(ellipse_at_top,_rgba(234,179,8,0.12),_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(30,64,175,0.25),_transparent_55%),linear-gradient(135deg,#000000,#020617,#000000)]
        "
      >
        {/* glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-[#c6a23a] via-[#f1d37a] to-[#c6a23a] bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <div className="mt-5 max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light tracking-wide">
                Minor dents, scratches, or full-body repairs — we do it all with
                precision and care.
              </p>

              <p className="mt-3 text-base md:text-lg text-slate-400 leading-relaxed font-light tracking-wide">
                Our friendly team makes the repair process easy, fast, and reliable.
                Get back on the road quickly while we handle everything from start
                to finish.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => navigate(service.link)}
                className="
                  group relative h-72 rounded-xl overflow-hidden
                  cursor-pointer border border-slate-800
                "
              >
                {/* image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    absolute inset-0 w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* overlay */}
                <div
                  className="
                    absolute inset-0 bg-black/40
                    group-hover:bg-black/70
                    transition duration-500
                  "
                />

                {/* content */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <h3 className="text-white text-2xl font-bold">
                    {service.title}
                  </h3>

                  <div
                    className="
                      w-12 h-12 rounded-full
                      border border-[#D4AF37]
                      flex items-center justify-center
                      text-[#D4AF37]
                      group-hover:bg-[#D4AF37]
                      group-hover:text-black
                      transition
                    "
                  >
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;