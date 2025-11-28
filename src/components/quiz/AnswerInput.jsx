import { useState } from 'react';
import Button from '../common/Button';

const AnswerInput = ({ onSubmit, loading, disabled }) => {
  const [answer, setAnswer] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); if (answer.trim() && !loading && !disabled) { onSubmit(answer.trim()); setAnswer(''); } };
  return (
    <form onSubmit={handleSubmit} className="mt-6 animate-fade-in">
      <div className="space-y-4">
        <div>
          <label className="block font-display font-medium text-sm mb-2 text-[var(--color-text-secondary)]">Your Answer</label>
          <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Type your answer here..." className="input min-h-[120px] resize-none" disabled={loading || disabled} rows={4} />
        </div>
        <Button type="submit" variant="quiz" className="w-full" loading={loading} disabled={!answer.trim() || disabled}>
          <span className="flex items-center justify-center gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Submit Answer</span>
        </Button>
      </div>
    </form>
  );
};
export default AnswerInput;
