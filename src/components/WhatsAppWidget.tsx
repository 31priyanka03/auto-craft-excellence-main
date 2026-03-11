import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  const phone = "07862148647";
  const link = `https://wa.me/${phone}?text=Hi, I would like to enquire about your services`;

  return (
    <>
      {/* WhatsApp Chat Card */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl z-[9999] overflow-hidden">

          {/* Header */}
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/auto.png"
                alt="Auto Group"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">Auto Group Ltd</p>
                <p className="text-xs opacity-90">Typically replies instantly</p>
              </div>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Chat body */}
          <div className="bg-[#ece5dd] p-4 space-y-3">
            <div className="bg-white p-3 rounded-lg shadow text-sm w-fit">
              Hi there 👋
            </div>

            <div className="bg-white p-3 rounded-lg shadow text-sm w-fit">
              How can I help you?
            </div>
          </div>

          {/* Start Chat Button */}
          <div className="p-4 bg-white">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full transition"
            >
              <FaWhatsapp size={20} />
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-[9999] transition hover:scale-110"
      >
        <FaWhatsapp size={26} />

        {/* Notification dot */}
        <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
    </>
  );
};

export default WhatsAppWidget;