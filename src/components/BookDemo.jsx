import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, User } from "lucide-react";
import { gradeOptions } from "../data/content";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

// Set VITE_FORM_ENDPOINT in your .env file, e.g. https://formspree.io/f/xxxxxxxx
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const initial = {
  fullName: "",
  email: "",
  whatsapp: "",
  grade: "",
  timezone: "",
  details: "",
  _gotcha: "", // hidden spam trap, real people never fill it in
};

// Field wrapper: 560 x 70 = 18px label line + 8px gap + 44px input
const label = "block text-sm font-medium leading-[18px] text-gray-800";
// Input: 560 x 44, 14px/10px padding, 8px radius, 1px border
const box =
  "w-full rounded-lg border border-gray-200 bg-white px-[14px] py-[10px] text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-brand focus:ring-1 focus:ring-brand";
const input = `${box} h-11`;

export default function BookDemo({ onSubmit }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    if (form._gotcha) return; // a bot filled the hidden field

    if (!FORM_ENDPOINT) {
      console.error("Missing VITE_FORM_ENDPOINT. Add it to your .env file and restart the dev server.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New free demo class request from ${form.fullName}`,
          "Full name": form.fullName,
          email: form.email, // also used as the reply-to address
          "WhatsApp number": form.whatsapp,
          "Grade/Level": form.grade,
          "Country/Timezone": form.timezone || "Not provided",
          "Additional details": form.details || "None",
        }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setForm(initial);
      setStatus("sent");
      if (onSubmit) onSubmit(form);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="book" className="px-3 py-12 sm:py-16 md:px-4 xl:py-[126px]">
      {/* Desktop (xl+): banner 1409 x 576, form 600 x 828 overhanging 126px top and bottom, 72px from the right edge.
          Below xl: the form stacks under the text and overlaps the banner's bottom edge. */}
      <div className="relative mx-auto w-full max-w-[1409px]">
        <Reveal
          y={40}
          scale={0.97}
          duration={0.9}
          amount={0.1}
          className="relative overflow-hidden rounded-[20px] xl:h-[576px]"
        >
          <img
            src="/whydifferentimage.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-brand opacity-90" />

          <Stagger
            stagger={0.15}
            delay={0.2}
            className="relative z-10 px-6 pb-20 pt-12 text-white sm:px-10 sm:pb-24 sm:pt-14 xl:flex xl:h-full xl:w-[calc(100%-672px)] xl:flex-col xl:justify-center xl:py-0 xl:pl-[78px] xl:pr-8"
          >
            <StaggerItem
              as="h2"
              x={-30}
              y={0}
              className="max-w-[520px] text-3xl font-semibold leading-tight sm:text-4xl xl:text-[40px] xl:leading-[50px]"
            >
              Ready to Transform Your Academic Future?
            </StaggerItem>
            <StaggerItem as="p" x={-30} y={0} className="mt-4 max-w-[500px] text-base leading-7 text-white/90 xl:text-lg">
              Book your free demo class now and experience the difference personalized tutoring can make.
              No credit card required, no commitments.
            </StaggerItem>
          </Stagger>
        </Reveal>

        <Reveal
          as="form"
          y={48}
          delay={0.2}
          amount={0.1}
          onSubmit={submit}
          className="relative z-10 mx-auto -mt-12 flex w-[calc(100%-2rem)] max-w-[600px] flex-col gap-8 rounded-[20px] bg-white px-5 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.12)] xl:absolute xl:-top-[126px] xl:right-[72px] xl:mx-0 xl:mt-0 xl:min-h-[828px] xl:w-[600px]"
        >
          <h3 className="text-2xl font-semibold text-gray-900 md:text-[28px] md:leading-9">
            Book Your Free Demo Class
          </h3>

          <input
            type="text"
            name="_gotcha"
            value={form._gotcha}
            onChange={update}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <Stagger stagger={0.07} delay={0.3} className="flex flex-1 flex-col gap-6 xl:justify-between xl:gap-0">
            <StaggerItem as="label" className={label}>
              Full name
              <span className="relative mt-2 block">
                <User size={16} className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={update}
                  required
                  placeholder="E.g Daniella Jones"
                  className={`${input} pl-[38px]`}
                />
              </span>
            </StaggerItem>

            <StaggerItem as="label" className={label}>
              Email
              <span className="relative mt-2 block">
                <Mail size={16} className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  required
                  placeholder="Enter your email"
                  className={`${input} pl-[38px]`}
                />
              </span>
            </StaggerItem>

            <StaggerItem as="label" className={label}>
              Whatsapp number
              <span className="mt-2 flex h-11 items-center gap-2 rounded-lg border border-gray-200 bg-white px-[14px] py-[10px] transition focus-within:border-brand focus-within:ring-1 focus-within:ring-brand">
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
                  className="h-full w-full min-w-0 bg-transparent text-sm font-normal text-gray-900 outline-none placeholder:text-gray-500"
                />
              </span>
            </StaggerItem>

            <StaggerItem as="label" className={label}>
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
                <ChevronDown size={16} className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 text-gray-700" />
              </span>
            </StaggerItem>

            <StaggerItem as="label" className={label}>
              Country/Timezone
              <input
                name="timezone"
                value={form.timezone}
                onChange={update}
                placeholder="e.g., USA (EST)"
                className={`${input} mt-2 font-normal`}
              />
            </StaggerItem>

            <StaggerItem as="label" className={label}>
              Additional Details (optional)
              <textarea
                name="details"
                value={form.details}
                onChange={update}
                placeholder="Tell me briefly about your needs."
                className={`${box} mt-2 h-[104px] resize-none text-xs font-normal placeholder:text-xs`}
              />
            </StaggerItem>
          </Stagger>

          <AnimatePresence>
            {status === "sent" && (
              <motion.p
                key="sent"
                role="status"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-lg bg-brand-soft px-3 py-2 text-sm font-medium text-brand"
              >
                Request received. I will reply on WhatsApp or email shortly.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                key="error"
                role="alert"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700"
              >
                Sorry, your request could not be sent. Please try again, or email me directly.
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={status === "sending" ? undefined : { scale: 1.02 }}
            whileTap={status === "sending" ? undefined : { scale: 0.98 }}
            className="flex h-[58px] w-full shrink-0 items-center justify-center gap-2.5 rounded-[48px] bg-[#003FA7] px-5 py-4 text-base font-semibold text-white transition-colors hover:bg-[#002f7d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003FA7] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Book Free Demo Class"}
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}