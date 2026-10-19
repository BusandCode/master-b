import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { heroChips } from "../data/content";
import { whatsappLink } from "../data/whatsapp";
import { ease } from "./Reveal";

const flags = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
];

// Entrance used by the left-hand text blocks
const enter = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center overflow-hidden bg-mist xl:min-h-[758px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,63,167,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,63,167,.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, #000 40%, transparent)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:grid-cols-[1.15fr_1fr] md:px-8 md:py-20 xl:px-[81px]">
        <div className="max-w-xl xl:max-w-none">
          <motion.span
            {...enter(0.05)}
            className="inline-block rounded-full border border-brand/20 bg-brand-soft px-3.5 py-2 text-sm font-medium text-brand"
          >
            First Class Mathematics Graduate · IGCSE Certified Tutor
          </motion.span>
          <motion.h1
            {...enter(0.15)}
            className="mt-3.5 text-[2.75rem] font-bold leading-[1.1] text-[#333] md:text-5xl xl:whitespace-nowrap xl:text-[clamp(2.75rem,3.6vw,3.4rem)]"
          >
            Learn Mathematics,
            <br className="hidden xl:block" /> from an Experienced,
            <br className="hidden xl:block" /> Certified Tutor
          </motion.h1>
          <motion.p {...enter(0.25)} className="mt-5 max-w-[34rem] text-lg leading-[1.65] text-slate-600">
            6+ years of teaching experience. Real-time interactive lessons on a digital whiteboard.
            Personalised 1-on-1 learning tailored to every student. Clear explanations that build
            understanding, confidence, and results.
          </motion.p>
          <motion.div {...enter(0.35)} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href={whatsappLink("Hello Master B, I would like to book a consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary !px-9 !py-4 !text-base h-[58px] w-[225px]"
            >
              Book Consultation
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-light !px-9 !py-4 !text-base !text-[#333] shadow-md"
            >
              How it Works
            </motion.a>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative ml-auto aspect-[500/570] w-full max-w-[500px] overflow-hidden rounded-[20px] bg-brand-soft"
          >
            <img src="/tutor.jpg" alt="Adetokunbo B., online Mathematics tutor" className="h-full w-full -scale-x-100 object-cover object-top" />
          </motion.div>

          <ul className="absolute top-8 right-0 flex flex-col items-end gap-2.5 md:-right-18">
            {heroChips.map((chip, i) => (
              <motion.li
                key={chip}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.7 + i * 0.12 },
                  x: { type: "spring", stiffness: 140, damping: 16, delay: 0.7 + i * 0.12 },
                  y: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: 1.6 + i * 0.12 },
                }}
                className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[11px] font-semibold shadow-md"
              >
                <CircleCheck size={14} className="text-brand" />
                {chip}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 1 },
              x: { duration: 0.7, ease, delay: 1 },
              y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
            }}
            className="absolute -bottom-4 left-0 text-[#1D2939] flex items-center gap-2.5 rounded-full bg-white py-2.5 pl-3 pr-4 text-[14px] font-semibold shadow-md md:-left-6"
          >
            <span aria-hidden="true" className="flex -space-x-2">
              {flags.map((flag) => (
                <img
                  key={flag.code}
                  src={`https://flagcdn.com/w80/${flag.code}.png`}
                  alt=""
                  loading="lazy"
                  className="h-6 w-6 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </span>
            Trusted by Students and Parents Worldwide
          </motion.div>
        </div>
      </div>
    </section>
  );
}