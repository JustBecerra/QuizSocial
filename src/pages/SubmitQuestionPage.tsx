import { useNavigate } from 'react-router-dom'
import SubmitQuestion from '../components/SubmitQuestion'

export default function SubmitQuestionPage() {
  const navigate = useNavigate()
  return <SubmitQuestion onCancel={() => navigate('/')} />
}

