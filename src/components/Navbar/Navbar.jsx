import logo from "../../assets/logo.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className = " z-50 fixed top-0 left-0 w-full flex items-center justify-between py-3 shadow-none ">
        <div className="flex flex-shrink-0 items-center">
            <a href="#" className=""><img className="mx-5 w-12" src={logo} alt="logo" /></a>
        </div>
        <div className="social_links m-8 flex items-center justify-center gap-4 text-2xl text-gray-500">
            <a target="_blank" href="https://www.linkedin.com/in/aditya-kanthe-a63bb9214">
            <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/adityakanthe10"><FaGithub /></a>
            <a target="_blank" href="https://www.instagram.com/adityakanthe10/"><FaInstagram /></a>
            <a target="_blank" href="https://twitter.com/aditya_kanthe"><FaSquareXTwitter /></a>
        </div>
        </nav>
  )
}

export default Navbar