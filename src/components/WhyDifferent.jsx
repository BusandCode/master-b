import { differentiators } from "../data/content";

export default function WhyDifferent() {
  return (
    <section className="px-3 md:px-4 max-w-[1400px] mx-auto">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10 overflow-hidden rounded-[20px] px-5 py-14 text-white md:px-[60px] md:py-20 xl:min-h-[711px]">
        <img
          src="/whydifferentimage.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-brand opacity-90" />

        <div className="relative grid items-start gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-semibold md:text-4xl">What Makes Me Different</h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/85 md:ml-auto">
            Qualified, experienced, and focused on helping students understand Mathematics, not just
            memorise it.
          </p>
        </div>

        <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <li key={d.title} className="flex min-h-64 flex-col justify-between rounded-xl bg-white p-6 text-ink">
              <h3 className="text-lg font-semibold leading-snug">
                <span className="block">{String(i + 1).padStart(2, "0")}.</span>
                {d.title}
              </h3>
              <p className="mt-8 text-[11px] leading-relaxed text-gray-600">{d.text}</p>
            </li>
          ))}
        </ul>

        <a
          href="#book"
          className="relative inline-flex self-center rounded-full bg-brand-dark px-6 py-3 text-xs font-semibold text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Start Learning Today
        </a>
      </div>
    </section>
  );
}