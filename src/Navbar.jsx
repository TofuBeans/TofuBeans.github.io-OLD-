import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Twemoji from "./Twemoji"

export default function Navbar() {
  return (
    <nav className="nav">
        <Link to="/Pixels-Life-Series/">
          <img src="life_series_white.svg" className="size-1/2 w-[160px]"></img>
        </Link>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}