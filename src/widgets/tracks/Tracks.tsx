import type { JSX } from "react";
import { Reveal, SectionGlow, SectionHeading } from "@/shared/ui";
import { TRACKS, type Track, FrontendIcon, BackendIcon } from "@/entities/track";

const TRACK_ICON_CLASS =
  "pointer-events-none absolute -bottom-2 -right-10 h-1/2 w-1/2 text-fg opacity-15 transition-transform duration-300 group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:scale-125";

const TRACK_ART: Partial<Record<string, JSX.Element>> = {
  frontend: <FrontendIcon className={TRACK_ICON_CLASS} />,
  backend: <BackendIcon className={TRACK_ICON_CLASS} />,
  devops: (
    <svg
      aria-hidden
      viewBox="0 0 30 26"
      fill="none"
      className="pointer-events-none absolute -bottom-2 -right-10 h-1/2 w-1/2 text-fg opacity-15 transition-transform duration-300 group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:scale-125"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5065 1.66222C21.6108 -0.550525 25.0814 -0.55468 27.1813 1.65343C29.3145 3.89658 29.31 7.54614 27.2058 9.7589C25.1707 11.8985 21.1786 12.4815 18.0173 12.8254C17.9617 12.8314 17.9235 12.8798 17.9235 12.9357C17.9235 13.0602 18.0078 13.1732 18.1316 13.1868C21.2742 13.5324 25.1952 14.1274 27.2058 16.2413C29.31 18.4541 29.3145 22.1036 27.1813 24.3468C25.0814 26.5549 21.6108 26.5507 19.5065 24.338C17.5399 22.2699 16.8345 17.9036 16.5227 14.596C16.518 14.546 16.4747 14.5128 16.4245 14.5128C16.3389 14.5128 16.2629 14.572 16.2547 14.6572C15.94 17.9573 15.2325 22.2827 13.278 24.338C11.1738 26.5507 7.70312 26.5549 5.60322 24.3468C3.47003 22.1036 3.47453 18.4541 5.5788 16.2413C7.60404 14.112 11.5675 13.5236 14.7215 13.179C14.8416 13.1659 14.9245 13.0565 14.9245 12.9357C14.9245 12.8836 14.8884 12.8386 14.8366 12.833C11.6646 12.4901 7.62874 11.9142 5.5788 9.7589C3.47453 7.54614 3.47003 3.89658 5.60322 1.65343C7.70312 -0.55468 11.1738 -0.550525 13.278 1.66222C15.2047 3.68826 15.919 7.92026 16.2404 11.2014C16.2495 11.2934 16.3321 11.3585 16.4245 11.3585C16.4816 11.3585 16.5313 11.3187 16.5368 11.2618C16.8554 7.97236 17.568 3.70074 19.5065 1.66222Z"
        fill="currentColor"
      />
      <path
        opacity="0.45"
        d="M13.9885 1.98226C16.0776 1.40872 17.6239 1.45466 18.0236 2.24893C18.7219 3.63615 15.6574 6.78138 11.1786 9.27376C6.69986 11.7661 2.50267 12.6622 1.80435 11.275C1.39822 10.468 2.26467 9.0669 3.94206 7.54523L4.0216 7.99411C3.41205 8.74911 3.15719 9.40443 3.37584 9.83902C3.92002 10.9196 7.18942 10.2216 10.6784 8.27991C14.1674 6.33824 16.5542 3.8884 16.0106 2.8077C15.8008 2.39111 15.1857 2.23882 14.3091 2.32045L13.9885 1.98226Z"
        fill="currentColor"
      />
    </svg>
  ),
  ai: (
    <svg
      aria-hidden
      viewBox="0 0 34 26"
      fill="none"
      className="pointer-events-none absolute -bottom-2 -right-10 h-1/2 w-1/2 text-fg opacity-15 transition-transform duration-300 group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:scale-125"
    >
      <path
        opacity="0.45"
        d="M21.6367 7.85086C23.0031 7.68325 23.976 7.84652 24.1635 8.36654C24.4912 9.27482 22.2983 10.9277 19.2656 12.0583C16.2328 13.1888 13.5085 13.3691 13.1809 12.4608C12.9903 11.9325 13.6522 11.1525 14.8361 10.3699L14.8497 10.651C14.4029 11.0588 14.1883 11.4367 14.2909 11.7213C14.5462 12.4288 16.6684 12.2883 19.0309 11.4076C21.3934 10.5268 23.1014 9.23934 22.8464 8.5318C22.7479 8.25903 22.197 8.11223 21.6367 8.08544V7.85086Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2422 0C23.3932 0 28.3803 1.53112 28.3809 3.41992C28.3809 4.06692 27.7958 4.6726 26.7793 5.18848C23.2721 6.96832 19.6055 8.82001 17.6606 12.133C17.6136 12.2131 17.6379 12.3143 17.6991 12.3842C17.8101 12.5111 17.8779 12.6766 17.8779 12.8584C17.8779 13.078 17.7793 13.2735 17.6245 13.4058C17.5453 13.4735 17.5058 13.5868 17.5566 13.6778C19.4757 17.1139 23.2325 18.9876 26.7803 20.8662C27.7315 21.3699 28.2764 21.9558 28.2764 22.5801C28.2758 24.4688 23.2895 25.9999 17.1387 26C10.9876 26 6.00057 24.4689 6 22.5801C6 21.9331 6.58509 21.3274 7.60156 20.8115C11.1596 19.0059 14.8796 17.1252 16.8016 13.7209C16.8563 13.624 16.808 13.5025 16.719 13.4359C16.5429 13.3044 16.4287 13.0953 16.4287 12.8584C16.4288 12.6599 16.5091 12.4808 16.6387 12.3503C16.7086 12.2799 16.7391 12.1713 16.6884 12.086C14.7315 8.79929 11.0662 6.96889 7.60059 5.13379C6.64934 4.63009 6.10449 4.04416 6.10449 3.41992C6.10506 1.53116 11.0913 6.14047e-05 17.2422 0Z"
        fill="currentColor"
      />
      <circle cx="17.1527" cy="9.78014" r="0.54332" fill="url(#ai-dot-1)" />
      <circle
        cx="17.152"
        cy="15.9376"
        r="0.54332"
        transform="rotate(-180 17.152 15.9376)"
        fill="url(#ai-dot-2)"
      />
      <circle cx="17.1541" cy="7.42511" r="0.724427" fill="url(#ai-dot-3)" />
      <circle
        cx="17.1506"
        cy="18.2917"
        r="0.724427"
        transform="rotate(-180 17.1506 18.2917)"
        fill="url(#ai-dot-4)"
      />
      <path
        opacity="0.65"
        d="M13.1811 12.4504C13.5109 13.3746 16.2532 13.1911 19.3061 12.0407L19.0686 11.3926C16.6904 12.2888 14.5555 12.4178 14.2985 11.6978C14.1952 11.4083 14.621 11.0094 15.0708 10.5944L14.8473 10.3228C13.6555 11.1191 12.9893 11.9127 13.1811 12.4504Z"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="ai-dot-1"
          x1="17.1527"
          y1="10.3235"
          x2="17.1527"
          y2="9.23682"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="ai-dot-2"
          x1="17.152"
          y1="16.481"
          x2="17.152"
          y2="15.3943"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="ai-dot-3"
          x1="17.1541"
          y1="8.14954"
          x2="17.1541"
          y2="6.70068"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="ai-dot-4"
          x1="17.1506"
          y1="19.0161"
          x2="17.1506"
          y2="17.5673"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  design: (
    <svg
      aria-hidden
      viewBox="0 0 32 26"
      fill="none"
      className="pointer-events-none absolute -bottom-2 -right-10 h-1/2 w-1/2 text-fg opacity-15 transition-transform duration-300 group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:scale-125"
    >
      <path
        d="M15.5 24C21.8513 24 27 18.8513 27 12.5C27 6.14873 21.8513 1 15.5 1C9.14873 1 4 6.14873 4 12.5C4 18.8513 9.14873 24 15.5 24Z"
        fill="currentColor"
      />
      <path
        opacity="0.45"
        d="M23.1936 4.67303C27.1383 3.67382 30.0581 3.75386 30.8128 5.13762C32.1313 7.55442 26.3449 13.034 17.8879 17.3762C9.43106 21.7183 1.50584 23.2795 0.187257 20.8627C-0.579606 19.4568 1.05644 17.0158 4.22372 14.3648L4.37391 15.1468C3.22295 16.4621 2.74172 17.6038 3.15458 18.361C4.18211 20.2435 10.3555 19.0275 16.9434 15.6447C23.5314 12.262 28.0382 7.99388 27.0118 6.1111C26.6156 5.38533 25.4542 5.12001 23.799 5.26222L23.1936 4.67303Z"
        fill="currentColor"
      />
      <path
        opacity="0.45"
        d="M7.80638 4.67303C3.8617 3.67382 0.941949 3.75386 0.187227 5.13762C-1.13132 7.55442 4.65513 13.034 13.1121 17.3762C21.5689 21.7183 29.4942 23.2795 30.8127 20.8627C31.5796 19.4568 29.9436 17.0158 26.7763 14.3648L26.6261 15.1468C27.7771 16.4621 28.2583 17.6038 27.8454 18.361C26.8179 20.2435 20.6445 19.0275 14.0566 15.6447C7.46858 12.262 2.96178 7.99388 3.98822 6.1111C4.38436 5.38533 5.54581 5.12001 7.20102 5.26222L7.80638 4.67303Z"
        fill="currentColor"
      />
    </svg>
  ),
};

function TrackCard({
  track,
  delay,
  widthClassName,
}: {
  track: Track;
  delay: number;
  widthClassName: string;
}) {
  return (
    <Reveal delay={delay} className={widthClassName}>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-card bg-surface p-8 transition-[transform,translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 -right-14 h-20 w-20 rounded-full bg-accent/60 blur-2xl"
        />
        {TRACK_ART[track.key]}
        <div className="relative z-10 mb-8">
          <h3 className="text-xl font-semibold">{track.name}</h3>
          <p className="mt-1 text-sm text-accent-soft">{track.enName}</p>
        </div>
        <p className="relative z-10 flex-1 text-sm leading-relaxed text-muted">
          {track.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32"
    >
      <SectionGlow className="-right-40 top-10 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Recruitment"
          title="모집 포지션"
          description="스타트업과 함께할 10기 팀원을 아래와 같이 모집합니다."
        />

        <div className="flex flex-wrap justify-start gap-8">
          {TRACKS.map((track, i) => (
            <TrackCard
              key={track.key}
              track={track}
              delay={i * 0.08}
              widthClassName="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
