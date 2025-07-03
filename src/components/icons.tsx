import * as React from "react";
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
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .shell-1 { animation: orbit 8s linear infinite alternate; transform-origin: center center; }
        .shell-2 { animation: orbit 12s linear infinite alternate-reverse; transform-origin: center center; }
        .shell-3 { animation: orbit 16s linear infinite alternate; transform-origin: center center; }
      `}} />
      
      {/* Nucleus */}
      <circle cx="50" cy="50" r="10" fill="black" />

      {/* Orbits (static lines) */}
      <circle cx="50" cy="50" r="20" stroke="black" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      <circle cx="50" cy="50" r="35" stroke="black" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      <circle cx="50" cy="50" r="48" stroke="black" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      
      {/* Shell 1: 2 electrons */}
      <g className="shell-1">
        <circle cx="50" cy="30" r="3" fill="black" />
        <circle cx="50" cy="70" r="3" fill="black" />
      </g>

      {/* Shell 2: 8 electrons */}
      <g className="shell-2">
        <circle cx="50" cy="15" r="3" fill="black" />
        <circle cx="85" cy="50" r="3" fill="black" />
        <circle cx="50" cy="85" r="3" fill="black" />
        <circle cx="15" cy="50" r="3" fill="black" />
        <circle cx="74.75" cy="25.25" r="3" fill="black" />
        <circle cx="74.75" cy="74.75" r="3" fill="black" />
        <circle cx="25.25" cy="74.75" r="3" fill="black" />
        <circle cx="25.25" cy="25.25" r="3" fill="black" />
      </g>

      {/* Shell 3: 1 electron */}
      <g className="shell-3">
        <circle cx="98" cy="50" r="3" fill="black" />
      </g>
    </svg>
  );
}