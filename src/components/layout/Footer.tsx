export default function Footer() {
  return (
    <div className="text-textSecondary/50 pb-10 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-light sm:flex-row">
      <div>
        © {new Date().getFullYear()} Maksim Chuprasov. All rights reserved.
      </div>
      <div className="flex gap-6">
        <span className="hover:text-textPrimary cursor-default transition-colors duration-300">
          Designed for Performance
        </span>
        <span>•</span>
        <span className="hover:text-textPrimary cursor-default transition-colors duration-300">
          Built with Next.js
        </span>
      </div>
    </div>
  );
}
