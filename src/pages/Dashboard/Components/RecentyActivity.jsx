// eslint-disable-next-line no-unused-vars
import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-[#161E54] h-auto w-auto sm:h-fit sm:w-full md:h-[425px] md:w-80 md:mr-0 lg:h-[258px] lg:w-[427px] rounded-lg text-white lg:mt-7 max-md:w-full max-md:min-h-fit">
      <h1 className="bg-[#1B204A] text-start text-[18px] p-4 pl-5 rounded-lg">
        Atividade Recente
      </h1>

      <div className="p-5">
        <div className="flex flex-col justify-center align-center gap-[6px] text-start  ">
          <p className="text-[10px] opacity-[60%]">
            10h40, Sexta-feira, 10 de setembro de 2021
          </p>
          <h3 className="font-medium leading-7 text-[18px] pr-[50px]">
            Você Postou uma Nova Vaga
          </h3>
          <p className="font-normal text-[14px] leading-5 opacity-[80%]">
            Por favor, verifique os requisitos e os termos de trabalho e
            certifique-se de que está tudo correto.
          </p>
        </div>

        <div className="flex md:flex-col lg:flex-row gap-[38px] text-start mt-2 sm:mt-5 md:items-baseline max-lg:flex-wrap sm:flex-col max-lg:flex-col">
          <p className="font-normal text-[14px] leading-5">
            Hoje você realizou 12 atividades
          </p>
          <button
            className="w-[139px]   rounded-[4px] p-2 bg-[#FF5151]"
            type="button"
          >
            Ver Todas
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
