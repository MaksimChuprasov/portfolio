export default function Hero() {
  return (
    <section className="relative w-full pb-16 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* 1. Чистый статус без привязки к локации */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-textSecondary">
          Open to new opportunities
        </span>
      </div>

      {/* 2. Главный заголовок */}
      <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-textPrimary via-textPrimary to-white/30 leading-[1.1] mb-8">
        Building High-Performance <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-500">
          Web & Mobile Apps
        </span>
      </h1>

      {/* 3. Минималистичное описание без упоминания стека */}
      <p className="max-w-2xl text-base sm:text-lg text-textSecondary font-light leading-relaxed tracking-wide mb-12">
        Hi, I&apos;m Maksim. A Frontend Developer focused on crafting clean, efficient, and scalable digital interfaces.
      </p>

      {/* 4. Кнопки действия */}
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
        
        <a 
          href="#projects" 
          className="group relative px-8 py-4 rounded-full bg-textPrimary text-background font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_32px_rgba(255,255,255,0.15)] w-full sm:w-auto text-center"
        >
          Explore Projects
        </a>

        <a 
          href="#contact" 
          className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.02] text-textPrimary font-semibold text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] w-full sm:w-auto text-center"
        >
          {"Get In Touch"}
        </a>

      </div>

      {/* Декоративная линия */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </section>
  );
}