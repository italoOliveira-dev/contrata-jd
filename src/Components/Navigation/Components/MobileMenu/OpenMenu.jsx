import React from "react";
import MenuPrincipalMobile from "./MenuPrincipalMobile";
import MenuOutrosMobile from "./MenuOutrosMobile";

import BurguerMenuIcon from "./assets/icons/burguer-menu.svg";
import LogoIcon from "../../assets/icon/logo.svg";
import { motion } from "framer-motion";
import { Modal } from "@mui/material";

function OpenMenu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex">
      <div className="m-0">
        <div className="flex items-center justify-between px-6">
          <div className="flex items-center w-6 ">
            <motion.button
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.2 }}
              onClick={handleOpen}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <img src={BurguerMenuIcon} alt="" />
            </motion.button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <motion.aside
          animate={{ x: 60 }}
          transition={{ ease: "linear", duration: 0.1 }}
          exit={{ x: -60 }}
          className="w-24 bg-slate-50 pl-5 h-screen absolute -left-20"
        >
          <div className="flex justify-center pt-5 mb-10">
            <img src={LogoIcon} alt="Contrata Logo" />
          </div>
          <MenuPrincipalMobile />
          <MenuOutrosMobile />
        </motion.aside>
      </Modal>
    </div>
  );
}

export default OpenMenu;
