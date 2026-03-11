import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: "Home", href: "#home", type: "section" },
    { name: "About Us", href: "#about", type: "section" },
    { name: "Services", href: "/services", type: "page" },
    { name: "Car Sales", href: "/car-sales", type: "page" },
    { name: "Contact", href: "#contact", type: "section" },
  ];

  const services = [
    "Car Repair",
    "Denting & Painting",
    "Engine Diagnostics",
    "Car Detailing",
  ];

  const handleClick = (link: (typeof quickLinks)[0]) => {
    if (link.type === "page") {
      navigate(link.href);
    } else {
      if (location.pathname === "/") {
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + link.href);
      }
    }
  };

  return (
    <footer
      className="
        relative overflow-hidden
        bg-gradient-to-b from-black via-[#050505] to-black
        border-t border-white/10
        text-white
      "
    >
      {/* subtle gold tint in background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_55%)]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand (Socials removed) */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Unique{" "}
              <span className="bg-gradient-to-r from-[#8A6E1A] via-[#D4AF37] to-[#F7E27C] bg-clip-text text-transparent">
                Platinum
              </span>{" "}
              Services
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Your trusted partner for premium automotive care. Quality service
              guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleClick(link)}
                    className="text-slate-300 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-slate-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">
                <span className="text-white">Mon - Sat:</span> 10:00 AM - 7:00 PM
              </li>
              <li className="text-slate-300">
                <span className="text-white">Sunday:</span> 12:00 PM - 4:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Unique Platinum Services. All rights
          reserved.
          <div className="mt-2 text-[12px] text-slate-500">
            Built by{" "}
            <span className="text-[#D4AF37] font-semibold">
              Hope’s IT Consultants
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;