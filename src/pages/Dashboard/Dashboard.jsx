import CardEstatusEmpresa from "./Components/cardEstatusEmpresa";
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

    const estatusEmpresa = [{
        id: 1,
        titulo: "Total de Funcionários",
        quantidade: 216,
        homem: "120 Homens",
        mulher: "96 Mulheres",
        valor: 2,
        url: "src/assets/dashboard/grafico1.svg"
    },{
        id: 2,
        titulo: "Solicitação de Talento",
        quantidade: 16,
        homem: "6 Homens",
        mulher: "10 Mulheres",
        valor: 5,
        url: "src/assets/dashboard/grafico2.svg"
    }]

    return (
        <div className="px-[20px] pt-[11px]">
            <div className="mb-[39px]">
                <h2 className="text-left mb-5 text-[20px] font-medium text-[#161E54]">
                    Dashboard
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {estatusFuncionarios.map((estatus) => (
                        <CardEstatusFuncionario
                            key={estatus.id}
                            estatusFuncionario={estatus}
                        />
                    ))}
                </div>
            </div>
            <div>
                {estatusEmpresa.map(estatus => (
                    <CardEstatusEmpresa 
                        key={estatus.id}
                        estatus={estatus}
                    />
                ))}
            </div>
        </div>
    );
}
