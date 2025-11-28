import Button from '../common/Button';

const FeedbackCard = ({ feedback, onNext, isLastQuestion }) => {
  const { evaluation, yourAnswer } = feedback;
  const score = evaluation?.score || 0;
  const maxScore = evaluation?.max_score || 5;
  const getScoreClass = () => score >= 5 ? 'score-correct' : score >= 3 ? 'score-partial' : 'score-incorrect';
  const getScoreLabel = () => score >= 5 ? 'Excellent!' : score >= 4 ? 'Great job!' : score >= 3 ? 'Good effort!' : score >= 2 ? 'Keep trying!' : 'Needs improvement';

  return (
    <div className="card p-8 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div className={`score-badge ${getScoreClass()}`}><span>{score}/{maxScore}</span></div>
        <span className="font-display font-semibold text-lg">{getScoreLabel()}</span>
      </div>
      <div className="mb-6 p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-white/5">
        <span className="block font-display text-xs font-medium text-[var(--color-text-secondary)] mb-2">YOUR ANSWER</span>
        <p className="text-[var(--color-text-primary)]">{yourAnswer}</p>
      </div>
      <div className="space-y-4">
        {evaluation?.feedback_message && <FeedbackSection title="Feedback" content={evaluation.feedback_message} icon="💬" />}
        {evaluation?.feedback?.summary && <FeedbackSection title="Summary" content={evaluation.feedback.summary} icon="📝" />}
        {evaluation?.feedback?.explanation && <FeedbackSection title="Explanation" content={evaluation.feedback.explanation} icon="💡" />}
        {evaluation?.feedback?.correct_answer && <FeedbackSection title="Correct Answer" content={evaluation.feedback.correct_answer} icon="✅" highlight />}
        {evaluation?.feedback?.grammar_tip && <FeedbackSection title="Grammar Tip" content={evaluation.feedback.grammar_tip} icon="📚" />}
      </div>
      <div className="mt-8"><Button onClick={onNext} variant="quiz" className="w-full"><span className="flex items-center justify-center gap-2">{isLastQuestion ? 'View Results' : 'Next Question'}<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></span></Button></div>
    </div>
  );
};

const FeedbackSection = ({ title, content, icon, highlight }) => (
  <div className={`p-4 rounded-lg ${highlight ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-white/5'}`}>
    <div className="flex items-center gap-2 mb-2"><span>{icon}</span><span className="font-display font-medium text-sm text-[var(--color-text-secondary)]">{title}</span></div>
    <p className={`${highlight ? 'text-emerald-400' : 'text-[var(--color-text-primary)]'}`}>{content}</p>
  </div>
);
export default FeedbackCard;
