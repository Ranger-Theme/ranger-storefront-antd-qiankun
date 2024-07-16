import { Link } from 'react-router-dom'
import { Watermark } from 'antd'
import type { FC } from 'react'

import { StyledMain } from './styled'

interface NotFoundProps {
  content?: string[] | string
}

const NotFound: FC<NotFoundProps> = ({ content }) => {
  return (
    <StyledMain>
      <Watermark className="watermark" content={content} rotate={-22} gap={[100, 100]} zIndex={10}>
        <div className="content">
          <h1>404</h1>
          <p>
            Sorry, we can`t find the page you are looking for! Please press a button below to go
            back to homepage.
          </p>
          <p>
            <Link to="/">
              <span>Back to Home</span>
            </Link>
          </p>
        </div>
      </Watermark>
    </StyledMain>
  )
}

export default NotFound
