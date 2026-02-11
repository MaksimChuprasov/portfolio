export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-6">
      <h1 className="text-5xl font-bold">Максим Чупрасов</h1>
      <p className="text-textSecondary text-lg max-w-xl">
        Frontend Developer. Создаю премиум-landing сайты с чистым дизайном и
        современным подходом.
      </p>
      <div className="flex gap-4 mt-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/80 transition"
        >
          Мои проекты
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-border hover:bg-surface transition"
        >
          Связаться
        </a>
      </div>
    </main>
  );
}