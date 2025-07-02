import type { SVGProps } from "react";

export function MoleculeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

export function SodiumIonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {/* Nucleus */}
      <circle cx="50" cy="50" r="10" fill="hsl(var(--primary))" />

      {/* Shell 1: 2 electrons */}
      <g>
        <circle cx="50" cy="50" r="20" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="2" />
        <circle cx="50" cy="30" r="4" fill="hsl(var(--primary))" />
        <circle cx="50" cy="70" r="4" fill="hsl(var(--primary))" />
      </g>

      {/* Shell 2: 8 electrons */}
      <g>
        <circle cx="50" cy="50" r="35" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <circle cx="50" cy="15" r="4" fill="hsl(var(--primary))" />
        <circle cx="85" cy="50" r="4" fill="hsl(var(--primary))" />
        <circle cx="50" cy="85" r="4" fill="hsl(var(--primary))" />
        <circle cx="15" cy="50" r="4" fill="hsl(var(--primary))" />
        <circle cx="74.75" cy="25.25" r="4" fill="hsl(var(--primary))" />
        <circle cx="74.75" cy="74.75" r="4" fill="hsl(var(--primary))" />
        <circle cx="25.25" cy="74.75" r="4" fill="hsl(var(--primary))" />
        <circle cx="25.25" cy="25.25" r="4" fill="hsl(var(--primary))" />
      </g>

      {/* Shell 3: 1 electron */}
      <g>
        <circle cx="50" cy="50" r="48" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="4" />
        <circle cx="98" cy="50" r="4" fill="hsl(var(--primary))" />
      </g>
    </svg>
  );
}
