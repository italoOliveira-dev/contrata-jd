import Anuncio from "./Components/Anuncio/Anuncio";
import EstatusEmpresa from "./Components/EstatusEmpresa";
import RecentyActivity from "./Components/RecentyActivity";
import UpcomingActivities from "./Components/UpcomingActivities/UpcomingActivities";
import CardEstatusFuncionario from "./Components/cardEstatusFuncionario";

export default function Dashboard() {
  const estatusFuncionarios = [
    {
      id: 1,
      titulo: "Posição Disponível",
      quantidade: 24,
      informacao: "4 Urgências",
    },
    {
      id: 2,
      titulo: "Vaga de Emprego",
      quantidade: 10,
      informacao: "4 Contratação Ativa",
    },
    {
      id: 3,
      titulo: "Novos Funcionários",
      quantidade: 24,
      informacao: "4 Departamento",
    },
  ];

  const estatusEmpresa = [
    {
      id: 1,
      titulo: "Total de Funcionários",
      homem: 120,
      mulher: 96,
      valorPorcento: 2,
      url: "src/assets/grafico1.svg",
    },
    {
      id: 2,
      titulo: "Solicitação de Talentos",
      homem: 6,
      mulher: 10,
      valorPorcento: 5,
      url: "src/assets/grafico2.svg",
    },
  ];

  return (
    <div className="pt-5 p-10 lg:flex justify-start ">
      <div>
        <h2 className="text-left mb-2 text-[24px] font-medium text-[#161E54]">
          Dashboard
        </h2>
        <div className="flex flex-wrap justify-between gap-3">
          {estatusFuncionarios.map((estatus) => (
            <CardEstatusFuncionario
              key={estatus.id}
              estatusFuncionario={estatus}
            />
          ))}
        </div>
        <div className="flex mt-10 gap-4 max-sm:flex-wrap justify-between">
          {estatusEmpresa.map((estatus) => (
            <EstatusEmpresa key={estatus.id} estatus={estatus} />
          ))}
        </div>
        <Anuncio />
      </div>
      <div className="mt-4 ml-5 space-y-5 max-xl:flex-wrap max-lg:w-full max-lg:flex max-lg:flex-nowrap max-lg:ml-0 max-lg:space-x-3 max-lg:space-y-0 max-lg:mb-5 max-md:flex-wrap max-md:space-x-0 max-md:space-y-5">
        <RecentyActivity />
        <UpcomingActivities />
      </div>
    </div>
  );
}
