import { Award, Users, Clock } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const StatIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
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
      className="
        relative w-full text-white overflow-hidden bg-cover bg-center
        min-h-[100svh] md:h-screen
        pt-[88px] md:pt-0
      "
      style={{ backgroundImage: "url('/32123.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/75" />

      {/* spacer so stats don't sit too high on mobile */}
      <div className="relative z-10 flex min-h-[100svh] md:h-screen items-end">
        <div
          className="
            w-full
            px-3 pb-4
            md:px-0 md:pb-10
          "
        >
          {/* MOBILE: 1 column / 2 column clean grid
              DESKTOP: 3 columns */}
          <div
            className="
              mx-auto w-full max-w-5xl
              grid grid-cols-1 sm:grid-cols-2 gap-3
              md:grid-cols-3 md:gap-5
            "
          >
            {stats.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="relative group">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;