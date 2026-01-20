import type { JSX } from "react"
import { Link } from "react-router"

function Header(): JSX.Element {

  return (
    <header>
      {/* place for the feature with tests */}

      <nav>
        <img src="#" alt="icon" />

        <div>
          <Link to={'/home'}>Home</Link>
          <Link to={'/tests'}>Test</Link>
          <Link to={'/create'}>Create Test</Link>
          <Link to={'/support'}>Support</Link>          
        </div>

        {/* component of deleted tests */}
      </nav>
    </header>
  )
}

export default Header