import { useNavigate } from 'react-router-dom'
import { useCookie } from '@ranger-theme/hooks'

export const useHeader = () => {
  const navigate = useNavigate()
  const { cookie } = useCookie()

  const handleLogout = () => {
    cookie.removeItem('access_token')
    navigate('/login')
  }

  return {
    handleLogout
  }
}
