export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="rounded-3xl border border-border bg-surface p-10 text-center sm:p-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </h2>
        <p className="mx-auto mt-4 max-w-md text-2xl font-semibold tracking-tight">
          Une idée de projet ou une opportunité à discuter ?
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:fatoumatabadiane27@gmail.com"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            fatoumatabadiane27@gmail.com
          </a>
          <a
            href="https://github.com/Fatoumata221"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-background"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
