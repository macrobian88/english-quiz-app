const Button = ({ children, variant = 'quiz', size = 'default', disabled = false, loading = false, onClick, type = 'button', className = '', ...props }) => {
  const variants = { quiz: 'btn-quiz', chat: 'btn-chat', secondary: 'btn-secondary' };
  const sizes = { small: 'px-4 py-2 text-sm', default: '', large: 'px-8 py-4 text-lg' };
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={`btn ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {loading ? <span className="flex items-center gap-2"><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Loading...</span> : children}
    </button>
  );
};
export default Button;
