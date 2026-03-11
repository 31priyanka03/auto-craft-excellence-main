import { useEffect, useMemo, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  // IMPORTANT:
  // wa.me needs international format (no +). UK example: 44 + number without leading 0.
  // Your number: 07862148647 -> wa.me: 447862148647
  const waNumber = "447862148647";

  const waText = useMemo(
    () =>
      encodeURIComponent(
        "Hi! I’d like to enquire about: "
      ),
    []
  );

  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  // Close when clicking outside the popup
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      if (!boxRef.current) return;
      if (!boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <>
      {/* POPUP */}
      {open && (
        <div
          ref={boxRef}
          className="
            fixed bottom-24 right-6 z-[9999]
            w-[320px] overflow-hidden rounded-2xl
            border border-white/10
            shadow-[0_26px_70px_rgba(0,0,0,0.65)]
            bg-black/80 backdrop-blur-xl
          "
        >
          {/* Header (premium) */}
          <div className="relative px-4 py-3 flex items-center gap-3 border-b border-white/10">
            <div className="h-10 w-10 rounded-xl bg-black border border-white/10 overflow-hidden flex items-center justify-center">
              {/* Your site logo name is 2.png */}
              <img src="/2.png" alt="Unique Platinum Services" className="h-full w-full object-contain p-1" />
            </div>

            <div className="min-w-0">
              <div className="text-white font-semibold text-sm leading-tight">
                Unique Platinum Services
              </div>
              <div className="text-[11px] text-white/65">
                WhatsApp support • Reply fast
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="ml-auto p-1.5 rounded-full hover:bg-white/10 transition text-white/80 hover:text-white"
              aria-label="Close WhatsApp popup"
            >
              <X size={18} />
            </button>

            {/* small green accent bar */}
            <div className="absolute left-0 top-0 h-full w-[3px] bg-[#25D366]" />
          </div>

          {/* Body */}
          <div className="px-4 py-4 bg-gradient-to-b from-black/10 to-black/40">
            <div className="space-y-3">
              <div className="w-fit max-w-[90%] rounded-2xl px-4 py-3 bg-white text-slate-900 text-sm shadow-sm">
                Hi there 👋
              </div>

              <div className="w-fit max-w-[95%] rounded-2xl px-4 py-3 bg-white text-slate-900 text-sm shadow-sm">
                How can we help you today?
              </div>
            </div>

            {/* CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5 w-full inline-flex items-center justify-center gap-2
                rounded-full py-3 font-semibold
                bg-[#25D366] hover:bg-[#1fb85a] text-white
                transition active:scale-[0.98]
                shadow-[0_14px_35px_rgba(37,211,102,0.25)]
              "
            >
              <FaWhatsapp size={20} />
              Start Chat
            </a>

            <div className="mt-2 text-center text-[11px] text-white/55">
              Opens chat with: <span className="text-white/75">{waNumber}</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          fixed bottom-6 right-6 z-[9999]
          h-14 w-14 rounded-full
          bg-[#25D366] hover:bg-[#1fb85a]
          text-white shadow-[0_18px_40px_rgba(0,0,0,0.45)]
          flex items-center justify-center
          transition transform hover:scale-110 active:scale-95
        "
        aria-label="Open WhatsApp"
      >
        <FaWhatsapp size={26} />
        <span className="absolute top-1.5 right-1.5 h-3 w-3 rounded-full bg-red-500 border-2 border-white" />
      </button>
    </>
  );
};

export default WhatsAppFloat;