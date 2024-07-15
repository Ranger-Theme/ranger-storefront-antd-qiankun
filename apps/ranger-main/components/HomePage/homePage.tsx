import { Watermark } from 'antd'

import { StyledHome } from './styled'

const HomePage = () => {
  return (
    <StyledHome>
      <Watermark
        className="watermark"
        content="ocloud主应用"
        rotate={-22}
        gap={[100, 100]}
        zIndex={10}
      >
        <div className="content">
          <h2>Home Page</h2>
          <p>Qiankun Micro Frontend</p>
        </div>
      </Watermark>
    </StyledHome>
  )
}

export default HomePage
