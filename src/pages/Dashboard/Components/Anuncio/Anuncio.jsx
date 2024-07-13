import { motion } from "framer-motion";
import DayDropdown from "./Components/DayDropdown";
import { Modal } from "@mui/material";
import React from "react";
import Anuncios from "./Components/Anuncios";

function Anuncio() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="mt-5 rounded-xl border-2 space-y-2">
            <div className="p-5">
                <div className="flex justify-between space-x-2 mb-4">
                    <h1 className="flex text-xl font-semibold">Anúncio</h1>
                    <DayDropdown />
                </div>
                <Anuncios />
            </div>
            <hr />
            <motion.button
                // whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05, background: "#FFFFFF" }}
                onClick={handleOpen}
                className="p-2"
            >
                <span className="text-red-600 font-semibold px-5">
                    Ver todos os anúncios
                </span>
            </motion.button>

            <Modal open={open} onClose={handleClose}>
                <div className="rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 bg-white shadow-sm p-4">
                    <span className="text-black flex justify-center">
                        Hello World!
                    </span>
                </div>
            </Modal>
        </div>
    );
}

export default Anuncio;
