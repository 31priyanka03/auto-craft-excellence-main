import { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBrowse, setShowBrowse] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const mobileBrowseRef = useRef(null);
  const desktopBrowseRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#home", type: "section" },
    { name: "About us", href: "/about", type: "page" },
    { name: "Services", href: "/services", type: "page" },
    { name: "Car Sales", href: "/car_sales", type: "page" },
    { name: "Contact", href: "#contact", type: "section" },
  ];

  const handleSectionClick = (href) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setShowBrowse(false);
  };

  const handlePageClick = (href) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    setShowBrowse(false);
  };

  const navText =
    "text-[11px] uppercase tracking-[0.30em] font-semibold text-white font-medium hover:text-white transition duration-300";

  useEffect(() => {
    const onDown = (e) => {
      const mobileClickedInside =
        mobileBrowseRef.current &&
        mobileBrowseRef.current.contains(e.target);

      const desktopClickedInside =
        desktopBrowseRef.current &&
        desktopBrowseRef.current.contains(e.target);

      if (!mobileClickedInside && !desktopClickedInside) {
        setShowBrowse(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  useEffect(() => {
    if (isOpen) setShowBrowse(false);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="relative h-20 md:h-24 flex items-center justify-between px-4 md:px-8 border-b border-gray-800">
        {/* SEMI CIRCLE CUT */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 md:-bottom-12 w-44 h-12 md:w-72 md:h-24 bg-black rounded-b-full z-0" />

        {/* MOBILE LEFT: BROWSE */}
        <div className="md:hidden flex items-center z-30 relative" ref={mobileBrowseRef}>
          <button
            onClick={() => setShowBrowse((v) => !v)}
            className="flex flex-col items-center text-white font-medium hover:text-white transition"
            aria-label="Browse"
            type="button"
          >
            <Search size={18} />
            <span className="text-[9px] uppercase tracking-[0.30em] font-semibold mt-1">
              Browse
            </span>
          </button>

          {showBrowse && (
            <div className="absolute left-0 top-[72px] w-56 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 border border-white/10 z-50">
              <button
                type="button"
                onClick={() => handlePageClick("/services/accident-repairs")}
                className="w-full text-left px-4 py-2 text-white/90 hover:bg-white/5 text-sm"
              >
                Accident Repairs
              </button>
              <button
                type="button"
                onClick={() => handlePageClick("/services/scratch-repairs")}
                className="w-full text-left px-4 py-2 text-white/90 hover:bg-white/5 text-sm"
              >
                Scratch Removal
              </button>
              <button
                type="button"
                onClick={() => handlePageClick("/services/engine-diagnostics")}
                className="w-full text-left px-4 py-2 text-white/90 hover:bg-white/5 text-sm"
              >
                Engine Diagnostics
              </button>
            </div>
          )}
        </div>

        {/* DESKTOP LEFT SIDE */}
        <div className="hidden md:flex items-center gap-10 z-10">
          <div className="relative" ref={desktopBrowseRef}>
            <button
              onClick={() => setShowBrowse((v) => !v)}
              className="flex flex-col items-center text-white font-medium hover:text-white transition"
              aria-label="Browse"
              type="button"
            >
              <Search size={20} />
              <span className="text-[10px] uppercase tracking-[0.35em] font-semibold mt-1">
                Browse
              </span>
            </button>

            {showBrowse && (
              <div className="absolute top-full mt-3 left-0 w-56 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 border border-white/10 z-50">
                <button
                  type="button"
                  onClick={() => handlePageClick("/services/accident-repairs")}
                  className="w-full text-left px-4 py-2 text-white/90 hover:bg-white/5 text-sm"
                >
                  Accident Repairs
                </button>
                <button
                  type="button"
                  onClick={() => handlePageClick("/services/scratch-repairs")}
                  className="w-full text-left px-4 py-2 text-white/90 hover:bg-white/5 text-sm"
                >
                  Scratch Removal
                </button>
                <button
                  type="button"
                  onClick={() => handlePageClick("/services/engine-diagnostics")}
                  className="w-full text-left px-4 py-2 text-white/90 hover:bg-white/5 text-sm"
                >
                  Engine Diagnostics
                </button>
              </div>
            )}
          </div>

          {navLinks.slice(0, 2).map((link) => (
            <button
              key={link.name}
              onClick={() =>
                link.type === "page"
                  ? handlePageClick(link.href)
                  : handleSectionClick(link.href)
              }
              className={navText}
              type="button"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
          <img
            src="/2.png"
            alt="Unique Platinum Services"
            className="h-20 md:h-36 object-contain"
          />
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden md:flex gap-10 items-center z-10">
          {navLinks.slice(2, 4).map((link) => (
            <button
              key={link.name}
              onClick={() => handlePageClick(link.href)}
              className={navText}
              type="button"
            >
              {link.name}
            </button>
          ))}

          <Button
            onClick={() => handleSectionClick("#contact")}
            className="
              text-[11px] uppercase tracking-[0.30em] font-semibold
              px-6 py-2 rounded-md text-white
              bg-gradient-to-r from-[#7A000D] via-[#C40014] to-[#7A000D]
              hover:brightness-110
              shadow-[0_10px_25px_rgba(196,0,20,0.35)]
              hover:shadow-[0_0_30px_rgba(196,0,20,0.55)]
              transition-all duration-300
            "
          >
            Contact Us
          </Button>
        </div>

        {/* MOBILE RIGHT: HAMBURGER */}
        <div className="md:hidden flex items-center z-30">
          <button
            className="text-white"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-4 space-y-4 border-t border-white/10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() =>
                link.type === "page"
                  ? handlePageClick(link.href)
                  : handleSectionClick(link.href)
              }
              className="block w-full text-left text-[11px] uppercase tracking-[0.30em] font-semibold text-white font-medium hover:text-white transition"
              type="button"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;