import { Instagram, Linkedin, Twitter } from "lucide-react";
import { navLinks } from "../data/content";

const socials = [
  { label: "X", icon: Twitter, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="text-2xl font-bold text-brand">Master B.</a>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-3 text-xs font-medium">
          {navLinks.filter((l) => l.label !== "FAQs").map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand">{l.label}</a>
          ))}
          <a href="#faq" className="hover:text-brand">FAQ</a>
        </nav>
      </div>

      <div className="bg-brand text-white">
        <div className="wrap flex flex-col items-center gap-4 py-6 text-xs md:flex-row md:justify-between">
          <p>©{new Date().getFullYear()} Adetokunbo B. All Rights Reserved</p>
          <ul className="flex items-center gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-brand transition hover:bg-brand-soft"
                >
                  <Icon size={14} />
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}