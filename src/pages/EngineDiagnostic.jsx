import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Car, CheckSquare, Users, Award, Phone, FileText } from "lucide-react";

const EngineDiagnostic = () => {
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
        {/* ================= MOBILE HERO ================= */}
        <section className="md:hidden bg-black">
          <div className="relative w-full h-[220px] overflow-hidden bg-black">
            <img
              src="/eng_mob.png"
              alt="Engine diagnostics"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/35" />
          </div>
        </section>

        {/* ================= DESKTOP HERO ================= */}
        <section className="hidden md:block w-full px-0">
          <div className="relative w-full h-[82vh] overflow-hidden">
            <img
              src="/ed_1.jpeg"
              alt="Engine diagnostics"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

            {/* BLACK CENTER DIVIDER */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[6px] bg-black -translate-x-1/2 z-10"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-28 z-20">
              <div className="max-w-4xl w-full px-8 py-8">
                <h1
                  className="
                    text-4xl md:text-6xl font-extrabold text-white
                    drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]
                  "
                >
                  Engine Diagnostic Services
                </h1>

                <div
                  className="
                    mt-6 h-[3px] w-40 mx-auto
                    bg-gradient-to-r from-transparent via-[#f1d37a] to-transparent
                    shadow-[0_0_12px_rgba(241,211,122,0.9)]
                  "
                />

                <p
                  className="
                    mt-6 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed
                    font-bold
                    bg-gradient-to-r from-[#c6a23a] via-[#f1d37a] to-[#c6a23a]
                    bg-clip-text text-transparent
                  "
                >
                  Advanced diagnostics to identify engine problems quickly and
                  accurately so you avoid costly repairs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PREMIUM FEATURE BUTTONS ================= */}
        <section className="hidden md:block relative -mt-8 md:-mt-16 pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group relative
                    rounded-3xl
                    bg-gradient-to-b from-black via-[#0d0d0d] to-black
                    border border-white/10
                    px-8 py-10
                    min-h-[220px]
                    flex flex-col items-center justify-center text-center
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-[#C40014]
                    hover:shadow-[0_0_50px_rgba(196,0,20,0.35)]
                  "
                >
                  <div
                    className="
                      relative
                      w-20 h-20
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
                    <Icon size={40} strokeWidth={1.8} className="text-white" />
                  </div>

                  <p
                    className="
                      mt-6
                      text-[13px]
                      uppercase
                      tracking-[0.18em] lg:tracking-[0.35em]
                      text-white font-semibold
                      leading-snug
                    "
                  >
                    {item.label}
                  </p>

                  <div className="mt-5 h-[2px] w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="pt-10 pb-20 md:py-24 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="
                text-4xl md:text-5xl
                font-extrabold
                text-center
                leading-[1.25]
                py-2
                bg-gradient-to-r from-[#c6a23a] via-[#f1d37a] to-[#c6a23a]
                bg-clip-text text-transparent
              "
            >
              Engine Diagnostic Services
            </h2>

            <div className="h-6 md:h-10" />

            <p className="md:hidden text-center text-base leading-relaxed font-semibold text-white/90 max-w-md mx-auto">
              Advanced diagnostics to identify engine problems quickly and
              accurately so you avoid costly repairs.
            </p>

            <div className="h-8 md:h-10" />

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed text-center">
              <p>
                Our advanced diagnostic tools quickly detect issues with your
                vehicle’s engine, electronics, and sensors.
              </p>

              <p>
                Early detection prevents costly breakdowns and ensures your
                vehicle continues performing at its best.
              </p>

              <p>
                Our experienced technicians provide clear results and reliable
                solutions so you can drive with confidence.
              </p>
            </div>

            <div className="h-12" />

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href={`tel:${phoneNumber}`} className="inline-flex justify-center">
                <button className="group inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.30em] font-semibold px-8 py-3 rounded-lg text-white bg-gradient-to-r from-[#7A000D] via-[#C40014] to-[#7A000D] shadow-[0_10px_25px_rgba(196,0,20,0.35)] hover:brightness-110 hover:shadow-[0_0_30px_rgba(196,0,20,0.55)] active:scale-[0.97] transition-all duration-200">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  Call Us Now
                </button>
              </a>

              <button
                onClick={handleScrollToContact}
                className="group inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.30em] font-semibold px-8 py-3 rounded-lg border border-white/20 text-white/90 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/10">
                  <FileText className="h-4 w-4" />
                </span>
                Get Free Quote
              </button>
            </div>

            <div className="h-8" />

            <p className="text-center text-[11px] uppercase tracking-[0.35em] text-white/45">
              Accurate Scan • Clear Advice • Reliable Service
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EngineDiagnostic;