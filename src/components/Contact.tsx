import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyVhleMojEX-wNB723Fo7fhxT01-PmyWlBWPwFWqU39aB7K2IkBGDmgcDbsl1MJ84p-2w/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed");

      toast({
        title: "Message Sent!",
        description: "We’ll contact you shortly.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch {
      toast({
        title: "Error",
        description: "Submission failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "0208123456",
      href: "tel:0208123456",
      hoverType: "none",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@upslimited.co.uk",
      href: "mailto:info@upslimited.co.uk",
      hoverType: "none",
    },
    {
      icon: MapPin,
      label: "Registered Office:",
      value: (
        <>
          Unimix House, Platinum Suite, Abbey, Middlesex, London
          <br />
          NW10 7TR
        </>
      ),
      hoverType: "none",
    },
    {
      icon: MapPin,
      label: "Bodyshop Centre:",
      value: (
        <>
          Broadfields Venue (Rear of Blue Room), Harrow, Middlesex, London
          <br />
          HA2 6NH
        </>
      ),
      hoverType: "none",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: (
        <>
          Mon – Sat: 10AM – 7PM <br />
          Sun: 12PM – 4PM
        </>
      ),
      hoverType: "none",
    },
  ];

  const baseCardClass =
    "flex items-center space-x-4 bg-gradient-to-b from-black/80 via-black/70 to-black/90 border border-white/5 rounded-xl p-4";

  const noHoverClass = "transition";

  // Email glow only
  const emailHoverClass =
    "transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_28px_rgba(212,175,55,0.45)]";

  const isExternalLink = (href) =>
    href?.startsWith("http://") || href?.startsWith("https://");

  return (
    <section
      id="contact"
      className="relative overflow-hidden scroll-mt-32 py-24 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.18),_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(30,64,175,0.25),_transparent_55%),linear-gradient(135deg,#000000,#020617,#000000)] text-white"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#8A6E1A] via-[#D4AF37] to-[#F7E27C] bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-lg">
            Have a question or want to book a service? We’re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-b from-black/80 via-black/70 to-black/90 border border-white/5 rounded-xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-black border-slate-700 text-white placeholder:text-slate-500 focus:border-[#D4AF37]"
              />

              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-black border-slate-700 text-white placeholder:text-slate-500 focus:border-[#D4AF37]"
              />

              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-black border-slate-700 text-white placeholder:text-slate-500 focus:border-[#D4AF37]"
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="bg-black border-slate-700 text-white placeholder:text-slate-500 focus:border-[#D4AF37] resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#8A6E1A] via-[#D4AF37] to-[#F7E27C] text-black font-semibold text-lg py-6 hover:brightness-110 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => {
              const hoverClass =
                item.hoverType === "email" ? emailHoverClass : noHoverClass;

              const target = isExternalLink(item.href) ? "_blank" : undefined;
              const rel = isExternalLink(item.href)
                ? "noopener noreferrer"
                : undefined;

              return (
                <a
                  key={index}
                  href={item.href}
                  target={target}
                  rel={rel}
                  className={`${baseCardClass} ${hoverClass}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-slate-400">{item.label}</p>

                    <p className="text-white font-medium break-words">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;