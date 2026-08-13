import type { SVGProps } from "react";

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="29 20 20 22" fill="none" {...props}>
      <g filter="url(#moon-shadow)">
        <path
          d="M47.4688 25.1875C45.725 25.1875 44.5625 26.35 44.5625 28.0938C44.5625 26.35 43.4 25.1875 41.6562 25.1875C43.4 25.1875 44.5625 24.025 44.5625 22.2812C44.5625 24.025 45.725 25.1875 47.4688 25.1875Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.96875"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.4048 34.6386C48.5489 34.3079 48.1898 33.9961 47.8538 34.1307C46.7839 34.5592 45.6153 34.795 44.3914 34.795C39.2673 34.795 35.1134 30.6612 35.1134 25.5619C35.1134 24.2617 35.3834 23.0244 35.8707 21.9023C36.0144 21.5714 35.7102 21.2064 35.3743 21.3413C31.6738 22.8279 29.0625 26.4362 29.0625 30.6514C29.0625 36.1942 33.5776 40.6875 39.1473 40.6875C43.2933 40.6875 46.8549 38.1977 48.4048 34.6386Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.45312"
        />
      </g>
      <defs>
        <filter
          id="moon-shadow"
          x="0"
          y="0"
          width="77.5"
          height="77.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7.75" />
          <feGaussianBlur stdDeviation="11.625" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_moon" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_moon" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="5 5 21 21" fill="none" {...props}>
      <circle
        cx="15.3702"
        cy="15.3699"
        r="4.8825"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.395"
      />
      <g stroke="currentColor" strokeWidth="1.86" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.3704 7V7.36981" />
        <path d="M15.3704 23.3698V23.7399" />
        <path d="M7 15.37L7.36981 15.37" />
        <path d="M23.3698 15.37L23.74 15.37" />
        <path d="M9.4519 9.45105L9.7134 9.71255" />
        <path d="M21.0271 21.0262L21.2889 21.288" />
        <path d="M9.45148 21.2883L9.71297 21.0268" />
        <path d="M21.0266 9.71326L21.2883 9.4515" />
      </g>
    </svg>
  );
}
