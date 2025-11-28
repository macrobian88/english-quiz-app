import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import Button from '../common/Button';

const ResultsCard = ({ results, onReset }) => {
  const { total_score, max_possible_score, percentage, grade, grade_label, performance } = results;
  useEffect(() => {
    if (grade === 'A' || grade === 'B') {
      const duration = 3000, end = Date.now() + duration;
      const frame = () => {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#3b82f6', '#10b981', '#f59e0b'] });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#3b82f6', '#10b981', '#f59e0b'] });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [grade]);
  const getGradeColor = () => ({ A: 'from-emerald-400 to-emerald-600', B: 'from-blue-400 to-blue-600', C: 'from-yellow-400 to-yellow-600', D: 'from-orange-400 to-orange-600' }[grade] || 'from-red-400 to-red-600');
  const getGradeMessage = () => ({ A: 'Outstanding! You\'ve mastered this topic!', B: 'Great job! You have a solid understanding.', C: 'Good effort! Keep practicing to improve.', D: 'You\'re making progress. Don\'t give up!' }[grade] || 'Keep studying and try again!');
  return (
    <div className="max-w-lg mx-auto animate-slide-up"><div className="card p-8">
      <div className="text-center mb-8"><div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${getGradeColor()} flex items-center justify-center shadow-lg`}><span className="text-4xl font-display font-bold text-white">{grade}</span></div><h2 className="font-display font-bold text-2xl mb-2">Quiz Complete!</h2><p className="text-[var(--color-text-secondary)]">{getGradeMessage()}</p></div>
      <div className="grid grid-cols-2 gap-4 mb-8"><StatCard label="Score" value={`${total_score}/${max_possible_score}`} icon="🎯" /><StatCard label="Percentage" value={`${Math.round(percentage)}%`} icon="📊" /><StatCard label="Grade" value={grade_label || grade} icon="🏆" /><StatCard label="Performance" value={performance || 'Complete'} icon="⭐" /></div>
      <div className="mb-8"><div className="flex justify-between mb-2 text-sm"><span className="font-display text-[var(--color-text-secondary)]">Overall Score</span><span className="font-display font-semibold text-[var(--color-quiz-secondary)]">{Math.round(percentage)}%</span></div><div className="h-4 bg-[var(--color-bg-secondary)] rounded-full overflow-hidden"><div className={`h-full rounded-full bg-gradient-to-r ${getGradeColor()} transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }} /></div></div>
      <div className="flex flex-col sm:flex-row gap-4"><Button onClick={onReset} variant="quiz" className="flex-1">Try Again</Button><Button onClick={() => window.location.href = '/'} variant="secondary" className="flex-1">Home</Button></div>
    </div></div>
  );
};
const StatCard = ({ label, value, icon }) => (<div className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-white/5 text-center"><span className="text-2xl mb-2 block">{icon}</span><span className="font-display font-bold text-xl block mb-1">{value}</span><span className="text-xs text-[var(--color-text-secondary)] font-display">{label}</span></div>);
export default ResultsCard;
