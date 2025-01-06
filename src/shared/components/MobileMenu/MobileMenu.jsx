import { useState, useEffect } from "react";

// assets
import menuIcon from "../../../assets/icons/menu_icon.svg";
import x from "../../../assets/icons/x.svg";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div
          className="fixed bottom-24 right-5 w-16 h-16 bg-slate-900 rounded-xl flex justify-center items-center active:scale-125 ease-in-out duration-200"
          onClick={() => setIsOpen((e) => !e)}
        >
          <img
            src={menuIcon}
            alt="Menu Icon"
            className={`absolute right-3 top-3 h-10 transition-transform duration-300 ease-in-out ${
              isOpen ? "scale-0 rotate-90" : "scale-100 rotate-0"
            }`}
          />
          <img
            src={x}
            alt="Close Icon"
            className={`absolute right-3 top-3 h-10 transition-transform duration-300 ease-in-out ${
              isOpen ? "scale-100 rotate-0" : "scale-0 rotate-90"
            }`}
          />
        </div>

        <div
          className={`fixed top-0 z-50 w-2/3 h-screen bg-slate-800 p-4 text-2xl flex items-center transition ease-in-out delay-150 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav>
            <ul>
              <li>
                <p>Contacto</p>
              </li>
              <li>
                <p>Información</p>
              </li>
              <li>
                <p>Sobre nosotros</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
