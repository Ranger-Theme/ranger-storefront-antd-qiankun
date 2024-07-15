import { Link } from 'react-router-dom'
import { Watermark } from 'antd'

import { StyledMain } from './styled'

const NotFound = () => {
  return (
    <StyledMain>
      <Watermark
        className="watermark"
        content="ocloud主应用"
        rotate={-22}
        gap={[100, 100]}
        zIndex={10}
      >
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
