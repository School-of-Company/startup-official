"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND } from "@/shared/config";
import { Reveal } from "@/shared/ui";
import { useReducedMotionSafe } from "@/shared/lib";

export default function IntroCta() {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotionSafe();
  const [maxScale, setMaxScale] = useState(1.3);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const updateMaxScale = () => {
      const width = card.offsetWidth;
      if (width > 0) {
        setMaxScale(document.documentElement.clientWidth / width);
      }
    };

    updateMaxScale();

    const observer = new ResizeObserver(updateMaxScale);
    observer.observe(card);
    window.addEventListener("resize", updateMaxScale);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMaxScale);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, maxScale]);

  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <Reveal>
          <motion.div
            ref={cardRef}
            style={{ scale: reduceMotion ? 1 : scale }}
            className="relative overflow-hidden rounded-panel bg-cta-gradient px-8 py-16 text-center text-white sm:px-16 sm:py-20"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {BRAND}이 만드는 수많은
              <br className="hidden sm:block" /> 도전의 순간들,
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-white/80 sm:text-lg">
              당신과 함께 만들고 싶습니다.
              <br className="hidden sm:block" /> 지금, {BRAND}에 합류하세요.
            </p>
            <Link
              href="/recruit"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-accent transition-[scale] duration-200 ease-out hover:scale-[1.02] active:scale-[0.97]"
            >
              모집 안내 보러가기
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
