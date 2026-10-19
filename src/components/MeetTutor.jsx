import { aboutParagraphs, stats } from "../data/content";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

// Card widths for the pixel-exact desktop layout (2xl and up), so the rows break 2 / 3 / 1 as in the design
const widths = [
  "2xl:w-[317px]",
  "2xl:w-[224px]",
  "2xl:w-[175px]",
  "2xl:w-[176px]",
  "2xl:w-[176px]",
  "2xl:w-[277px]",
];

export default function MeetTutor() {
  return (
    <section id="about" className="px-3 md:px-4">
      <div className="mx-auto grid w-full max-w-[1409px] gap-10 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-12 lg:py-20 2xl:h-[636px] 2xl:grid-cols-[555px_634px] 2xl:justify-center 2xl:gap-[91px] 2xl:px-16">
        <div className="flex flex-col gap-8 lg:gap-12 2xl:h-[476px] 2xl:w-[555px] 2xl:gap-[60px]">
          <Reveal as="h2" x={-30} y={0} className="text-3xl font-semibold sm:text-4xl lg:text-[44px] lg:leading-[52px]">
            Meet The Tutor
          </Reveal>
          <Stagger as="dl" stagger={0.08} className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 2xl:flex 2xl:flex-wrap">
            {stats.map((s, i) => (
              <StaggerItem
                key={s.label}
                scale={0.9}
                whileHover={{ y: -4 }}
                className={`flex min-h-[104px] flex-col justify-between rounded-3xl border border-gray-100 bg-[#F9FAFB] p-5 2xl:min-h-[112px] ${widths[i] ?? ""}`}
              >
                <dt className="text-sm text-gray-600">{s.label}</dt>
                <dd className="mt-5 break-words text-xl font-semibold text-slate-900 sm:text-2xl">{s.value}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger
          stagger={0.18}
          className="space-y-6 text-base font-medium leading-7 tracking-normal text-slate-600 sm:space-y-7 sm:text-lg 2xl:h-[448px] 2xl:w-[634px]"
        >
          {aboutParagraphs.map((p) => (
            <StaggerItem as="p" key={p.slice(0, 24)} y={24}>
              {p}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}