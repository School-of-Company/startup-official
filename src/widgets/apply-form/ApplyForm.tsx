"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GENERATION } from "@/shared/config";
import { TRACKS } from "@/entities/track";
import { Logo, Reveal, SectionGlow, SectionHeading } from "@/shared/ui";

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

function FieldLabel({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
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
    <label id={`field-${name}`} className="block">
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
    <div ref={rootRef} id={`field-${name}`} className="relative block">
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
            initial={{ opacity: 0, scale: 0.96, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -6 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-20 mt-2 w-full origin-top overflow-hidden rounded-xl border border-border bg-surface p-1 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.4)]"
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
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="shrink-0"
                      >
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

      {/* Visually hidden but real <select> so the constraint-validation API can
          detect this field as required; the button above is the actual UI. */}
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
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);

  return (
    <label id={`field-${name}`} className="block">
      <FieldLabel label={label} required={required} />
      <textarea
        ref={ref}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={1}
        className={`${INPUT_CLASS} resize-none overflow-hidden leading-relaxed`}
      />
    </label>
  );
}

function FormCard({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <section className="flex flex-col gap-5 rounded-card border border-border bg-surface/40 p-6 sm:p-8">
        {children}
      </section>
    </Reveal>
  );
}

function Toast({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="frost fixed inset-x-6 top-24 z-60 mx-auto flex max-w-sm items-center justify-center rounded-xl border-2 border-accent! bg-bg/20 px-5 py-3.5 text-center text-sm font-semibold text-fg shadow-[0_16px_40px_-16px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:inset-x-8"
    >
      {message}
    </motion.div>
  );
}

const FIELD_LABELS: Record<keyof Values, string> = {
  studentId: "학번",
  name: "이름",
  intro: "자기소개",
  motivation: "지원 동기",
  goal: "포부",
  position: "포지션",
  github: "Github Profile URL",
  skills: "자신있게 설명 가능한 기술",
};

export default function ApplyForm() {
  const [values, setValues] = useState<Values>(INITIAL_VALUES);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (key: keyof Values) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    const invalid = form?.querySelector<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >(":invalid");

    if (invalid) {
      const key = invalid.name as keyof Values;
      const label = FIELD_LABELS[key] ?? "입력값";
      setToast(
        invalid.validity.valueMissing
          ? `${label}을 입력해주세요.`
          : `${label} 형식을 확인해주세요.`
      );

      const wrapper = document.getElementById(`field-${key}`);
      wrapper?.scrollIntoView({ behavior: "smooth", block: "center" });
      wrapper
        ?.querySelector<HTMLElement>("input, textarea, button")
        ?.focus({ preventScroll: true });
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-32">
      <SectionGlow className="-right-40 -top-40 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        {submitted ? (
          <div className="mx-auto max-w-xl text-center">
            <Reveal>
              <Logo className="mx-auto h-12 w-auto text-fg sm:h-14" />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base leading-relaxed text-fg">
                스타트업 동아리에 소중한 시간 내어 지원해 주셔서 감사드립니다.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href="/careers"
                className="mt-8 inline-block rounded-full bg-linear-to-r from-accent to-accent-soft px-8 py-4 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.98]"
              >
                스타트업 동아리 홈페이지로 가기
              </a>
            </Reveal>
          </div>
        ) : (
          <>
            <SectionHeading
              eyebrow="Application"
              title="지원서 작성"
              description={`${GENERATION} 스타트업 동아리 팀원 모집에 지원해주셔서 감사합니다. 아래 내용을 빠짐없이 작성해주세요.`}
            />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto flex max-w-2xl flex-col gap-6"
            >
              <FormCard>
                <Field
                  label="학번"
                  name="studentId"
                  placeholder="예: 2215"
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
                <SelectField
                  label="포지션"
                  name="position"
                  required
                  value={values.position}
                  onChange={set("position")}
                  options={[...new Set(TRACKS.map((track) => track.name))]}
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
                <TextareaField
                  label="자신있게 설명 가능한 기술"
                  name="skills"
                  placeholder="깊이 있게 이해하고 있어 자신 있게 설명할 수 있는 기술을 작성해주세요."
                  required
                  value={values.skills}
                  onChange={set("skills")}
                />
              </FormCard>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-linear-to-r from-accent to-accent-soft px-8 py-4 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.98]"
              >
                지원서 제출하기
              </button>
            </form>
          </>
        )}
      </div>

      <AnimatePresence>{toast && <Toast message={toast} />}</AnimatePresence>
    </section>
  );
}
