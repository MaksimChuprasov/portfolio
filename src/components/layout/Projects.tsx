"use client";

import { useState } from "react";
import ProjectModal from "..//ProjectModal";
import { projectList, Project } from "../../data/projects"; // Импортируем готовые данные

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full scroll-mt-20 py-20">
      <div className="mb-16 flex flex-col items-center text-center">
        <span className="text-accent mb-3 text-[11px] font-bold tracking-[0.25em] uppercase">
          Selected Work
        </span>
        <h2 className="text-textPrimary text-3xl font-bold tracking-tight sm:text-4xl">
          Featured Projects
        </h2>
      </div>

      {/* Сетка карточек */}
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {projectList.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="group hover:border-accent/30 relative flex cursor-pointer flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-[0_16px_32px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.04]"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-textSecondary/70 text-[10px] font-semibold tracking-wider uppercase">
                  {project.category}
                </span>
                <span className="text-textSecondary group-hover:text-accent text-sm transition-all duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="text-textPrimary group-hover:text-accent mb-4 text-xl font-bold transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-textSecondary mb-6 text-sm leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-textSecondary rounded-full border border-white/[0.06] bg-white/[0.01] px-3 py-1 text-[10px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        key={selectedProject?.title || "empty"} // <--- Добавляем этот ключ
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
