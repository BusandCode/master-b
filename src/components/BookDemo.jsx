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
    <section id="book" className="px-3 py-16 md:px-4 md:py-24">
      <div className="mx-auto grid max-w-[88rem] items-center rounded-3xl bg-brand md:grid-cols-2 md:py-24">
        <div className="px-6 py-14 text-white md:px-12 md:py-0">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Ready to Transform Your Academic Future?</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85">
            Book your free demo class now and experience the difference personalized tutoring can make. No
            credit card required, no commitments.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="mx-4 mb-4 space-y-4 rounded-xl bg-white p-6 shadow-xl md:-my-48 md:mx-0 md:mb-0 md:mr-12 md:p-7"
        >
          <h3 className="text-lg font-semibold">Book Your Free Demo Class</h3>

          {sent && (
            <p role="status" className="rounded-lg bg-brand-soft px-3 py-2 text-xs font-medium text-brand">
              Request received. I will reply on WhatsApp or email shortly.
            </p>
          )}

          <label className="block text-xs font-medium text-gray-600">
            Full name
            <span className="relative mt-1.5 block">
              <User size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="fullName"
                value={form.fullName}
                onChange={update}
                required
                placeholder="E.g Daniella Jones"
                className="field pl-9"
              />
            </span>
          </label>

          <label className="block text-xs font-medium text-gray-600">
            Email
            <span className="relative mt-1.5 block">
              <Mail size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                required
                placeholder="Enter your email"
                className="field pl-9"
              />
            </span>
          </label>

          <label className="block text-xs font-medium text-gray-600">
            Whatsapp number
            <span className="mt-1.5 flex gap-2">
              <span className="field flex w-20 shrink-0 items-center gap-1 text-gray-600">US</span>
              <input
                type="tel"
                name="whatsapp"
                value={form.whatsapp}
                onChange={update}
                required
                placeholder="+1 (555) 000-0000"
                className="field"
              />
            </span>
          </label>

          <label className="block text-xs font-medium text-gray-600">
            Grade/Level
            <span className="relative mt-1.5 block">
              <select name="grade" value={form.grade} onChange={update} required className="field appearance-none pr-9">
                <option value="" disabled>Select service type</option>
                {gradeOptions.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </span>
          </label>

          <label className="block text-xs font-medium text-gray-600">
            Country/Timezone
            <input
              name="timezone"
              value={form.timezone}
              onChange={update}
              placeholder="e.g., USA (EST)"
              className="field mt-1.5"
            />
          </label>

          <label className="block text-xs font-medium text-gray-600">
            Additional Details (optional)
            <textarea
              name="details"
              value={form.details}
              onChange={update}
              rows={4}
              placeholder="Tell me briefly about your needs."
              className="field mt-1.5 resize-none"
            />
          </label>

          <button type="submit" className="btn-primary w-full !rounded-lg">Book Free Demo</button>
        </form>
      </div>
    </section>
  );
}