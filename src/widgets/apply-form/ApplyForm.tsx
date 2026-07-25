"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GENERATION } from "@/shared/config";
import { TRACKS } from "@/entities/track";
import { Reveal, SectionGlow, SectionHeading } from "@/shared/ui";

type Values = {
  studentId: string;
  name: string;
  intro: string;
  motivation: string;
  goal: string;
  position: string;
  github: string;
  skills: string;
};

const INITIAL_VALUES: Values = {
  studentId: "",
  name: "",
  intro: "",
  motivation: "",
  goal: "",
  position: "",
  github: "",
  skills: "",
};

const INPUT_CLASS =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/60 transition-colors focus:border-accent-soft focus:outline-none focus:ring-2 focus:ring-accent-dim/40";

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <span className="mb-2 block text-sm font-medium text-fg">
      {label}
      {required && <span className="ml-1 text-accent-soft">*</span>}
    </span>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <FieldLabel label={label} required={required} />
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={INPUT_CLASS}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative block">
      <FieldLabel label={label} required={required} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
        className={`${INPUT_CLASS} flex items-center justify-between gap-3 text-left ${
          value ? "" : "text-muted/60"
        }`}
      >
        <span className="truncate">{value || "선택해주세요"}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="m6 9 6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-surface p-1 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.4)]"
          >
            {options.map((opt) => {
              const active = value === opt;
              return (
                <li key={opt} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      active
                        ? "bg-surface2 font-medium text-accent-soft"
                        : "text-fg hover:bg-surface2"
                    }`}
                  >
                    {opt}
                    {active && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Visually hidden but real <select> so the browser's native required-field
          validation still fires on submit; the button above is the actual UI. */}
      <select
        name={name}
        required={required}
        value={value}
        onChange={() => {}}
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-x-0 top-full h-0 w-full opacity-0"
      >
        <option value="" />
        {options.map((opt) => (
          <option key={opt} value={opt} />
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
  rows = 5,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <FieldLabel label={label} required={required} />
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className={`${INPUT_CLASS} resize-y leading-relaxed`}
      />
    </label>
  );
}

function FormSection({
  index,
  title,
  gridClassName = "sm:grid-cols-2",
  children,
}: {
  index: string;
  title: string;
  gridClassName?: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section className="rounded-card border border-border bg-surface/40 p-6 sm:p-8">
        <div className="mb-6 flex items-baseline gap-3">
          <span className="text-sm font-semibold tracking-[0.2em] text-accent-soft">
            {index}
          </span>
          <h2 className="text-lg font-bold tracking-tight sm:text-xl">{title}</h2>
        </div>
        <div className={`grid gap-5 ${gridClassName}`}>{children}</div>
      </section>
    </Reveal>
  );
}

export default function ApplyForm() {
  const [values, setValues] = useState<Values>(INITIAL_VALUES);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Values) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-32">
      <SectionGlow className="-right-40 -top-40 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        {submitted ? (
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <p className="text-base leading-relaxed text-fg">
                스타트업 동아리에 소중한 시간 내어 지원해 주셔서 감사드립니다.
              </p>
              <a
                href="/"
                className="mt-8 inline-block rounded-full bg-linear-to-r from-accent to-accent-soft px-8 py-4 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-8px_rgba(255,59,92,0.65)] transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.98]"
              >
                스타트업 동아리 홈페이지로 가기
              </a>
            </div>
          </Reveal>
        ) : (
          <>
            <SectionHeading
              eyebrow="Application"
              title="지원서 작성"
              description={`${GENERATION} 스타트업 동아리 팀원 모집에 지원해주셔서 감사합니다. 아래 내용을 빠짐없이 작성해주세요.`}
            />

            <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl flex-col gap-6">
              <FormSection index="01" title="기본 정보">
                <Field
                  label="학번"
                  name="studentId"
                  placeholder="예: 30412"
                  required
                  value={values.studentId}
                  onChange={set("studentId")}
                />
                <Field
                  label="이름"
                  name="name"
                  placeholder="홍길동"
                  required
                  value={values.name}
                  onChange={set("name")}
                />
              </FormSection>

              <FormSection index="02" title="자기소개서" gridClassName="grid-cols-1">
                <TextareaField
                  label="자기소개"
                  name="intro"
                  placeholder="본인을 자유롭게 소개해주세요."
                  required
                  value={values.intro}
                  onChange={set("intro")}
                />
                <TextareaField
                  label="지원 동기"
                  name="motivation"
                  placeholder="스타트업 동아리에 지원하게 된 계기를 알려주세요."
                  required
                  value={values.motivation}
                  onChange={set("motivation")}
                />
                <TextareaField
                  label="포부"
                  name="goal"
                  placeholder="동아리 활동을 통해 이루고 싶은 목표를 알려주세요."
                  required
                  value={values.goal}
                  onChange={set("goal")}
                />
              </FormSection>

              <FormSection index="03" title="지원 포지션 및 기술">
                <SelectField
                  label="포지션"
                  name="position"
                  required
                  value={values.position}
                  onChange={set("position")}
                  options={TRACKS.map((track) => track.name)}
                />
                <Field
                  label="Github Profile URL"
                  name="github"
                  type="url"
                  placeholder="https://github.com/username"
                  required
                  value={values.github}
                  onChange={set("github")}
                />
                <div className="sm:col-span-2">
                  <TextareaField
                    label="자신있게 설명 가능한 기술"
                    name="skills"
                    placeholder="깊이 있게 이해하고 있어 자신 있게 설명할 수 있는 기술을 작성해주세요."
                    required
                    value={values.skills}
                    onChange={set("skills")}
                    rows={4}
                  />
                </div>
              </FormSection>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-linear-to-r from-accent to-accent-soft px-8 py-4 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-8px_rgba(255,59,92,0.65)] transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.98]"
              >
                지원서 제출하기
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
