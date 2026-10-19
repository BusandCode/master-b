import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, Plus, Minus } from "lucide-react";
import { contact, faqs } from "../data/content";
import { ease, Reveal, Stagger, StaggerItem } from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="wrap grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <Stagger stagger={0.12}>
          <StaggerItem as="h2" className="text-3xl font-semibold leading-tight md:text-4xl">
            Frequently Asked Questions
          </StaggerItem>
          <StaggerItem as="p" className="mt-4 max-w-xs text-xs leading-relaxed text-gray-600">
            Everything you need to know about my tutoring services. Can't find what you're looking for?
          </StaggerItem>
          <StaggerItem as="ul" className="mt-4 space-y-2 text-xs text-gray-700">
            <li className="flex items-center gap-2">
              <Mail size={14} />
              <a href={`mailto:${contact.email}`} className="hover:text-brand">{contact.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-brand">{contact.phone}</a>
            </li>
          </StaggerItem>
        </Stagger>

        <Stagger as="ul" stagger={0.08} className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem as="li" key={item.q} y={20} className="rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium"
                >
                  <span>{i + 1}. {item.q}</span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center gap-2.5 rounded-[100px] border border-[#003FA7] bg-[#EBEADC] p-1 text-[#003FA7]"
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-xs leading-relaxed text-gray-600">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}