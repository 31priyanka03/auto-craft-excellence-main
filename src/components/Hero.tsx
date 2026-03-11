import { Award, Users, Clock } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const StatIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/55 shadow-[0_0_12px_rgba(212,175,55,0.16)]" />
    <div className="absolute inset-[4px] rounded-full bg-gradient-to-b from-white/10 to-black/40 border border-white/5" />
    <Icon className="relative w-5 h-5 text-[#D4AF37]" />
  </div>
);

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = (): void => {
    if (location.pathname === "/") {
      const element = document.querySelector("#contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  const stats = [
    { icon: Award, title: "25+ Years", subtitle: "Experience" },
    { icon: Users, title: "15K+", subtitle: "Happy Clients" },
    { icon: Clock, title: "24/7", subtitle: "Service" },
  ];

  return (
    <section
      id="home"
      className="relative w-full h-screen pt-24 md:pt-0 text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/32123.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/75" />

      {/* ✅ Mobile: compact row (doesn't block car). Desktop: 3 columns */}
      <div
        className="
          absolute bottom-5 md:bottom-12 left-1/2 -translate-x-1/2
          w-[94%] max-w-5xl z-10
          flex gap-3 overflow-x-auto pb-1
          md:grid md:grid-cols-3 md:gap-5 md:overflow-visible
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {stats.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div
              key={idx}
              className="
                relative group
                min-w-[220px] md:min-w-0
                md:w-[260px]
              "
            >
              <div className="pointer-events-none absolute -inset-[2px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[0_0_25px_rgba(212,175,55,0.15)]" />

              <div
                className="
                  relative flex items-center gap-3 md:gap-4
                  p-4 md:p-6 rounded-2xl
                  backdrop-blur-xl
                  bg-gradient-to-b from-black/80 via-black/65 to-black/85
                  border border-white/10
                  shadow-[0_18px_45px_rgba(0,0,0,0.75)]
                "
              >
                <StatIcon Icon={Icon} />
                <div>
                  <p className="text-[15px] md:text-[18px] font-semibold tracking-wide leading-none">
                    {c.title}
                  </p>
                  <p className="text-[10px] md:text-[12px] uppercase tracking-[0.22em] text-slate-300 mt-2">
                    {c.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

     
    </section>
  );
};

export default Hero;