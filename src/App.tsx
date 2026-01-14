import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SubmitQuestionPage from './pages/SubmitQuestionPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<SubmitQuestionPage />} />
    </Routes>
  )
}

export default App
