import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Topics
export const getTopics = async () => {
  const response = await api.get('/admin/topics');
  return response.data;
};

// Quiz
export const startQuiz = async (userId, topicId, totalQuestions = 5) => {
  const response = await api.post('/quiz/start', {
    user_id: userId,
    topic_id: topicId,
    total_questions: totalQuestions,
  });
  return response.data;
};

export const submitAnswer = async (userId, topicId, answer) => {
  const response = await api.post('/quiz/answer', {
    user_id: userId,
    topic_id: topicId,
    answer,
  });
  return response.data;
};

export const getQuizStatus = async (userId, topicId) => {
  const response = await api.get('/quiz/status', {
    params: { user_id: userId, topic_id: topicId },
  });
  return response.data;
};

// Chat
export const sendChatMessage = async (userId, topicId, message) => {
  const response = await api.post('/chat', {
    user_id: userId,
    topic_id: topicId,
    message,
  });
  return response.data;
};

// Conversations
export const getConversations = async (userId) => {
  const response = await api.get('/conversations', {
    params: { user_id: userId },
  });
  return response.data;
};

export const getConversationHistory = async (topicId, userId, mode) => {
  const response = await api.get(`/conversations/${topicId}`, {
    params: { user_id: userId, mode },
  });
  return response.data;
};

export default api;
