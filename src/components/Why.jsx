import { motion } from "framer-motion";
import { differentiators } from "../data/content";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function WhyDifferent() {
  return (
    <section className="px-3 md:px-4">
      <Reveal
        y={48}
        scale={0.97}
        duration={0.9}
        amount={0.05}
        className="relative mx-auto flex w-full max-w-[1409px] flex-col gap-8 overflow-hidden rounded-[20px] px-5 py-12 text-white sm:gap-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20 xl:min-h-[745px] xl:px-16 2xl:px-[105px]"
      >
        <img
          src="/whydifferentimage.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-brand opacity-90" />

        <Stagger className="relative grid items-start gap-4 md:grid-cols-2 md:gap-6">
          <StaggerItem as="h2" className="text-3xl font-semibold leading-tight md:text-4xl xl:text-[44px]">
            What Makes Me Different
          </StaggerItem>
          <StaggerItem
            as="p"
            className="max-w-[480px] text-base leading-7 text-white/90 md:ml-auto md:text-lg xl:text-xl xl:leading-[30px]"
          >
            Qualified, experienced, and focused on helping students understand Mathematics, not just
            memorise it.
          </StaggerItem>
        </Stagger>

        <Stagger as="ul" stagger={0.12} className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((d, i) => (
            <StaggerItem
              as="li"
              key={d.title}
              whileHover={{ y: -8 }}
              className="flex min-h-[220px] flex-col justify-between gap-8 rounded-3xl bg-white p-5 text-ink sm:min-h-[280px] xl:min-h-[337px]"
            >
              <h3 className="text-xl font-medium leading-8 sm:text-2xl sm:leading-9">
                <span className="block">{String(i + 1).padStart(2, "0")}.</span>
                {d.title}
              </h3>
              <p className="text-sm leading-6 text-gray-800 sm:text-base sm:leading-[26px]">{d.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="relative flex justify-center" delay={0.2}>
          <motion.a
            href="#book"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/10 bg-brand-dark px-6 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-[58px] sm:px-8 sm:text-base"
          >
            Start Learning Today
          </motion.a>
        </Reveal>
      </Reveal>
    </section>
  );
}