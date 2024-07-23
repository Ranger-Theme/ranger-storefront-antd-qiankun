import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookie } from '@ranger-theme/hooks'

export const useLoginPage = () => {
  const navigate = useNavigate()
  const { cookie } = useCookie()
  const [loading, setLoading] = useState<boolean>(false)

  const handleFormSubmit = (values: any) => {
    if (values) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        cookie.setItem('access_token', String(Math.random() * 100000))
        navigate('/')
      }, 2000)
    }
  }

  useEffect(() => {
    const token: string | undefined = cookie.getItem('access_token')
    if (token) navigate('/')
  }, [])

  return {
    loading,
    handleFormSubmit
  }
}
