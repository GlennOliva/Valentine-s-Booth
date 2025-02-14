import  { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for the menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#BE3144] text-white w-full py-4 px-8 shadow-lg">
      {/* Navbar Container */}
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">VALENTINES BOOTH</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:underline">HOME</a>
          <a href="/" className="hover:underline">ABOUT</a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <a href="/" className="hover:underline">HOME</a>
          <a href="/" className="hover:underline">ABOUT</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
