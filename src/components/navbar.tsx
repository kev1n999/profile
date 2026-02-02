import { Outlet } from "react-router";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <header>
      <nav className="flex justify-center p-20">
        <ul className="flex justify-center gap-3.5">
          <NavItem source="/" content="home" />
          <NavItem source="/about" content="about-me" />
          <NavItem source="/contacts" content="contacts" />
        </ul>
      </nav>

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
