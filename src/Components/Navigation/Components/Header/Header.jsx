import "../../../../index.css";
import OpenMenu from "../MobileMenu/OpenMenu";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { motion } from "framer-motion";

import DownArrowIcon from "./assets/icons/Frame10.svg"
import ChatIcon from "./assets/icons/bi_chat-left-dots-fill.svg"
import NotificationsIcon from "./assets/icons/ic_round-notifications.svg"
import SearchIcon from "./assets/icons/Frame9.svg"

function Header() {
  return (
    <div className="w-[inherit] h-24 pl-5 border-t flex justify-between items-center bg-white border-b">
      <div className="w-[343px] h-[44px] pr-3 pb-3 max-lg:hidden">
        <label className="relative block">
          <span className="sr-only">Busca</span>

          <motion.span
            className="absolute inset-y-0 right-1 flex items-center pl-2"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
          >
            <button>
              <img src={SearchIcon} alt="" />
            </button>
          </motion.span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Busca"
            type="text"
            name="search"
            style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
          />
        </label>
      </div>
      <div className="w-5/12 h-[44px] lg:hidden max-sm:hidden">
        <label className="relative block">
          <span className="sr-only">Busca</span>
          <motion.span
            className="absolute inset-y-0 right-1 flex items-center pl-2"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
          >
            <button>
              <img src={SearchIcon} alt="" />
            </button>
          </motion.span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Busca"
            type="text"
            name="search"
            style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
          />
        </label>
      </div>
      <div className="h-6 sm:hidden flex">
        <OpenMenu />
        <motion.button
          className="w-6"
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
        >
          <label className="relative block">
            <button>
              <img src={SearchIcon} alt="" />
            </button>
          </label>
        </motion.button>
      </div>
      <div className="gap-[30px]">
        <div className="flex flex-row gap-[30px] justify-end pr-5">
          <Popup
            className="h-1"
            trigger={
              <motion.button
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.2 }}
              >
                <img src={NotificationsIcon} alt="" />
              </motion.button>
            }
          >
            <div className="h-52 pt-5 flex justify-center text-gray-400">
              No notifications here...
            </div>
          </Popup>

          <Popup
            trigger={
              <motion.button
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={ChatIcon}
                  alt=""
                />
              </motion.button>
            }
          >
            <div className="h-52 pt-5 flex justify-center text-gray-400">
              No new chats...
            </div>
          </Popup>

          <div className="flex items-center gap-[12px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/f3a4/8287/6bf054911a8a1a4cc29afafa2bd70fe8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOl4z0fxw~OwZCQU94aZ~5HM7cqoMk1SKjh6zGxUrC~Mes4wQsf2l~J2qNnJSnYb-kytbm986mV4fcM7CJZzmM8NkYSj4Rcp5ELQ3~3Tuq1JoGkHr0aRAruWBbFpAOo43kzNPGLIQyn2MibbSsn7gZPNGOTp8232GniR7TtDlwtGbZLHzZkbvXJd1FuzdIdTrZjGNBU5RhPM47maLQOMH1vVgOTqggbhuJPFREGD9TGFIDGizSYvtv9FZ594WfKvZmmLwwQ8CWQMh8~ofHHyLSGJ~obKiZdKzRS3C8PMAECdGup1OAz3occmVNPa3qyU55119AlBzpUVn9DRBTUkkw__"
              className="w-[42px] h-[42px] ml-[-1px] rounded-full"
            />
            <p
              className="font-poppins font-medium text-base max-lg:hidden"
              style={{
                color: "rgba(22, 30, 84, 1)",
                fontSize: "16px",
                alignItems: "center",
              }}
            >
              Iago Maciel
            </p>
            <Popup
            trigger={
              <motion.button
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={DownArrowIcon}
                  alt=""
                />
              </motion.button>
            }
          >
            <div className="h-52 pt-5 flex justify-center text-gray-400">
              No Configuration here
            </div>
          </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
