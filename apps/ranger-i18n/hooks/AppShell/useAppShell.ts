import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCookie } from '@ranger-theme/hooks'

export const useAppShell = () => {
  const navigate = useNavigate()
  const { cookie } = useCookie()
  const { pathname } = useLocation()

  const token: string = cookie.getItem('access_token')

  useEffect(() => {
    if (!token && pathname !== '/login') {
      navigate('/login')
    }
  }, [token, pathname])

  return {}
}
