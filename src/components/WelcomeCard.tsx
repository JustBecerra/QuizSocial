import Card from './Card'

export default function WelcomeCard() {
  return (
    <Card className="max-w-md w-full">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Welcome to QuizSocial
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your social quiz platform
        </p>
      </div>
    </Card>
  )
}

