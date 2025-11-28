# English Quiz Learning App

A modern, interactive React frontend application for learning English through quizzes and chat with an AI tutor.

## 🌟 Features

- 🧠 **Quiz Mode**: Take interactive quizzes with instant feedback on your answers
- 💬 **Chat Mode**: Have conversations with an AI tutor to learn English
- 📊 **Progress Tracking**: View your quiz history and results
- 📜 **Conversation History**: Browse past quiz and chat sessions
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🌙 **Modern UI**: Clean, dark-themed interface with smooth animations
- 🎉 **Celebrations**: Confetti animation for high quiz scores!

## 🛠 Tech Stack

- React 19 with Hooks
- Tailwind CSS v4 for styling
- React Router v7 for navigation
- Axios for API calls
- Canvas Confetti for celebrations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- **Backend API** running on http://localhost:3000 (see [english-quiz-api](https://github.com/macrobian88/english-quiz-api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/macrobian88/english-quiz-app.git
cd english-quiz-app
```

2. Install dependencies:
```bash
npm install
```

3. **Start the backend API first** (in another terminal):
```bash
# In the english-quiz-api directory
npm run dev
```

4. Start the frontend development server:
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── common/         # Shared UI components (Header, Footer, Button, Loading, Error)
│   ├── quiz/           # Quiz components (Setup, Question, Feedback, Results, Progress)
│   ├── chat/           # Chat components (Setup, Container, Messages, Input)
│   └── topics/         # Topic selection components (TopicList, TopicCard)
├── pages/
│   ├── HomePage.jsx    # Landing page with mode selection
│   ├── QuizPage.jsx    # Quiz mode page
│   ├── ChatPage.jsx    # Chat mode page
│   ├── HistoryPage.jsx # Quiz history viewer
│   └── ConversationsPage.jsx # Conversation browser
├── services/
│   └── api.js          # Axios API service layer
├── hooks/
│   ├── useQuiz.js      # Quiz state management hook
│   └── useChat.js      # Chat state management hook
├── context/
│   └── UserContext.jsx # User ID context provider
├── index.css           # Global styles with Tailwind
├── main.jsx            # React entry point
└── App.jsx             # Main application with routing
```

## 🔌 API Endpoints

The app expects the following API endpoints on `http://localhost:3000`:

### Topics
- `GET /api/admin/topics` - List all available topics

### Quiz Mode
- `POST /api/quiz/start` - Start a new quiz session
- `POST /api/quiz/answer` - Submit an answer
- `GET /api/quiz/status` - Get quiz progress

### Chat Mode
- `POST /api/chat` - Send a chat message

### Conversations
- `GET /api/conversations` - List user conversations
- `GET /api/conversations/:topic_id` - Get conversation history

## 🎨 UI/UX Features

- **Color-coded Feedback**: Green for correct (5/5), Yellow for partial (3-4/5), Red for incorrect (0-2/5)
- **Progress Bar**: Visual quiz progress tracking
- **Animated Transitions**: Smooth slide and fade animations
- **Responsive Layout**: Mobile-first design
- **LocalStorage Persistence**: User ID is saved for convenience

## 🔗 Related Projects

- [english-quiz-api](https://github.com/macrobian88/english-quiz-api) - Backend API for this application

## 📄 License

MIT
