import type { JSX } from "react"
import { Link } from "react-router"

function Header(): JSX.Element {

  return (
    <header>
      {/* place for the feature with tests */}

      <nav>
        <img src="#" alt="icon" />

        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/test'}>Test</Link>
          <Link to={'/create'}>Create</Link>
          <Link to={'/support'}>Support</Link>          
        </div>

        {/* component of deleted tests */}
      </nav>
    </header>
  )
}

export default Header