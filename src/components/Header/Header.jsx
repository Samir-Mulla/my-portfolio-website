// src/components/Header/Header.jsx
import React ,{useState} from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import IconButton from "../Button/IconButton";
import Sidebar from "../Sidebar/Sidebar"; // 
// import { FaMoon, FaSun } from "react-icons/fa"; // Import the moon and sun icons

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <header>
        {/* logo */}
        <div className="bg-white h-20 w-full fixed flex justify-around selection:bg-yellow-300 font-customFont border-b">
          <div className=" lg:block hidden md:hidden xl:flex items-center">
            <Logo />
          </div>
          {/* navbar */}
          <Navbar />
          <div className="flex items-center">
            <IconButton />
          </div>

          {/* mobile menu */}
          <button onClick={toggleSidebar} className="md:hidden">
            <RiMenuFoldFill size="2rem" />
          </button>
          {/* Dark mode toggle */}
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Header;
