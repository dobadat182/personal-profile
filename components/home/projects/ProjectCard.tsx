import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <article
      className={cn(
        "bg-card flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 p-4 shadow-none transition sm:p-5",
        className,
      )}
    >
      <header className="mb-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className={typography.cardTitle}>{project.name}</h3>
          <p className={cn(typography.bodySm, "text-muted-foreground mt-1 line-clamp-2")}>
            {project.description}
          </p>
        </div>
      </header>

      <div className="mb-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              typography.tag,
              "inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700",
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={cn(typography.caption, "mt-auto flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 sm:h-32 dark:border-slate-700 dark:bg-slate-900/60")}>
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          "No image available"
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
