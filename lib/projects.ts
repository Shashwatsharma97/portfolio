// Placeholder project data — replace each entry with your real projects.
// `image` should point at a file you've added under /public/images
// (e.g. "/images/project-one.jpg"); leave it unset to keep the gradient
// placeholder card.

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "Replace with a one- or two-sentence summary of what this project does, the problem it solves, and your role in building it.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "Replace with a one- or two-sentence summary of what this project does, the problem it solves, and your role in building it.",
    tags: ["React", "Node.js"],
    href: "#",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "Replace with a one- or two-sentence summary of what this project does, the problem it solves, and your role in building it.",
    tags: ["PostgreSQL", "AWS"],
    href: "#",
  },
];
