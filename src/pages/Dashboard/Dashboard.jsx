import EstatusEmpresa from "./Components/EstatusEmpresa";
import RecentyActivity from "./Components/RecentyActivity";
import CardEstatusFuncionario from "./Components/cardEstatusFuncionario";

export default function Dashboard() {

  const estatusFuncionarios = [{
    id: 1,
    titulo: "Posição Disponível",
    quantidade: 24,
    informacao: "4 Urgências"
  }, {
    id: 2,
    titulo: "Vaga de Emprego",
    quantidade: 10,
    informacao: "4 Contratação Ativa"
  }, {
    id: 3,
    titulo: "Novos Funcionários",
    quantidade: 24,
    informacao: "4 Departamento"
  }];

  const estatusEmpresa = [{
    id: 1,
    titulo: "Total de Funcionários",
    homem: 120,
    mulher: 96,
    valorPorcento: 2,
    url: "src/assets/grafico1.svg"
  }, {
    id: 2,
    titulo: "Solicitação de Talento",
    homem: 6,
    mulher: 10,
    valorPorcento: 5,
    url: "src/assets/grafico2.svg"
  }];

  return (
    <div className="px-[20px] pt-[11px]">
      <div>
        <h2 className="text-left mb-2 text-[24px] font-medium text-[#161E54]">
          Dashboard
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {estatusFuncionarios.map(estatus => (
              <CardEstatusFuncionario 
                key={estatus.id}
                estatusFuncionario={estatus}
              />
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {estatusEmpresa.map((estatus) => (
            <EstatusEmpresa
              key={estatus.id}
              estatus={estatus}
            />
          ))}
        </div>
      </div>
      <RecentyActivity />
    </div>
  );
}
