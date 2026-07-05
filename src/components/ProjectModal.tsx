"use client";

// Экспортируем интерфейс, чтобы использовать его и в списке проектов
export interface Project {
  title: string;
  category: string;
  type: "mobile" | "web";
  description: string;
  extendedDescription: string;
  features: string[];
  tags: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Если проект не выбран, ничего не рендерим
  if (!project) return null;

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl transition-all duration-300 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-[0_32px_64px_rgba(0,0,0,0.8)] lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="text-textSecondary hover:text-textPrimary absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 transition-all duration-300 hover:border-white/30"
        >
          ✕
        </button>

        {/* ЛЕВАЯ ЧАСТЬ: Заглушка под скриншоты */}
        <div className="flex min-h-[320px] w-full items-center justify-center border-b border-white/10 bg-neutral-900/40 p-8 lg:min-h-[500px] lg:w-1/2 lg:border-r lg:border-b-0">
          {project.type === "mobile" ? (
            /* Смартфон-заглушка */
            <div className="from-accent/20 group relative flex aspect-[9/19] w-56 flex-col items-center justify-center rounded-[36px] border-[6px] border-white/15 bg-gradient-to-b via-purple-500/5 to-transparent p-4 text-center shadow-2xl">
              <div className="absolute top-3 h-3 w-16 rounded-full bg-white/15" />
              <div className="text-accent mb-2 animate-pulse text-xl">📱</div>
              <span className="text-textSecondary text-[10px] font-bold tracking-widest uppercase">
                Screenshot Placeholder
              </span>
              <span className="text-textSecondary/50 mt-1 text-[9px]">
                Mobile View Showcase
              </span>
            </div>
          ) : (
            /* Браузер-заглушка */
            <div className="relative flex aspect-video w-full max-w-md flex-col overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-purple-500/10 via-neutral-900 to-transparent shadow-2xl">
              <div className="flex h-7 w-full items-center gap-1.5 border-b border-white/10 bg-black/40 px-3">
                <div className="h-2 w-2 rounded-full bg-white/20" />
                <div className="h-2 w-2 rounded-full bg-white/20" />
                <div className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
                <div className="mb-2 animate-pulse text-xl text-purple-400">
                  💻
                </div>
                <span className="text-textSecondary text-[10px] font-bold tracking-widest uppercase">
                  Screenshot Placeholder
                </span>
                <span className="text-textSecondary/50 mt-1 text-[9px]">
                  Desktop Interface Showcase
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Описание */}
        <div className="flex max-h-[50vh] w-full flex-col justify-between overflow-y-auto p-8 sm:p-10 lg:max-h-[90vh] lg:w-1/2">
          <div>
            <span className="text-accent mb-2 block text-[10px] font-bold tracking-[0.2em] uppercase">
              {project.category}
            </span>
            <h3 className="text-textPrimary mb-6 text-2xl font-extrabold sm:text-3xl">
              {project.title}
            </h3>

            <h4 className="text-textPrimary mb-3 text-xs font-bold tracking-wider uppercase">
              About Project
            </h4>
            <p className="text-textSecondary mb-8 text-sm leading-relaxed font-light">
              {project.extendedDescription}
            </p>

            <h4 className="text-textPrimary mb-3 text-xs font-bold tracking-wider uppercase">
              Key Features
            </h4>
            <ul className="mb-8 space-y-2.5">
              {project.features.map((feat, fIdx) => (
                <li
                  key={fIdx}
                  className="text-textSecondary flex items-start gap-2.5 text-sm font-light"
                >
                  <span className="text-accent mt-0.5 text-xs">✦</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Стек и футер */}
          <div>
            <div className="mb-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-textSecondary rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[10px] font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/MaksimChuprasov"
                target="_blank"
                className="flex-1 rounded-xl bg-white px-5 py-3 text-center text-xs font-semibold tracking-wider text-black uppercase transition-all duration-300 hover:bg-neutral-200"
              >
                Source Code
              </a>
              <a
                href="#"
                className="text-textPrimary flex-1 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-center text-xs font-semibold tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
