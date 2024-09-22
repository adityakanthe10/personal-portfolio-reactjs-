import logo from "../../assets/logo.png";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <nav id="navbar" className = " backdrop-filter backdrop-blur-lg bg-neutral-750 nav z-50 fixed top-0 left-0 w-full flex items-center justify-between shadow-none ">
        <div className="flex flex-shrink-0 items-center">
            <a href="#" className=""><img className="mx-3 w-8" src={logo} alt="logo" /></a>
        </div>
          <div className="menu-icon hidden">
            <LuMenuSquare />
          </div>
          <div className="navbar px-3 flex space-x-2">
            <a href="#hero" className="px-4">Home</a>
            <a href="#about" className="px-4">About Me</a>
            <a href="#technologies" className="px-4">Technologies</a>
            <a href="#projects" className="px-4">Projects</a>
            <a href="#contact" className="px-4">Contact</a>
          </div>
          <div className="darkmode mx-3 w-8">
          <MdOutlineDarkMode />
          </div>
        </nav>
  )
}

export default Navbar 