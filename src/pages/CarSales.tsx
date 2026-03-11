import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BadgeDollarSign,
  Car,
  Wrench,
  CheckCircle,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const CarSales = () => {
  const partnerUrl = "https://www.autogroupltd.co.uk/";

  const benefits = [
    {
      icon: BadgeDollarSign,
      title: "Easy EMI Options",
      desc: "Affordable monthly payments with flexible plans.",
    },
    {
      icon: Car,
      title: "Inspected Vehicles",
      desc: "Trusted inspection reports on every vehicle.",
    },
    {
      icon: Wrench,
      title: "Finance Assistance",
      desc: "Support with finance & loan options end-to-end.",
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing",
      desc: "No hidden costs. Clear, honest pricing.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen">
        {/* HERO */}
        <section
          className="
            relative overflow-hidden
            pt-32 md:pt-36 pb-16 md:pb-20
            bg-[radial-gradient(ellipse_at_top,_rgba(234,179,8,0.10),_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(30,64,175,0.18),_transparent_55%),linear-gradient(135deg,#000000,#020617,#000000)]
          "
        >
          {/* glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            {/* small pill */}
            <div className="flex justify-center mb-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/70">
                <span className="inline-block h-2 w-2 rounded-full bg-[#C40014]" />
                Partner Sales • Auto Group
              </div>
            </div>

            {/* HEADING (UPDATED GOLD) */}
            <h1
              className="
                text-center text-4xl md:text-6xl font-extrabold leading-tight
                bg-gradient-to-r from-[#b8962e] via-[#D4AF37] to-[#b8962e]
                bg-clip-text text-transparent
              "
            >
              Car Sales
            </h1>

            {/* description */}
            <p className="mt-6 max-w-4xl mx-auto text-center text-base md:text-lg text-white/80 leading-relaxed">
              Looking for your next car? Our partner company offers a wide range
              of quality vehicles with flexible options tailored for you. Enjoy a
              smooth and trustworthy buying experience with expert guidance and
              transparent pricing.
            </p>

            {/* CENTER CTA */}
            <div className="mt-12 flex justify-center">
              <a
                href={partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group w-full max-w-xl
                  rounded-2xl border border-white/10
                  bg-gradient-to-b from-black/70 via-black/50 to-black/80
                  px-7 py-6
                  shadow-[0_24px_70px_rgba(0,0,0,0.75)]
                  hover:border-[#D4AF37]/40
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-6">

                  {/* LOGO */}
                  <div
                    className="
                      relative
                      w-28 h-28 md:w-32 md:h-32
                      rounded-2xl
                      bg-black
                      border border-white/10
                      flex items-center justify-center
                      overflow-hidden
                      shadow-[0_0_40px_rgba(212,175,55,0.16)]
                      shrink-0
                    "
                  >
                    <img
                      src="/auto.png"
                      alt="Auto Group"
                      className="w-full h-full object-contain p-3"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 text-left">
                    <div className="text-[11px] uppercase tracking-[0.35em] text-white/60">
                      Partner Stock
                    </div>

                    <div className="mt-1 text-lg md:text-2xl font-semibold text-white">
                      Click to Open Auto Group
                    </div>

                    <div className="mt-4 h-[2px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />
                  </div>

                  <ArrowUpRight className="ml-auto w-5 h-5 text-white/70 group-hover:text-white transition" />
                </div>
              </a>
            </div>

            {/* handshake line */}
            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center gap-3 text-white/70">
                <Handshake className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm md:text-base">
                  Expert advice to choose the perfect car for your needs
                </span>
              </div>
            </div>
          </div>
        </section>

       

        <Footer />
      </main>
    </>
  );
};

export default CarSales;