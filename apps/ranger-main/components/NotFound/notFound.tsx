import { Link } from 'react-router-dom'

import { StyledMain } from './styled'

const NotFound = () => {
  return (
    <StyledMain>
      <h1>404</h1>
      <p>
        Sorry, we can`t find the page you are looking for! Please press a button below to go back to
        homepage.
      </p>
      <p>
        <Link to="/">
          <span>Back to Home</span>
        </Link>
      </p>
    </StyledMain>
  )
}

export default NotFound
