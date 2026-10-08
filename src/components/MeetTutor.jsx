import { aboutParagraphs, stats } from "../data/content";

export default function MeetTutor() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="wrap grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Meet The Tutor</h2>
          <dl className="mt-10 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-mist p-5">
                <dt className="text-[11px] text-gray-500">{s.label}</dt>
                <dd className="mt-3 text-xl font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-5 text-sm leading-relaxed text-gray-600 md:pt-2">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}