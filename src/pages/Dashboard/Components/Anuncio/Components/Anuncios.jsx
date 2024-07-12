import { motion } from "framer-motion";
import PinIcon from "../assets/icon/pin-icon.svg";
import MoreIcon from "../assets/icon/more.svg";


const anuncios = [
  {
    title: "Cronograma de passeios para cada departamento",
    time: "5 minutos atrás",
  },
  {
    title: "Reunião com o Departamento de Recursos Humanos",
    time: "Ontem, 12h30",
  },
  {
    title:
      "O Departamento de TI precisa de mais dois talentos para a posição de Designer UX/UI.",
    time: "Ontem, 09h15",
  },
];

function Anuncios() {
  return (
    <div>
      <div className="space-y-2">
        {anuncios.map((anuncio) => (
          <div
            key={anuncio}
            className="border-2 rounded-md px-5 bg-gray-100 flex py-3 justify-between"
          >
            <div className="space-y-2">
              <h2 className="flex text-wrap text-left pr-3 overflow-ellipsis overflow-hidden max-h-12">
                {anuncio.title}
              </h2>
              <span className="flex text-sm text-gray-400 ">
                {anuncio.time}
              </span>
            </div>
            <div className=" self-center flex space-x-5 ">
              <motion.button
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.2, background: "#dfdfdf" }}
              >
                <img src={PinIcon} alt="" className="min-w-6" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.2, background: "#dfdfdf" }}
              >
                <img src={MoreIcon} alt="" className="min-w-6" />
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anuncios;
