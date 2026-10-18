import { Instagram, Linkedin } from "lucide-react";
import { navLinks } from "../data/content";

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { label: "X", icon: XIcon, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#F9FAFB]">
        <div className="wrap flex flex-col gap-8 py-12 md:min-h-[190px] md:flex-row md:items-center md:justify-between md:py-0">
          <a href="#home" className="block">
            <span className="block text-4xl font-bold leading-tight text-[#003FA7] md:text-[40px]">Master B.</span>
            <span className="mt-1 block text-sm font-semibold text-gray-500">Online Maths Tutor</span>
          </a>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-[60px] gap-y-3 text-base font-medium text-black">
            {navLinks.filter((l) => l.label !== "FAQs").map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#003FA7]">{l.label}</a>
            ))}
            <a href="#faq" className="hover:text-[#003FA7]">FAQ</a>
          </nav>
        </div>
      </div>

      <div className="bg-[#003FA7] text-white">
        <div className="wrap grid items-center gap-6 py-8 text-center md:min-h-[140px] md:grid-cols-3 md:py-0 md:text-left">
          <p className="text-base">©{new Date().getFullYear()} Master B. All Rights Reserved.</p>
          <ul className="flex items-center justify-center gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="text-base hover:underline md:justify-self-end">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}