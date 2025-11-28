const ProgressBar = ({ current, total, score }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="font-display font-medium text-sm text-[var(--color-text-secondary)]">Question {current} of {total}</span>
        <span className="font-display font-semibold text-sm text-[var(--color-quiz-accent)]">Score: {score}</span>
      </div>
      <div className="progress-bar"><div className="progress-fill" style={{ width: `${percentage}%` }}></div></div>
    </div>
  );
};
export default ProgressBar;
