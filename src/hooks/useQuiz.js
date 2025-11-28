import { useState, useCallback } from 'react';
import { startQuiz, submitAnswer, getQuizStatus } from '../services/api';

const QUIZ_STATES = {
  SETUP: 'setup',
  QUESTION: 'question',
  FEEDBACK: 'feedback',
  RESULTS: 'results',
};

export const useQuiz = () => {
  const [state, setState] = useState(QUIZ_STATES.SETUP);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [score, setScore] = useState(0);

  const start = useCallback(async (userId, topicId, totalQuestions) => {
    setLoading(true);
    setError(null);
    try {
      const response = await startQuiz(userId, topicId, totalQuestions);
      if (response.success) {
        setQuizData({ sessionId: response.session_id, userId, topicId });
        setCurrentQuestion(response.question);
        setProgress({ current: response.question_number, total: response.total_questions });
        setScore(0);
        setState(QUIZ_STATES.QUESTION);
      } else {
        setError(response.error || 'Failed to start quiz');
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to start quiz');
    } finally {
      setLoading(false);
    }
  }, []);

  const answer = useCallback(async (userId, topicId, answerText) => {
    setLoading(true);
    setError(null);
    try {
      const response = await submitAnswer(userId, topicId, answerText);
      if (response.success) {
        setFeedback({ questionNumber: response.question_number, yourAnswer: response.your_answer, evaluation: response.evaluation });
        setScore(prev => prev + (response.evaluation?.score || 0));
        if (response.status === 'completed' && response.final_results) {
          setResults(response.final_results);
          setState(QUIZ_STATES.RESULTS);
        } else {
          if (response.next_question) setCurrentQuestion(response.next_question);
          if (response.progress) setProgress({ current: response.progress.current, total: response.progress.total });
          setState(QUIZ_STATES.FEEDBACK);
        }
      } else {
        setError(response.error || 'Failed to submit answer');
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to submit answer');
    } finally {
      setLoading(false);
    }
  }, []);

  const nextQuestion = useCallback(() => { setState(QUIZ_STATES.QUESTION); setFeedback(null); }, []);
  const reset = useCallback(() => {
    setState(QUIZ_STATES.SETUP); setQuizData(null); setCurrentQuestion(null);
    setFeedback(null); setResults(null); setProgress({ current: 0, total: 0 }); setScore(0); setError(null);
  }, []);

  const fetchStatus = useCallback(async (userId, topicId) => {
    setLoading(true); setError(null);
    try { return await getQuizStatus(userId, topicId); }
    catch (err) { setError(err.response?.data?.error || err.message || 'Failed to fetch quiz status'); return null; }
    finally { setLoading(false); }
  }, []);

  return { state, loading, error, quizData, currentQuestion, feedback, results, progress, score, start, answer, nextQuestion, reset, fetchStatus, QUIZ_STATES };
};

export default useQuiz;
