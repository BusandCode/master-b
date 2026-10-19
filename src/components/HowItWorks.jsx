import { useState } from "react";
import { motion } from "framer-motion";
import { SquareCheckBig } from "lucide-react";
import { steps } from "../data/content";
import { ease, Reveal } from "./Reveal";

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How it Works</h2>
          <p className="mt-2 text-sm text-gray-600">A simple, structured approach designed around your learning goals.</p>
        </Reveal>

        <ol className="relative mx-auto mt-14 max-w-2xl space-y-5">
          {/* The timeline line draws itself downwards */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease }}
            style={{ originY: 0 }}
            className="absolute left-4 top-4 bottom-4 w-px bg-gray-200"
          />
          {steps.map((step, i) => {
            const isActive = active === i;
            return (
              <Reveal as="li" key={step.title} x={-30} y={20} className="relative flex gap-5">
                <motion.span
                  animate={{ scale: isActive ? 1.12 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className={`relative z-10 mt-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors ${
                    isActive ? "bg-brand text-white" : "bg-brand-soft text-brand"
                  }`}
                >
                  <SquareCheckBig size={16} />
                </motion.span>
                <motion.button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "step" : undefined}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className={`flex-1 rounded-lg border p-5 text-left transition-colors ${
                    isActive
                      ? "border-brand bg-mist"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className="inline-block rounded-full bg-brand-soft px-2.5 py-0.5 text-[10px] font-medium text-brand">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">{step.text}</p>
                </motion.button>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}