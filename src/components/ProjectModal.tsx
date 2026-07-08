"use client";

import { useState, useEffect } from "react";
import { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  if (!project) return null;

  const hasImages = project.images && project.images.length > 0;
  const isSlider = hasImages && project.images.length > 1;

  const nextSlide = () => {
    if (!hasImages) return;
    setCurrentImgIdx((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    if (!hasImages) return;
    setCurrentImgIdx(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl transition-all duration-300 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-[0_32px_64px_rgba(0,0,0,0.8)] lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="text-textSecondary hover:text-textPrimary absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 transition-all duration-300 hover:border-white/30"
        >
          ✕
        </button>

        <div className="flex min-h-[260px] w-full items-center justify-center border-b border-white/10 bg-neutral-900/40 p-6 sm:min-h-[320px] sm:p-8 lg:min-h-[500px] lg:w-1/2 lg:border-r lg:border-b-0">
          {project.type === "mobile" ? (
            <div className="from-accent/20 group relative flex aspect-[9/19] w-40 flex-col items-center justify-center overflow-hidden rounded-[36px] border-[6px] border-white/15 bg-gradient-to-b via-purple-500/5 to-transparent text-center shadow-2xl sm:w-56">
              {hasImages ? (
                <>
                  <img
                    src={project.images[currentImgIdx]}
                    alt={`${project.title} screen ${currentImgIdx + 1}`}
                    className="h-full w-full object-cover transition-all duration-500"
                  />
                  {isSlider && (
                    <SliderControls
                      onPrev={prevSlide}
                      onNext={nextSlide}
                      current={currentImgIdx}
                      total={project.images.length}
                    />
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="absolute top-3 h-3 w-14 rounded-full bg-white/15 sm:w-16" />
                  <div className="text-accent mb-2 animate-pulse text-lg sm:text-xl">
                    📱
                  </div>
                  <span className="text-textSecondary text-[9px] font-bold tracking-widest uppercase sm:text-[10px]">
                    Screenshot Placeholder
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="group relative flex aspect-video w-full max-w-[280px] flex-col overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-purple-500/10 via-neutral-900 to-transparent shadow-2xl sm:max-w-md">
              <div className="z-10 flex h-6 w-full shrink-0 items-center gap-1.5 border-b border-white/10 bg-black/40 px-3 sm:h-7">
                <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
              </div>

              <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-neutral-950">
                {hasImages ? (
                  <>
                    <img
                      src={project.images[currentImgIdx]}
                      alt={`${project.title} screen ${currentImgIdx + 1}`}
                      className="h-full w-full object-cover object-top transition-all duration-500"
                    />
                    {isSlider && (
                      <SliderControls
                        onPrev={prevSlide}
                        onNext={nextSlide}
                        current={currentImgIdx}
                        total={project.images.length}
                        isWeb
                      />
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="mb-1 animate-pulse text-lg text-purple-400 sm:mb-2 sm:text-xl">
                      💻
                    </div>
                    <span className="text-textSecondary text-[9px] font-bold tracking-widest uppercase sm:text-[10px]">
                      Screenshot Placeholder
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

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
            {/* <div className="flex gap-4">
              <a
                href="https://github.com/Maksim-Chuprasov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-white px-5 py-3 text-center text-xs font-semibold tracking-wider text-black uppercase transition-all duration-300 hover:bg-neutral-200"
              >
                Source Code
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
  isWeb?: boolean;
}

function SliderControls({
  onPrev,
  onNext,
  current,
  total,
  isWeb = false,
}: SliderControlsProps) {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute top-1/2 left-2 z-20 -translate-y-1/2 p-1.5 text-zinc-400 opacity-0 drop-shadow-[0_0_2px_rgba(0,0,0,1)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] filter transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:text-zinc-100 active:scale-95"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute top-1/2 right-2 z-20 -translate-y-1/2 p-1.5 text-zinc-400 opacity-0 drop-shadow-[0_0_2px_rgba(0,0,0,1)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] filter transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:text-zinc-100 active:scale-95"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div
        className={`absolute left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/[0.04] bg-black/30 px-2.5 py-1.5 shadow-lg backdrop-blur-md ${isWeb ? "bottom-3" : "bottom-4"}`}
      >
        {Array.from({ length: total }).map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? "bg-accent w-4" : "w-1.5 bg-white/30"}`}
          />
        ))}
      </div>
    </>
  );
}
