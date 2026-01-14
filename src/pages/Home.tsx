import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="w-full h-full min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Welcome to QuizSocial
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your social quiz platform
          </p>
          <div className="text-left space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
              <span className="text-blue-500 dark:text-blue-400 mr-2 mt-0.5">•</span>
              <span>Each quiz consists of <span className="font-semibold">ten questions</span>, with <span className="font-semibold">four answer options</span> for each question.</span>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
              <span className="text-blue-500 dark:text-blue-400 mr-2 mt-0.5">•</span>
              <span>Questions are sourced from both the <span className="font-semibold">TriviaAPI</span> and <span className="font-semibold">user-created questions</span> from our community.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <button className="flex-1 px-6 py-3 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Start
            </button>
            <button
              onClick={() => navigate('/submit')}
              className="flex-1 px-6 py-3 bg-gray-200 cursor-pointer hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Submit Question
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}

