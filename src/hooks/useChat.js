import { useState, useCallback } from 'react';
import { sendChatMessage } from '../services/api';

export const useChat = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);

  const sendMessage = useCallback(async (userId, topicId, message) => {
    setLoading(true); setError(null);
    const userMessage = { id: Date.now(), type: 'user', content: message, timestamp: new Date().toISOString() };
    setMessages(prev => [...prev, userMessage]);
    try {
      const response = await sendChatMessage(userId, topicId, message);
      if (response.success) {
        setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', content: response.reply, timestamp: new Date().toISOString() }]);
        setConversationId(response.conversation_id);
      } else {
        setError(response.error || 'Failed to send message');
        setMessages(prev => prev.filter(m => m.id !== userMessage.id));
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to send message');
      setMessages(prev => prev.filter(m => m.id !== userMessage.id));
    } finally { setLoading(false); }
  }, []);

  const clearChat = useCallback(() => { setMessages([]); setConversationId(null); setError(null); }, []);
  const loadHistory = useCallback((history) => {
    if (history && Array.isArray(history)) {
      setMessages(history.map((msg, index) => ({ id: index, type: msg.role === 'user' ? 'user' : 'bot', content: msg.content, timestamp: msg.timestamp })));
    }
  }, []);

  return { loading, error, messages, conversationId, sendMessage, clearChat, loadHistory };
};

export default useChat;
