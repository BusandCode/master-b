import { useState } from "react";
import { ChevronDown, Mail, User } from "lucide-react";
import { gradeOptions } from "../data/content";

const initial = {
  fullName: "",
  email: "",
  whatsapp: "",
  grade: "",
  timezone: "",
  details: "",
};

const label = "block text-sm font-medium leading-4 text-gray-800";
const box =
  "w-full rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-brand focus:ring-1 focus:ring-brand";
const input = `${box} h-11 px-4`;

export default function BookDemo({ onSubmit }) {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (onSubmit) await onSubmit(form);
    setSent(true);
    setForm(initial);
  };

  return (
    <section id="book" className="px-3 py-16 md:px-4 md:py-[126px]">
      {/* Banner: 1409 x 576. Form: 600 x 828, overhanging the banner by 126px top and bottom, 72px from the right edge (left: 737px) */}
      <div className="relative mx-auto grid w-full max-w-[1409px] items-center md:h-[576px] md:grid-cols-[1fr_600px]">
        {/* Background lives in its own clipped layer so the form card can overhang the banner */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img
            src="/whydifferentimage.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand opacity-90" />
        </div>

        <div className="relative z-10 px-6 py-14 text-white md:py-0 md:pl-[78px] md:pr-8">
          <h2 className="max-w-[520px] text-3xl font-semibold leading-tight md:text-[40px] md:leading-[50px]">
            Ready to Transform Your Academic Future?
          </h2>
          <p className="mt-4 max-w-[500px] text-base leading-7 text-white/90 md:text-lg">
            Book your free demo class now and experience the difference personalized tutoring can make.
            No credit card required, no commitments.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="relative z-10 mx-4 mb-4 flex flex-col gap-8 rounded-[20px] bg-white px-5 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.12)] md:mx-0 md:mb-0 md:mr-[72px] md:-my-[126px] md:h-[828px] md:w-[600px]"
        >
          <h3 className="text-2xl font-semibold text-gray-900 md:text-[28px] md:leading-9">
            Book Your Free Demo Class
          </h3>

          <div className="flex flex-1 flex-col gap-6 md:justify-between md:gap-0">
            {sent && (
              <p role="status" className="rounded-lg bg-brand-soft px-3 py-2 text-xs font-medium text-brand">
                Request received. I will reply on WhatsApp or email shortly.
              </p>
            )}

            <label className={label}>
              Full name
              <span className="relative mt-2 block">
                <User size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={update}
                  required
                  placeholder="E.g Daniella Jones"
                  className={`${input} pl-11`}
                />
              </span>
            </label>

            <label className={label}>
              Email
              <span className="relative mt-2 block">
                <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  required
                  placeholder="Enter your email"
                  className={`${input} pl-11`}
                />
              </span>
            </label>

            <label className={label}>
              Whatsapp number
              <span className="mt-2 flex h-11 items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 transition focus-within:border-brand focus-within:ring-1 focus-within:ring-brand">
                <span className="flex shrink-0 items-center gap-1 text-base font-normal text-gray-700">
                  US
                  <ChevronDown size={14} />
                </span>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={update}
                  required
                  placeholder="+1 (555) 000-0000"
                  className="h-full w-full bg-transparent text-sm font-normal text-gray-900 outline-none placeholder:text-gray-500"
                />
              </span>
            </label>

            <label className={label}>
              Grade/Level
              <span className="relative mt-2 block">
                <select
                  name="grade"
                  value={form.grade}
                  onChange={update}
                  required
                  className={`${input} appearance-none pr-10 text-base font-normal ${
                    form.grade ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  <option value="" disabled>Select service type</option>
                  {gradeOptions.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-700" />
              </span>
            </label>

            <label className={label}>
              Country/Timezone
              <input
                name="timezone"
                value={form.timezone}
                onChange={update}
                placeholder="e.g., USA (EST)"
                className={`${input} mt-2 font-normal`}
              />
            </label>

            <label className={label}>
              Additional Details (optional)
              <textarea
                name="details"
                value={form.details}
                onChange={update}
                placeholder="Tell me briefly about your needs."
                className={`${box} mt-2 h-[104px] resize-none px-4 py-3 text-xs font-normal placeholder:text-xs`}
              />
            </label>
          </div>

          <button
            type="submit"
            className="h-[58px] w-full shrink-0 rounded-full bg-[#003FA7] text-base font-semibold text-white transition hover:bg-[#002f7d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003FA7]"
          >
            Book Free Demo Class
          </button>
        </form>
      </div>
    </section>
  );
}