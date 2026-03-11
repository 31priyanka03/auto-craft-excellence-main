import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AccidentRepairServices: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* PAGE BACKGROUND – DARK PREMIUM */}
      <section
        className="
          relative min-h-screen py-32 px-4
          bg-[radial-gradient(ellipse_at_top,_rgba(234,179,8,0.12),_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(30,64,175,0.25),_transparent_55%),linear-gradient(135deg,#000000,#020617,#000000)]
          text-white
        "
      >
        {/* BACKGROUND GLOWS */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* TITLE */}
          <h1 className="text-center text-4xl font-bold mb-8">
            Full <span className="text-[#D4AF37]">Car Services</span>
          </h1>

          <p className="text-center text-slate-400 max-w-4xl mx-auto mb-24 text-lg">
            We provide professional car services to keep your vehicle running
            smoothly. From routine maintenance to advanced diagnostics, our
            certified technicians ensure reliability, safety, and top performance.
          </p>

          {/* ================= BOX 1 ================= */}
          <div className="mb-24 bg-black/70 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* IMAGE */}
              <div>
                <img
                  src=".jpeg"
                  alt="Car Repair & Maintenance"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">
                  Car Repair & Maintenance
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Comprehensive car repair and maintenance services to ensure
                  safety, performance, and long-term reliability. From oil
                  changes to advanced engine diagnostics, we handle it all.
                </p>
              </div>

            </div>
          </div>

          {/* ================= BOX 2 ================= */}
          <div className="mb-24 bg-black/80 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* CONTENT */}
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
                  Denting & Painting Services
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Restore your car’s original beauty with expert denting and
                  painting services. We use premium materials and advanced
                  techniques to deliver a flawless, showroom-quality finish.
                </p>
              </div>

              {/* IMAGE */}
              <div>
                <img
                  src="22.jpeg"
                  alt="Denting & Painting"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* ================= BOX 3 ================= */}
          <div className="mb-24 bg-black/70 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* IMAGE */}
              <div>
                <img
                  src="1.jpg"
                  alt="Insurance Claim Assistance"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">
                  Hassle-Free Insurance Claims
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  We take care of all insurance documentation and coordination,
                  ensuring a smooth and stress-free repair experience. Fast
                  approvals, transparency, and quality service guaranteed.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AccidentRepairServices;
