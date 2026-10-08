import { useState } from "react";
import { SquareCheckBig } from "lucide-react";
import { steps } from "../data/content";

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="wrap">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How it Works</h2>
          <p className="mt-2 text-sm text-gray-600">A simple, structured approach designed around your learning goals.</p>
        </div>

        <ol className="relative mx-auto mt-14 max-w-2xl space-y-5">
          <span aria-hidden="true" className="absolute left-4 top-4 bottom-4 w-px bg-gray-200" />
          {steps.map((step, i) => {
            const isActive = active === i;
            return (
              <li key={step.title} className="relative flex gap-5">
                <span
                  className={`relative z-10 mt-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition ${
                    isActive ? "bg-brand text-white" : "bg-brand-soft text-brand"
                  }`}
                >
                  <SquareCheckBig size={16} />
                </span>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "step" : undefined}
                  className={`flex-1 rounded-lg border p-5 text-left transition ${
                    isActive ? "border-brand bg-mist" : "border-gray-100 bg-mist/60 hover:border-gray-200"
                  }`}
                >
                  <span className="inline-block rounded-full bg-brand-soft px-2.5 py-0.5 text-[10px] font-medium text-brand">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">{step.text}</p>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}