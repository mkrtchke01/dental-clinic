function Svg({ size = 24, sw = 2, children, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconTooth = (p) => (
  <Svg sw={1.8} {...p}>
    <path d="M12 3c-2.5 0-3.5 1.2-5 1.2C5.2 4.2 4 5.4 4 8c0 3 1 5.5 1.8 8.4.5 1.7.9 3.6 2.2 3.6 1 0 1.4-1.1 1.7-2.4.4-1.7.7-3.1 2.3-3.1s1.9 1.4 2.3 3.1c.3 1.3.7 2.4 1.7 2.4 1.3 0 1.7-1.9 2.2-3.6C19 13.5 20 11 20 8c0-2.6-1.2-3.8-3-3.8-1.5 0-2.5-1.2-5-1.2Z" />
  </Svg>
);

export const IconPhone = (p) => (
  <Svg {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </Svg>
);

export const IconArrow = (p) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const IconCheck = (p) => (
  <Svg sw={2.2} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </Svg>
);

export const IconImplant = (p) => (
  <Svg sw={1.7} {...p}>
    <path d="M12 2v8M9 6h6M7 14a5 5 0 0 1 10 0c0 4-2 8-5 8s-5-4-5-8Z" />
  </Svg>
);

export const IconWhitening = (p) => (
  <Svg sw={1.7} {...p}>
    <path d="M12 3v2M5 7l1.5 1.5M19 7l-1.5 1.5M9 12a3 3 0 0 1 6 0c0 3-1.5 8-3 8s-3-5-3-8Z" />
  </Svg>
);

export const IconBraces = (p) => (
  <Svg sw={1.7} {...p}>
    <path d="M4 9h16M4 15h16M8 9v6M12 9v6M16 9v6" />
  </Svg>
);

export const IconCavity = (p) => (
  <Svg sw={1.7} {...p}>
    <path d="M12 4c-2 0-3 1-5 1S4 6 4 9c0 3 1 5 2 8 .5 1.5 1 2 1.5 2s1-1 1.5-3 1-3 3-3 2.5 1 3 3 1 3 1.5 3 1-.5 1.5-2c1-3 2-5 2-8 0-3-1-4-3-4s-3-1-5-1Z" />
    <path d="M14.5 8.5 12 11l-1.2-1.2" />
  </Svg>
);

export const IconHeart = (p) => (
  <Svg sw={1.7} {...p}>
    <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
  </Svg>
);

export const IconPin = (p) => (
  <Svg {...p}>
    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const IconChevrons = (p) => (
  <Svg {...p}>
    <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
  </Svg>
);
