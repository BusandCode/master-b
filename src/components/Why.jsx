import { differentiators } from "../data/content";

export default function WhyDifferent() {
  return (
    <section className="mx-auto w-full max-w-352.25 px-3 md:px-4">
      <div className="relative mx-auto flex w-full flex-col gap-10 overflow-hidden rounded-[20px] px-5 py-14 text-white md:px-[60px] md:py-20 lg:px-[105px] xl:min-h-[745px]">
        <img
          src="/whydifferentimage.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-brand opacity-90" />

        <div className="relative grid items-start gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-semibold leading-tight md:text-[44px]">
            What Makes Me Different
          </h2>
          <p className="max-w-[480px] text-base leading-[30px] text-white/90 md:ml-auto md:text-xl">
            Qualified, experienced, and focused on helping students understand Mathematics, not just
            memorise it.
          </p>
        </div>

        <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <li
              key={d.title}
              className="flex w-[288px] min-h-[337px] flex-col justify-between rounded-3xl bg-white p-5 text-ink"
            >
              <h3 className="text-[22px] font-semibold leading-9">
                <span className="block">{String(i + 1).padStart(2, "0")}.</span>
                {d.title}
              </h3>
              <p className="text-base leading-[26px] text-gray-800">{d.text}</p>
            </li>
          ))}
        </ul>

        <a
          href="#book"
          className="relative inline-flex h-14.5 items-center text-base justify-center self-center
           rounded-full border border-white/10 bg-brand-dark px-8 font-semibold
            text-white shadow-lg transition hover:bg-black focus-visible:outline-2
             focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Start Learning Today
        </a>
      </div>
    </section>
  );
}