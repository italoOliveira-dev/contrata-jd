import { motion } from "framer-motion";
import DownArrowIcon from "../assets/icon/down-arrow.svg"
function DayDropdown() {
  return (
      <motion.button
        whileTap={{ scale: 1.1 }}
        whileHover={{ scale: 1.02, background: "#dfdfdf" }}
        className="border-gray-300 p-1 px-5"
      >
        <span className="flex justify-between space-x-5">
          <span className="text-[10px] text-gray-500 text-nowrap ">
            Hoje, 13 de Setem...
          </span>
          <img src={DownArrowIcon} alt="" />
        </span>
      </motion.button>
  );
}

export default DayDropdown;
