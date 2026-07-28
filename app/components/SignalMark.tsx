interface SignalMarkProps {
  size?: number;
}

export default function SignalMark({ size = 22 }: SignalMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="signal-mark"
    >
      <rect x="2" y="12" width="4" height="10" rx="1" fill="var(--amber)" className="bar bar-1" />
      <rect x="10" y="7" width="4" height="15" rx="1" fill="var(--cyan)" className="bar bar-2" />
      <rect x="18" y="2" width="4" height="20" rx="1" fill="var(--amber)" className="bar bar-3" />
      <style>{`
        .bar { transform-origin: bottom center; animation: pulse 2.4s ease-in-out infinite; }
        .bar-1 { animation-delay: 0s; }
        .bar-2 { animation-delay: 0.3s; }
        .bar-3 { animation-delay: 0.6s; }
        @keyframes pulse {
          0%, 100% { transform: scaleY(0.75); }
          50% { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bar { animation: none; }
        }
      `}</style>
    </svg>
  );
}
