import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";

const CARD_BG = "#F2F4F8";

export default function Testimonials() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.offsetWidth + 56 : el.clientWidth / 1.5;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-white py-16 md:py-20">
      <div className="wrap">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-lg text-gray-600 md:text-xl">What My Clients Say</p>
            <h2 className="mt-3 max-w-[600px] text-3xl font-semibold leading-tight md:text-[40px] md:leading-[50px]">
              The testimonials below are reviews and feedbacks from students and parents
            </h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 text-gray-500 transition hover:border-brand hover:text-brand md:h-16 md:w-16"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white md:h-16 md:w-16"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <ul
          ref={track}
          className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:mt-28 lg:gap-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="relative w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-7rem)/3)]"
            >
              <article className="relative h-full min-h-[365px]">
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
                <span
                  aria-hidden="true"
                  className="absolute right-[29px] top-[26px] h-12 w-12 rounded-full"
                  style={{ backgroundColor: CARD_BG }}
                />
                <span
                  aria-hidden="true"
                  className="absolute right-[19px] top-[6px] h-[26px] w-[26px] rounded-full"
                  style={{ backgroundColor: CARD_BG }}
                />

                <div className="relative z-10 flex h-full min-h-[365px] flex-col justify-between px-[34px] pb-11 pt-[30px]">
                  <div>
                    <h3 className="text-[22px] font-semibold text-slate-900">{t.name}</h3>
                    <p className="mt-2 text-lg text-gray-600">{t.role}</p>
                  </div>
                  <p className="text-base leading-[26px] text-gray-900">{t.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}