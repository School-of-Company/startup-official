import { Reveal, SectionGlow, SectionHeading } from "@/shared/ui";
import {
  TRACKS,
  type Track,
  FrontendIcon,
  BackendIcon,
  DevopsIcon,
  AiIcon,
  DesignIcon,
} from "@/entities/track";

const TRACK_ICON_CLASS =
  "pointer-events-none absolute -bottom-2 -right-10 h-1/2 w-1/2 text-fg opacity-15 transition-transform duration-300 group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:scale-125";

const TRACK_ART: Partial<Record<string, typeof FrontendIcon>> = {
  frontend: FrontendIcon,
  backend: BackendIcon,
  devops: DevopsIcon,
  ai: AiIcon,
  design: DesignIcon,
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
  const Icon = TRACK_ART[track.key];

  return (
    <Reveal delay={delay} className={widthClassName}>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-card bg-surface p-8 transition-[transform,translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 -right-14 h-20 w-20 rounded-full bg-accent/60 blur-2xl"
        />
        {Icon && <Icon className={TRACK_ICON_CLASS} />}
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
