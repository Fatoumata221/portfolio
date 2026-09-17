export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Gestion de finances personnelles",
    description:
      "Application de suivi de budget avec visualisation des dépenses par catégorie pour aider à mieux gérer ses finances au quotidien.",
    tags: ["JavaScript", "Data Viz"],
    links: [
      {
        label: "Voir le code",
        href: "https://github.com/Fatoumata221/Gestion-de-finance-personnelle-avec-visualisions-des-d-penses-",
      },
    ],
  },
  {
    title: "Gestion de bibliothèque",
    description:
      "Application full stack de gestion de bibliothèque : back-end Java pour la logique métier et API, front-end TypeScript pour l'interface.",
    tags: ["Java", "Spring", "TypeScript", "Angular"],
    links: [
      {
        label: "Back-end",
        href: "https://github.com/Fatoumata221/gestionbibliotheque-back",
      },
      {
        label: "Front-end",
        href: "https://github.com/Fatoumata221/gestionbibliotheque-front",
      },
    ],
  },
  {
    title: "Blog avec Django",
    description:
      "Application de blog développée avec Python et Django, incluant la gestion des articles et une structure back-end classique MVC.",
    tags: ["Python", "Django"],
    links: [
      {
        label: "Voir le code",
        href: "https://github.com/Fatoumata221/Projet_Django_blog",
      },
    ],
  },
  {
    title: "Réservation de vols",
    description:
      "API back-end en Java pour un système de réservation de vols, avec gestion des ressources et logique métier associée.",
    tags: ["Java", "API REST"],
    links: [
      {
        label: "Voir le code",
        href: "https://github.com/Fatoumata221/bookingFlightBack",
      },
    ],
  },
  {
    title: "Pipeline CI/CD",
    description:
      "Projet d'intégration continue mettant en place une chaîne CI/CD automatisée pour le build, les tests et le déploiement.",
    tags: ["CI/CD", "DevOps", "JavaScript"],
    links: [
      {
        label: "Voir le code",
        href: "https://github.com/Fatoumata221/my-ci-cd-project",
      },
    ],
  },
  {
    title: "Auto-Mob",
    description:
      "Application développée dans le cadre du bootcamp Saraya, premiers pas dans la construction d'une app complète de bout en bout.",
    tags: ["HTML", "Bootcamp"],
    links: [
      {
        label: "Voir le code",
        href: "https://github.com/Fatoumata221/Auto-Mob",
      },
    ],
  },
];
