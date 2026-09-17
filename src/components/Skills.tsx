const skillGroups = [
  {
    category: "Langages & Frameworks",
    skills: ["Java", "Spring Boot", "Angular", "TypeScript", "JavaScript", "Python", "Django"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Git"],
  },
  {
    category: "Autres",
    skills: ["HTML", "CSS", "API REST", "SQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Compétences
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-foreground">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
