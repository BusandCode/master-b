import { motion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

// Fades and slides an element in once, when it scrolls into view
export function Reveal({
  as = "div",
  children,
  delay = 0,
  x = 0,
  y = 32,
  scale = 1,
  duration = 0.7,
  amount = 0.2,
  ...rest
}) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

// Parent: reveals its StaggerItem children one after another
export function Stagger({
  as = "div",
  children,
  stagger = 0.1,
  delay = 0,
  amount = 0.15,
  ...rest
}) {
  const Comp = motion[as];
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ as = "div", children, x = 0, y = 28, scale = 1, ...rest }) {
  const Comp = motion[as];
  return (
    <Comp
      variants={{
        hidden: { opacity: 0, x, y, scale },
        show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.6, ease } },
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}