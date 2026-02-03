import { Outlet } from "react-router";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <header>
      <nav className="flex justify-center pt-20">
        <ul className="relative left-20 flex justify-between gap-3.5 md:static">
          <NavItem source="/" content="home" />
          <NavItem source="/skills" content="skills" />
          <NavItem source="/contacts" content="contacts" />
        </ul>
        <div className="ml-56 relative right-16 md:static">
            <a href="https://github.com/kev1n999"
              className="
                text-white relative transition-all md:before:inline-block before:w-4 before:content-['#']
                hover:before:content-['>'] md:text-2xl underline
              "
            >github</a>
        </div>
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
          text-white relative transition-all md:before:inline-block before:w-4 before:content-['#']
          hover:before:content-['>'] md:text-2xl underline
        "
      >
        { content }
      </Link>
    </li>
  )
}
