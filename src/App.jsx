import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ChatPage from './pages/ChatPage';
import HistoryPage from './pages/HistoryPage';
import ConversationsPage from './pages/ConversationsPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-pattern">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/conversations" element={<ConversationsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
