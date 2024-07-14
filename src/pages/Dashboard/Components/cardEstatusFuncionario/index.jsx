/* eslint-disable react/prop-types */
import Item from "./Item";

export default function CardEstatusFuncionario({ estatusFuncionario }) {

    const bg = estatusFuncionario.id === 2 ? "bg-[#E8F0FB]" : estatusFuncionario.id === 3 ? "bg-[#FDEBF9]" : "bg-[#FFEFE7]";

    return (
        <div
            className={`${bg}
            flex flex-col items-start justify-center gap-[5px] 
            h-36 
            min-w-60
            max-sm:w-full
            max-lg:flex-grow
            rounded-xl 
            py-[12px] px-5
            
        `}
        >
            <Item
                id={estatusFuncionario.id}
                titulo={estatusFuncionario.titulo}
                quantidade={estatusFuncionario.quantidade}
                informacao={estatusFuncionario.informacao}
            />
        </div>
    );
}
