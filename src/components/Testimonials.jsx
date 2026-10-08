import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth / 1.5), behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-mist py-16 md:py-24">
      <div className="wrap">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs text-gray-600">What My Clients Say</p>
            <h2 className="mt-2 max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
              The testimonials below are reviews and feedbacks from students and parents
            </h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:border-brand hover:text-brand"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <ul
          ref={track}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <li key={t.name} className="relative w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-3rem)/3)]">
              <div className="absolute -top-7 left-8 z-10 h-14 w-14 overflow-hidden rounded-full bg-brand-soft ring-4 ring-mist">
                <img src="/avatar.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <article className="h-full rounded-3xl rounded-tr-[3rem] bg-brand-soft/60 px-8 pb-8 pt-12">
                <h3 className="text-base font-medium">{t.name}</h3>
                <p className="mt-1 text-xs text-gray-600">{t.role}</p>
                <p className="mt-4 text-xs leading-relaxed text-gray-600">{t.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}