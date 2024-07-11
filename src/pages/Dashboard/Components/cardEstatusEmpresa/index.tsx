import React from "react";

export default function CardEstatusEmpresa({estatus}) {
    return (
        <>
            <div className="grid grid-cols-2 p-5 text-[#000000] border border-solid border-[#E0E0E0] rounded-[10px] mb-4">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="font-medium text-[15px] text-[#161E54]">
                        {estatus.titulo}
                    </h2>
                    <span className="font-medium text-[48px] text-[#161E54]">
                        {estatus.quantidade}
                    </span>
                    <div className="flex flex-col items-start gap-1">
                        <span className="font-normal text-[12px] text-[#686868]">{estatus.homem}</span>
                        <span className="font-normal text-[12px] text-[#686868]">{estatus.mulher}</span>
                    </div>
                </div>
                <div className="pt-4">
                    <img
                        src={estatus.url}
                        alt="gráfico estatistico"
                    />
                    <div className="bg-[#FFEFE7] px-3 rounded-[4px] mt-5 max-w-[130px]">
                        <p className="font-normal text-[12px] text-[#686868]">+{estatus.valor}% Mês passado</p>
                    </div>
                </div>
            </div>
        </>
    );
}
