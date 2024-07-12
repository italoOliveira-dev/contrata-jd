/* eslint-disable react/prop-types */
export default function EstatusEmpresa({estatus}) {

    return (
        <div className="border border-[#E0E0E0] rounded-[10px] p-[20px] grid grid-cols-2 gap-1">
            <div className="flex flex-col items-start gap-3 ">
                <h2 className="text-base text-nowrap text-[#161E54] font-medium leading-7">
                    {estatus.titulo}
                </h2>
                <span className="text-5xl text-[#161E54] font-medium">
                    {estatus.homem + estatus.mulher}
                </span>
                <div className="flex flex-col items-start gap-1">
                    <span className="text-xs text-[#686868] font-normal">
                        {estatus.homem} Homens
                    </span>
                    <span className="text-xs text-[#686868] font-normal">
                        {estatus.mulher} Mulheres
                    </span>
                </div>
            </div>
            <div className="p-[15px]">
                <img src={estatus.url} alt="Foto do gráfico" />
                <div className="bg-[#FFEFE7] rounded-[4px] max-w-[130px]">
                    <span className="text-[#303030] px-[10px] text-xs font-normal">+{estatus.valorPorcento}% Mês passado</span>
                </div>
            </div>
        </div>
    );  
}