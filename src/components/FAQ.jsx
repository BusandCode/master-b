import { useState } from "react";
import { Mail, Phone, Plus, Minus } from "lucide-react";
import { contact, faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="wrap grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-gray-600">
            Everything you need to know about my tutoring services. Can't find what you're looking for?
          </p>
          <ul className="mt-4 space-y-2 text-xs text-gray-700">
            <li className="flex items-center gap-2">
              <Mail size={14} />
              <a href={`mailto:${contact.email}`} className="hover:text-brand">{contact.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-brand">{contact.phone}</a>
            </li>
          </ul>
        </div>

        <ul className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium"
                >
                  <span>{i + 1}. {item.q}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center gap-2.5 rounded-[100px] border border-[#003FA7] bg-[#EBEADC] p-1 text-[#003FA7]"
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  id={`faq-${i}`}
                  role="region"
                  className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <p className="overflow-hidden px-4 text-xs leading-relaxed text-gray-600">
                    <span className="block pb-4">{item.a}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}