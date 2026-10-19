import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { navLinks } from "../data/content";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

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

const links = [...navLinks.filter((l) => l.label !== "FAQs"), { label: "FAQ", href: "#faq" }];

export default function Footer() {
  return (
    <footer className="overflow-x-clip">
      <div className="bg-[#F9FAFB]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-5 py-10 text-center sm:px-8 sm:py-12 lg:min-h-[190px] lg:flex-row lg:justify-between lg:px-12 lg:py-0 lg:text-left xl:px-[98px]">
          <Reveal as="a" href="#home" x={-24} y={0} className="block">
            <span className="block text-4xl font-bold leading-tight text-[#003FA7] lg:text-[40px]">Master B.</span>
            <span className="mt-1 block text-sm font-semibold text-gray-500">Online Maths Tutor</span>
          </Reveal>

          <Stagger
            as="nav"
            stagger={0.08}
            aria-label="Footer"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-black sm:text-base lg:gap-x-10 xl:gap-x-[60px]"
          >
            {links.map((l) => (
              <StaggerItem
                as="a"
                key={l.href}
                href={l.href}
                y={14}
                whileHover={{ y: -2 }}
                className="hover:text-[#003FA7]"
              >
                {l.label}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      <div className="bg-[#003FA7] text-white">
        <Stagger
          stagger={0.12}
          className="mx-auto grid w-full max-w-[1440px] items-center gap-5 px-5 py-8 text-center sm:px-8 lg:min-h-[140px] lg:grid-cols-3 lg:gap-6 lg:px-12 lg:py-0 lg:text-left xl:px-[98px]"
        >
          <StaggerItem as="ul" className="order-1 flex items-center justify-center gap-3 lg:order-2">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <motion.a
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10 sm:h-[60px] sm:w-[60px]"
                >
                  <Icon size={20} />
                </motion.a>
              </li>
            ))}
          </StaggerItem>

          <StaggerItem as="p" className="order-2 text-sm sm:text-base lg:order-1">
            ©{new Date().getFullYear()} Master B. All Rights Reserved.
          </StaggerItem>

          <StaggerItem
            as="a"
            href="#"
            className="order-3 text-sm hover:underline sm:text-base lg:justify-self-end"
          >
            Terms and Conditions
          </StaggerItem>
        </Stagger>
      </div>
    </footer>
  );
}