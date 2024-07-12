import UpcomingActivities from "../../Components/Navigation/Components/MobileMenu/UpcomingActivities";
import RecentyActivity from "../../Components/Navigation/Components/RecentyActivity";
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
  }]

  return (
    <div className="pl-[51px] pt-[11px] lg:flex justify-start">
      <div>
        <h2 className="text-left mb-2 text-[24px] font-medium text-[#161E54]">
          Dashboard
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {estatusFuncionarios.map(estatus => (
              <CardEstatusFuncionario 
                key={estatus.id}
                estatusFuncionario={estatus}
              />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 ml-5">
        <RecentyActivity />
        <UpcomingActivities />
      </div>
      
    </div>
  );
}
