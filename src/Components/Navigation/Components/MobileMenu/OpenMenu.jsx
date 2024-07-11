import { useState } from "react";
import MenuPrincipalMobile from "./MenuPrincipalMobile";
import MenuOutrosMobile from "./MenuOutrosMobile";

import BurguerMenuIcon from "./assets/icons/burguer-menu.svg";
import LogoIcon from "../../assets/icon/logo.svg";
import { motion } from "framer-motion";

function OpenMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="">
        {showMenu && (
          <aside className="-m-10 mr-5 w-24 bg-slate-50 pl-5 h-screen">
            <div className="flex justify-center pt-5 mb-10">
              <img src={LogoIcon} alt="Contrata Logo" />
            </div>
            <MenuPrincipalMobile />
            <MenuOutrosMobile />
          </aside>
        )}
      </div>
      <div className="m-0">
        <div className="flex items-center justify-between px-6 md:px-0">
          <div className="flex items-center w-6 ">
            <motion.button
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <img src={BurguerMenuIcon} alt="" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenMenu;