import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className=" left-0 w-full z-50  bg-brand-secondary py-4 p-1 shadow-md">
        <div>
          <nav className="w-full max-w-5xl mx-auto px-4">
            {/* Mobile menu button */}
            <div className="flex justify-between items-center">
              <div className="text-white hover:cursor-pointer hover:text-brand-clay block sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />} 
              </div>

              {/* Desktop Navigation */}
              <ul className="sm:flex hidden justify-evenly flex-1">
                <li>
                  <Link to="/home" className="text-white hover:text-brand-clay">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/root-map" className="text-white hover:text-brand-clay">
                    Root Map
                  </Link>
                </li>
                <li>
                  <Link to="/ask-us" className="text-white hover:text-brand-clay">
                    Ask Us
                  </Link>
                </li>
                <li>
                  <Link to="/guidance" className="text-white hover:text-brand-clay">
                    Guidance
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/register-login"
                    className=" px-1.5 rounded-sm text-white hover:text-brand-clay hover:bg-brand-white transition-all flex items-center"
                  >
                    Register/Login <ChevronDown size={16} className="ml-1" />
                  </Link>

                  {/* Dropdown - hidden until hover */}
                  <div className="absolute left-0 px-6 pt-2 pb-2 mb-4 text-center hidden group-hover:block active:block bg-brand-clay rounded shadow-md">
                    <ul className="flex flex-col">
                      <li>
                        <Link
                          to="/register"
                          className="block px-4 py-1 rounded-md text-white hover:bg-brand-secondary"
                        >
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/login"
                          className="block px-4 py-1 rounded-md text-white hover:bg-brand-secondary"
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/user-dashboard" className="text-white hover:text-brand-clay">
                    User Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/herbalist-dashboard" className="text-white hover:text-brand-clay">
                    Herbalist Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Overlay Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm sm:hidden pt-16">
          <div className="flex flex-col items-center justify-start h-full space-y-6 text-xl font-semibold text-white pt-10">
            <Link 
              to="/home" 
              className="w-full text-center py-3 hover:bg-brand-secondary/50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="w-full text-center py-3 hover:bg-brand-secondary/50"
              onClick={() => setIsOpen(false)}
            >
              Root Map
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full text-center py-3 hover:bg-brand-secondary/50"
              onClick={() => setIsOpen(false)}
            >
              Ask Us
            </Link>
            
            <Link 
              to="/disclaimer" 
              className="w-full text-center py-3 hover:bg-brand-secondary/50"
              onClick={() => setIsOpen(false)}
            >
              Guidance
            </Link>
            
            {/* Mobile Register/Login Dropdown */}
            <div className="w-full text-center">
              <button 
                className="py-3 flex items-center justify-center w-full hover:bg-brand-secondary/50"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Register/Login <ChevronDown size={20} className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="bg-brand-clay rounded-md mt-1 mx-4">
                  <Link 
                    to="/register" 
                    className="block py-2 hover:bg-brand-secondary/50 rounded-t-md"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Register
                  </Link>
                  <Link 
                    to="/login" 
                    className="block py-2 hover:bg-brand-secondary/50 rounded-b-md"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/userdashboard" 
              className="w-full text-center py-3 hover:bg-brand-secondary/50"
              onClick={() => setIsOpen(false)}
            >
              User Dashboard
            </Link>
            
            <Link 
              to="/herbalistdashboard" 
              className="w-full text-center py-3 hover:bg-brand-secondary/50"
              onClick={() => setIsOpen(false)}
            >
              Herbalist Dashboard
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;