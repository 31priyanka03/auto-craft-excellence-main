import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Car, CheckSquare, Users, Award, Phone, FileText } from "lucide-react";

const ScratchRepair = () => {
  const navigate = useNavigate();
  const phoneNumber = "07862148647";

  const handleScrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const features = [
    { icon: Car, label: "Courtesy Car" },
    { icon: CheckSquare, label: "Free Quotes" },
    { icon: Users, label: "Friendly Staff" },
    { icon: Award, label: "25+ Years Experience" },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-black">
        {/* HERO */}
        <section className="w-full px-0">
          <div className="relative w-full h-[82vh] overflow-hidden">
            <img
              src="/acci_2.png"
              alt="Scratch repair"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

            {/* BLACK CENTER DIVIDER */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[6px] bg-black -translate-x-1/2 z-10" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-28 z-20">
              <div className="max-w-4xl w-full px-8 py-8">
                {/* TITLE */}
                <h1
                  className="
                    text-4xl md:text-6xl font-extrabold text-white
                    drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]
                  "
                >
                  Car Scratch & Dent Repair
                </h1>

                {/* GOLD DIVIDER */}
                <div
                  className="
                    mt-6 h-[3px] w-40 mx-auto
                    bg-gradient-to-r from-transparent via-[#f1d37a] to-transparent
                    shadow-[0_0_12px_rgba(241,211,122,0.9)]
                  "
                />

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-6 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed
                    font-bold
                    bg-gradient-to-r from-[#c6a23a] via-[#f1d37a] to-[#c6a23a]
                    bg-clip-text text-transparent
                  "
                >
                  Minor dents or scratches? We restore your car quickly and
                  professionally so it looks flawless again.
                </p>
              </div>
            </div>
          </div>
        </section>

     {/* ================= PREMIUM FEATURE BUTTONS ================= */}
<section className="relative -mt-8 md:-mt-16 pb-20 md:pb-24">
  <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
    {features.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="
            group relative
            rounded-2xl md:rounded-3xl
            bg-gradient-to-b from-black via-[#0d0d0d] to-black
            border border-white/10
            px-4 py-6 md:px-8 md:py-10
            min-h-[140px] md:min-h-[220px]
            flex flex-col items-center justify-center text-center
            transition-all duration-300
            hover:-translate-y-2
            hover:border-[#C40014]
            hover:shadow-[0_0_50px_rgba(196,0,20,0.35)]
          "
        >
          {/* ICON CONTAINER */}
          <div
            className="
              relative
              w-14 h-14 md:w-20 md:h-20
              flex items-center justify-center
              rounded-full
              border-2 border-[#D4AF37]
              bg-black
              shadow-[0_0_18px_rgba(212,175,55,0.35)]
              transition-all duration-300
              group-hover:scale-110
              group-hover:shadow-[0_0_30px_rgba(212,175,55,0.55)]
            "
          >
            <Icon size={26} strokeWidth={1.8} className="text-white md:hidden" />
            <Icon size={40} strokeWidth={1.8} className="hidden md:block text-white" />
          </div>

          {/* LABEL */}
          <p
            className="
              mt-4 md:mt-6
              text-[10px] md:text-[13px]
              uppercase
              tracking-[0.18em] md:tracking-[0.35em]
              text-white font-semibold
              leading-snug
            "
          >
            {item.label}
          </p>

          {/* GOLD LINE */}
          <div className="mt-3 md:mt-5 h-[2px] w-12 md:w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />
        </div>
      );
    })}
  </div>
</section>
        {/* CONTENT */}
        <section className="py-24 bg-black">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="
                text-4xl md:text-5xl
                font-extrabold
                leading-tight
                mb-14
                bg-gradient-to-r from-[#c6a23a] via-[#f1d37a] to-[#c6a23a]
                bg-clip-text text-transparent
                text-center
              "
            >
              Car Scratch & Dent Repair
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 text-slate-300 text-lg leading-relaxed text-justify">
              <p>
                Our expert technicians remove scratches and dents with precision,
                restoring your vehicle’s bodywork to showroom condition.
              </p>

              <p>
                From minor paint damage to deeper dents, we use professional
                repair techniques to ensure a flawless finish.
              </p>

              <p>
                Quick turnaround times and affordable solutions mean your car will
                be back on the road looking its best.
              </p>
            </div>

            <div className="h-12" />

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href={`tel:${phoneNumber}`} className="inline-flex justify-center">
                <button
                  className="
                    group inline-flex items-center justify-center gap-3
                    text-[11px] uppercase tracking-[0.30em] font-semibold
                    px-8 py-3 rounded-lg text-white
                    bg-gradient-to-r from-[#7A000D] via-[#C40014] to-[#7A000D]
                    shadow-[0_10px_25px_rgba(196,0,20,0.35)]
                    hover:brightness-110
                    hover:shadow-[0_0_30px_rgba(196,0,20,0.55)]
                    active:scale-[0.97]
                    transition-all duration-200
                  "
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  Call Us Now
                </button>
              </a>

              <button
                onClick={handleScrollToContact}
                className="
                  group inline-flex items-center justify-center gap-3
                  text-[11px] uppercase tracking-[0.30em] font-semibold
                  px-8 py-3 rounded-lg
                  border border-white/20
                  text-white/90
                  bg-white/5
                  hover:bg-white/10 hover:text-white
                  transition-all duration-200
                "
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/10">
                  <FileText className="h-4 w-4" />
                </span>
                Get Free Quote
              </button>
            </div>

            <div className="h-8" />

            <p className="text-center text-[11px] uppercase tracking-[0.35em] text-white/45">
              Paint Match • Dent Removal • Premium Finish
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ScratchRepair;