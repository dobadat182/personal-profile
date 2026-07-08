"use client";

import ProjectCard from "./ProjectCard";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/projects";
import { useEffect, useState } from "react";

const INITIAL_DISPLAY_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const displayedProjects = projects.slice(0, displayCount);
  const hasMore = displayCount < projects.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <Section>
      <Container
        className="space-y-8 sm:space-y-10"
        eyebrow="Work"
        heading="Projects"
        description="A selection of projects I've worked on recently."
      >
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 min-[480px]:gap-5 md:gap-6 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={`${project.name}-${index}`} project={project} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <Button size="lg" onClick={handleLoadMore} className="w-full min-[480px]:w-auto">
              Load more
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
