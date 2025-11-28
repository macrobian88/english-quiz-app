const Footer = () => (
  <footer className="mt-auto border-t border-white/5 py-6">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[var(--color-text-secondary)] text-sm">
        <p className="font-display">&copy; {new Date().getFullYear()} EnglishQuiz. Learn English interactively.</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>API Connected</span>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
