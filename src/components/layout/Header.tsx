export default function Header() {
  return (
    <header className="sticky top-6 w-full pt-2 z-50">
      {/* Компактная, утонченная капсула жидкого стекла */}
      <div className="w-full flex items-center justify-between px-8 py-4 rounded-full border border-white/15 bg-neutral-900/50 backdrop-blur-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.2)] transition-all duration-500 hover:border-white/30 hover:bg-neutral-900/70">
        
        {/* Чистый белый минималистичный логотип */}
        <a href="#" className="flex items-center text-sm font-bold tracking-[0.3em] text-textPrimary uppercase transition-opacity duration-300 hover:opacity-80">
          MAKSIM Chuprasov
        </a>

        {/* Аккуратный навигационный остров */}
        <nav className="flex items-center gap-1 font-medium bg-black/40 border border-white/[0.06] p-1 rounded-full backdrop-blur-2xl">
          <a 
            href="#projects" 
            className="px-6 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-textSecondary hover:text-textPrimary hover:bg-white/[0.06] transition-all duration-300"
          >
            Projects
          </a>
          <a 
            href="#about" 
            className="px-6 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-textSecondary hover:text-textPrimary hover:bg-white/[0.06] transition-all duration-300"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="px-6 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-textSecondary hover:text-textPrimary hover:bg-white/[0.06] transition-all duration-300"
          >
            Contacts
          </a>
        </nav>

      </div>
    </header>
  );
}