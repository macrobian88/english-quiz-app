import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { getTopics } from '../../services/api';
import Button from '../common/Button';
import Loading from '../common/Loading';
import ErrorMessage from '../common/ErrorMessage';

const QuizSetup = ({ onStart }) => {
  const { userId, setUserId } = useUser();
  const [localUserId, setLocalUserId] = useState(userId);
  const [topicId, setTopicId] = useState('');
  const [totalQuestions, setTotalQuestions] = useState(5);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { fetchTopics(); }, []);

  const fetchTopics = async () => {
    setLoading(true); setError(null);
    try {
      const response = await getTopics();
      const topicList = response.success ? response.topics : (response.topics || response || []);
      setTopics(topicList);
      if (topicList.length > 0) setTopicId(topicList[0].id || topicList[0].topic_id);
    } catch (err) { setError(err.message || 'Failed to load topics'); }
    finally { setLoading(false); }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localUserId.trim()) { setError('Please enter your User ID'); return; }
    if (!topicId) { setError('Please select a topic'); return; }
    setUserId(localUserId.trim());
    onStart(localUserId.trim(), topicId, totalQuestions);
  };

  if (loading) return <Loading message="Loading topics..." />;

  return (
    <div className="max-w-md mx-auto animate-slide-up">
      <div className="card card-quiz p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </div>
          <h2 className="font-display font-bold text-2xl mb-2">Start Your Quiz</h2>
          <p className="text-[var(--color-text-secondary)]">Test your English knowledge and get instant feedback</p>
        </div>
        {error && <ErrorMessage message={error} onRetry={fetchTopics} />}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div><label className="block font-display font-medium text-sm mb-2 text-[var(--color-text-secondary)]">Your User ID</label><input type="text" value={localUserId} onChange={(e) => setLocalUserId(e.target.value)} placeholder="Enter your user ID" className="input" required /></div>
          <div><label className="block font-display font-medium text-sm mb-2 text-[var(--color-text-secondary)]">Select Topic</label><select value={topicId} onChange={(e) => setTopicId(e.target.value)} className="select" required><option value="">Choose a topic...</option>{topics.map((topic) => (<option key={topic.id || topic.topic_id} value={topic.id || topic.topic_id}>{topic.title || topic.name} {topic.metadata?.difficulty ? `(${topic.metadata.difficulty})` : ''}</option>))}</select></div>
          <div><label className="block font-display font-medium text-sm mb-2 text-[var(--color-text-secondary)]">Number of Questions: <span className="text-[var(--color-quiz-secondary)]">{totalQuestions}</span></label><input type="range" min="3" max="10" value={totalQuestions} onChange={(e) => setTotalQuestions(Number(e.target.value))} className="w-full h-2 bg-[var(--color-bg-secondary)] rounded-lg appearance-none cursor-pointer accent-[var(--color-quiz-secondary)]" /><div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1"><span>3</span><span>10</span></div></div>
          <Button type="submit" variant="quiz" className="w-full" disabled={!localUserId.trim() || !topicId}><span className="flex items-center justify-center gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Start Quiz</span></Button>
        </form>
      </div>
    </div>
  );
};
export default QuizSetup;
