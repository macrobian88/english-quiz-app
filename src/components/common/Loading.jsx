const Loading = ({ message = 'Loading...', size = 'default' }) => {
  const sizeClasses = { small: 'w-6 h-6 border-2', default: 'w-10 h-10 border-3', large: 'w-16 h-16 border-4' };
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div className={`${sizeClasses[size]} rounded-full border-[var(--color-text-secondary)]/20 border-t-[var(--color-quiz-secondary)] animate-spin`}></div>
      {message && <p className="font-display text-[var(--color-text-secondary)] animate-pulse">{message}</p>}
    </div>
  );
};
export default Loading;
