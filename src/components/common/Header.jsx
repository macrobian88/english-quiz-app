import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Header = () => {
  const location = useLocation();
  const { userId, clearUser } = useUser();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[var(--color-bg-primary)]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <span className="font-display font-bold text-xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">EnglishQuiz</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/quiz" active={isActive('/quiz')}>Quiz</NavLink>
            <NavLink to="/chat" active={isActive('/chat')}>Chat</NavLink>
            <NavLink to="/history" active={isActive('/history')}>History</NavLink>
            <NavLink to="/conversations" active={isActive('/conversations')}>Conversations</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            {userId && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-display font-bold text-sm">{userId.charAt(0).toUpperCase()}</div>
                <span className="hidden sm:inline font-display text-sm text-[var(--color-text-secondary)]">{userId}</span>
                <button onClick={clearUser} className="text-[var(--color-text-secondary)] hover:text-red-400 transition-colors ml-1" title="Sign out">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </button>
              </div>
            )}
          </div>
        </div>
        <nav className="md:hidden flex items-center gap-1 mt-4 overflow-x-auto pb-2">
          <NavLink to="/" active={isActive('/')} mobile>Home</NavLink>
          <NavLink to="/quiz" active={isActive('/quiz')} mobile>Quiz</NavLink>
          <NavLink to="/chat" active={isActive('/chat')} mobile>Chat</NavLink>
          <NavLink to="/history" active={isActive('/history')} mobile>History</NavLink>
          <NavLink to="/conversations" active={isActive('/conversations')} mobile>Convos</NavLink>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, active, children, mobile }) => (
  <Link to={to} className={`font-display font-medium text-sm px-4 py-2 rounded-lg transition-all ${active ? 'bg-white/10 text-white' : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5'} ${mobile ? 'whitespace-nowrap' : ''}`}>{children}</Link>
);

export default Header;
