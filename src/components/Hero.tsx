export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-20 pt-16 sm:pt-24"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Développeuse Full Stack
      </p>
      <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        Salut, je suis Fatoumata Badiane.
        <br />
        Je conçois des applications web robustes, du back-end au front-end.
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        Java &amp; Angular, avec un intérêt marqué pour le Cloud AWS et
        Docker. J&apos;aime construire des produits complets, propres et
        bien pensés.
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
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
