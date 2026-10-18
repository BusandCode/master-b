import { aboutParagraphs, stats } from "../data/content";

// Card widths on desktop (inside the 555px left column), so the rows break 2 / 3 / 1 as in the design
const widths = [
  "md:w-[317px]",
  "md:w-[224px]",
  "md:w-[175px]",
  "md:w-[176px]",
  "md:w-[176px]",
  "md:w-[277px]",
];

export default function MeetTutor() {
  return (
    <section id="about" className="px-3 md:px-4">
      {/* Frame: 1409 x 636, 80px padding, 91px gap between columns */}
      <div className="mx-auto grid w-full max-w-[1409px] gap-10 px-4 py-16 md:h-[636px] md:grid-cols-[555px_634px] md:items-start md:justify-center md:gap-[91px] md:px-16 md:py-20">
        {/* Left: 555 x 476, 60px between heading and cards */}
        <div className="flex flex-col md:h-[476px] md:w-[555px] md:gap-[60px]">
          <h2 className="text-4xl font-semibold md:text-[44px] md:leading-[52px]">Meet The Tutor</h2>
          <dl className="mt-10 flex flex-wrap gap-[14px] md:mt-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex min-h-[112px] w-[calc(50%-7px)] flex-col justify-between rounded-3xl border border-gray-100 bg-[#F9FAFB] p-5 ${widths[i] ?? ""}`}
              >
                <dt className="text-sm text-gray-600">{s.label}</dt>
                <dd className="mt-5 text-2xl font-semibold text-slate-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: 634 x 448, Montserrat Medium 18/28 */}
        <div className="space-y-7 text-lg font-medium leading-7 tracking-normal text-slate-600 md:h-[448px] md:w-[634px]">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}