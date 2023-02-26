import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="">
      <div className="flex flex-col items-center justify-center gap-y-4 mb-16 md:flex-row md:justify-end md:gap-y-0 md:gap-x-4 md:mb-24">
        <NavLink>Hello</NavLink>
        <NavLink>Test </NavLink>
        <NavLink>Hello</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
