"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 24, scale: 0.8, duration: 0.7 })
        .from(
          ".hero-title",
          { opacity: 0, y: 60, duration: 1, stagger: 0.2 },
          "-=0.3",
        )
        .from(".hero-text", { opacity: 0, y: 30, duration: 0.8 }, "-=0.4")
        .from(
          ".hero-cta > *",
          {
            opacity: 0,
            y: 24,
            scale: 0.85,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-20 pt-16 sm:pt-24"
    >
      <p className="hero-eyebrow text-sm font-medium uppercase tracking-widest text-accent">
        Développeuse Full Stack
      </p>
      <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        <span className="hero-title block">
          Salut, je suis Fatoumata Badiane.
        </span>
        <span className="hero-title block">
          Je conçois des applications web robustes, du back-end au front-end.
        </span>
      </h1>
      <p className="hero-text max-w-xl text-lg leading-relaxed text-muted">
        Java &amp; Angular, avec un intérêt marqué pour le Cloud AWS et
        Docker. J&apos;aime construire des produits complets, propres et
        bien pensés.
      </p>
      <div className="hero-cta flex flex-wrap gap-4 pt-2">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
