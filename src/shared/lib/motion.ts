// Numeric mirrors of globals.css's --ease-out/--ease-in-out. Framer Motion
// needs a bezier array, not a CSS var string, so keep both in sync by hand.
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

export const REDUCED_TRANSITION = { duration: 0.25, ease: "linear" as const };

export const DURATION = {
  press: 0.12,
  fast: 0.18,
  ui: 0.25,
  panel: 0.3,
  reveal: 0.6,
  hero: 0.7,
} as const;

export const STAGGER_CHILD = 0.06;
