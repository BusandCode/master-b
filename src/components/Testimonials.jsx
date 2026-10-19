import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";
import { Reveal } from "./Reveal";

const CARD_BG = "#F2F4F8";

export default function Testimonials() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    // Use the real gap, since it changes with screen size
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : el.clientWidth / 1.5;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="wrap">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base text-gray-600 sm:text-lg lg:text-xl">What My Clients Say</p>
            <h2 className="mt-3 max-w-[600px] text-2xl font-semibold leading-tight sm:text-3xl lg:text-[40px] lg:leading-[50px]">
              The testimonials below are reviews and feedbacks from students and parents
            </h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <motion.button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 text-gray-500 transition-colors hover:border-brand hover:text-brand lg:h-16 lg:w-16"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white lg:h-16 lg:w-16"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </Reveal>

        <ul
          ref={track}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:mt-16 sm:gap-6 lg:mt-28 lg:gap-8 xl:gap-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            // Each card animates in when it scrolls into view, including when you click through with the arrows
            <Reveal
              as="li"
              key={t.name}
              x={40}
              y={0}
              delay={(i % 3) * 0.12}
              className="relative w-[85%] min-w-[280px] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-4rem)/3)] xl:w-[calc((100%-7rem)/3)]"
            >
              <article className="relative h-full min-h-[320px] sm:min-h-[365px]">
                {/* Card shape: main body, lower-right block, inner fillet, and the two bubbles */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 right-[86px] rounded-[40px]"
                  style={{ backgroundColor: CARD_BG }}
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 right-0 top-[84px] rounded-[40px]"
                  style={{ backgroundColor: CARD_BG }}
                />
                <span
                  aria-hidden="true"
                  className="absolute right-[86px] top-[60px] h-6 w-6"
                  style={{
                    background: `radial-gradient(circle at 100% 0, transparent 24px, ${CARD_BG} 24.5px)`,
                  }}
                />
                <motion.span
                  aria-hidden="true"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-[29px] top-[26px] h-12 w-12 rounded-full"
                  style={{ backgroundColor: CARD_BG }}
                />
                <motion.span
                  aria-hidden="true"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2.6 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-[19px] top-[6px] h-[26px] w-[26px] rounded-full"
                  style={{ backgroundColor: CARD_BG }}
                />

                <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between gap-6 px-6 pb-8 pt-6 sm:min-h-[365px] sm:px-[34px] sm:pb-11 sm:pt-[30px]">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl xl:text-[22px]">{t.name}</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg">{t.role}</p>
                  </div>
                  <p className="text-sm leading-6 text-gray-900 sm:text-base sm:leading-[26px]">{t.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}