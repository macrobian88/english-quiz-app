const ErrorMessage = ({ message, onRetry }) => (
  <div className="card p-6 border-l-4 border-l-red-500 animate-slide-up">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      <div className="flex-1"><h3 className="font-display font-semibold text-red-400 mb-1">Something went wrong</h3><p className="text-[var(--color-text-secondary)] text-sm">{message || 'An unexpected error occurred. Please try again.'}</p></div>
    </div>
    {onRetry && <button onClick={onRetry} className="btn btn-secondary mt-4 text-sm"><span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>Try Again</span></button>}
  </div>
);
export default ErrorMessage;
