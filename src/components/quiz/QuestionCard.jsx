const QuestionCard = ({ question, questionNumber }) => (
  <div className="card card-quiz p-8 animate-slide-up">
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center border border-blue-500/30">
        <span className="font-display font-bold text-blue-400">Q{questionNumber}</span>
      </div>
      <div className="flex-1"><span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-display font-medium mb-3">English Question</span></div>
    </div>
    <div className="text-xl md:text-2xl font-body leading-relaxed text-[var(--color-text-primary)]">{question}</div>
  </div>
);
export default QuestionCard;
