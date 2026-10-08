import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

const inner = "mx-auto w-full max-w-[1440px] px-5 md:px-8 xl:px-20";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const go = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#003FA7] text-white">
      <div className={`${inner} flex h-16 items-center justify-between md:h-[104px] md:py-5`}>
        <a href="#home" className="leading-tight">
          <span className="block text-lg font-bold md:text-xl">Master B.</span>
          <span className="block text-[11px] font-medium text-white/80">Online tutor</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => go(link.href)}
              className={`border-b-2 py-1 text-xs font-medium transition ${
                active === link.href ? "border-white" : "border-transparent text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#book" className="btn-light hidden !py-2.5 h-[48px] w-[219px] text-xs md:inline-flex">
          Book Free Demo
          <ArrowUpRight size={14} />
        </a>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className={`${inner} flex flex-col gap-1 pb-5 md:hidden`} aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => go(link.href)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="btn-light mt-2 text-xs">
            Book Free Demo
            <ArrowUpRight size={14} />
          </a>
        </nav>
      )}
    </header>
  );
}