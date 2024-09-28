import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Active from "../activeRoute/Active";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-screen bg-slate-200">
      <nav className="container mx-auto flex items-center z-50 justify-between">
        <div className="logo">
          <Link to="/">
            <h1 className="text-[30px] font-bold]">Durbar-20</h1>
          </Link>
        </div>
        <div
          className={`absolute duration-1000 -z-50 md:z-50 md:static bg-slate-200 p-4 text-left right-0 ${
            isOpen ? "top-20" : "-top-[1000px]"
          }`}
        >
          <ul className="md:flex">
            <li className="px-[10px] md:py-0 py-[10px]">
              <Active to="/" className="text-[20px]">
                Home
              </Active>
            </li>
            <li className="px-[10px] md:py-0 py-[10px]">
              <Active to="/about" className="text-[20px]">
                About
              </Active>
            </li>
            <li className="px-[10px] md:py-0 py-[10px]">
              <Active to="/donar" className="text-[20px]">
                Ready Donar
              </Active>
            </li>
            <li className="px-[10px] md:py-0 py-[10px]">
              <Active to="/found" className="text-[20px]">
                Found Blood
              </Active>
            </li>
            <li className="px-[10px] md:py-0 py-[10px]">
              <Active to="/blog" className="text-[20px]">
                Blog
              </Active>
            </li>
            <li className="px-[10px] md:py-0 py-[10px]">
              <Active to="/registration" className="text-[20px]">
                Registration
              </Active>
            </li>
          </ul>
        </div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaXmark className="text-[20px]" />
          ) : (
            <FaBars className="text-[20px]" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
