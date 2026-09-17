const stats = [
  { value: "17+", label: "dépôts sur GitHub" },
  { value: "Java", label: "& écosystème Spring" },
  { value: "Angular", label: "pour le front-end" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          À propos
        </h2>
        <p className="mt-4 max-w-2xl text-xl leading-relaxed text-foreground">
          Développeuse full stack passionnée par la création
          d&apos;applications web solides. Java et Angular sont mes outils de
          prédilection, et je me forme en continu sur le Cloud AWS et
          Docker pour livrer des projets prêts pour la production, de la
          conception à l&apos;hébergement.
        </p>
        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <dt className="text-2xl font-bold text-accent">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
