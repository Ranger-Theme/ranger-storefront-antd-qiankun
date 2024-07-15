import { useEffect, useState, useRef } from 'react'
import dayjs from 'dayjs'

import { StyledTimer } from './styled'

const TimeDown: React.FC = () => {
  const [timer, setTimer] = useState<Date>(new Date())
  const intervalRef = useRef<any>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return <StyledTimer>{dayjs(timer).format('YYYY-MM-DD hh:mm:ss')}</StyledTimer>
}

export default TimeDown
