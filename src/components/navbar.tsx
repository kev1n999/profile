import { Outlet } from "react-router";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <header>
      <nav className="flex justify-center pt-20">
        <ul className="flex justify-center gap-3.5">
          <NavItem source="/" content="home" />
          <NavItem source="/skills" content="skills" />
          <NavItem source="/contacts" content="contacts" />
        </ul>
      </nav>

      <div className="bg-white text-white h-0.5 relative top-6 max-w-2xl mx-auto"></div>

      <Outlet />
    </header>
  )
}

interface LinkProps {
  source: string,
  content: string,
}

function NavItem({ source, content }: LinkProps) {
  return (
    <li>
      <Link
        to={source}
        className="
          text-white transition-all before:content-['#']
          hover:before:content-['~'] text-2xl
        "
      >
        { content }
      </Link>
    </li>
  )
}
