import DownArrowIcon from "./assets/icon/Frame10.svg";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function UpcomingActivities() {
    const [otherActivities, setOtherActivities] = useState([
        {
            id: 1,
            title: "Entrevista com candidatos",
            time: "hoje às 10h30"
        },
        {
            id: 2,
            title: "Breve reunião com o designer de produtos do departamento de TI",
            time: "Today - 09.15 AM"
        }
    ]);

    const handleEditActivity = (id) => {
        setOtherActivities(otherActivities.map(activity => {
            if (activity.id === id) {
                return { ...activity, editing: true };
            }
            return activity;
        }));
    };

    const handleSaveChanges = (id, newTitle, newTime) => {
        setOtherActivities(otherActivities.map(activity => {
            if (activity.id === id) {
                return { ...activity, title: newTitle, time: newTime, editing: false };
            }
            return activity;
        }));
    };

    const handleDeleteActivity = (id) => {
        setOtherActivities(otherActivities.filter(activity => activity.id !== id));
    };

    const handleCreateActivity = () => {
        const newActivity = {
            id: Date.now(),
            title: "Nova Atividade",
            time: "Data e Hora"
        };

        setOtherActivities([...otherActivities, newActivity]);
    };

    return (
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-4 border lg:w-[427px] sm:w-[350px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg text-nowrap font-semibold text-customBlue">Próximas Atividades</h2>
                <button className="border border-inherit w-[175px] h-[27px] text-xs text-nowrap bg-input px-2 py-2 rounded-lg flex justify-between items-center">Hoje, 13 de Setem.. <img src={DownArrowIcon} alt="" /></button>
            </div>
            <div>
                <h3 className="text-xs font-medium mb-2 flex justify-start">Prioridade</h3>
                <div className="space-y-2 bg-gray-100 rounded-md">
                    <div className="bg-foreground text-background p-3 rounded-lg shadow-sm flex justify-between items-center relative">
                        <div>
                            <h4 className="font-semibold activity-title text-base">Revisão de candidaturas</h4>
                            <p className="activity-time text-xs flex justify-start text-gray-600">hoje às 11h30</p>
                        </div>
                        <button className="text-muted-foreground options-button">...</button>
                        <div className="options-menu hidden absolute right-0 bg-white border border-gray-200 rounded shadow-lg">
                            <button className="block w-full text-left px-4 py-2 text-muted-foreground edit-activity">Editar</button>
                            <button className="block w-full text-left px-4 py-2 text-destructive-foreground delete-activity">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-xs font-medium mb-2 flex justify-start mt-3">Outras</h3>
                <div className="space-y-2 overflow-y-auto max-h-[300px]">
                    {otherActivities.map(activity => (
                        <div key={activity.id} className="bg-foreground text-background p-3 shadow-sm flex justify-between items-center relative bg-gray-100 rounded-md">
                            <div>
                                {activity.editing ? (
                                    <>
                                        <input
                                            type="text"
                                            className="activity-title-input bg-foreground text-background p-1 rounded"
                                            defaultValue={activity.title}
                                            onBlur={(e) => handleSaveChanges(activity.id, e.target.value, activity.time)}
                                        />
                                        <input
                                            type="text"
                                            className="activity-time-input bg-foreground text-background p-1 rounded"
                                            defaultValue={activity.time}
                                            onBlur={(e) => handleSaveChanges(activity.id, activity.title, e.target.value)}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <h4 className="font-semibold activity-title text-left">{activity.title}</h4>
                                        <p className="text-xs text-gray-600 activity-time flex justify-start">{activity.time}</p>
                                    </>
                                )}
                            </div>
                            <button className="text-muted-foreground options-button" onClick={() => handleEditActivity(activity.id)}>...</button>
                            <div className="options-menu hidden absolute right-0 bg-white border border-gray-200 rounded shadow-lg">
                                <button className="block w-full text-left px-4 py-2 text-muted-foreground edit-activity" onClick={() => handleEditActivity(activity.id)}>Editar</button>
                                <button className="block w-full text-left px-4 py-2 text-destructive-foreground delete-activity" onClick={() => handleDeleteActivity(activity.id)}>Excluir</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-3">
                <button
                    id="create-activity"
                    className="border-transparent text-red-500 text-destructive-foreground w-[100%] py-3 rounded-lg sticky bottom-4 mt-0 mb-0"
                    onClick={handleCreateActivity}
                >
                    Criar Nova Atividade
                </button>
            </div>
            
        </div>
    );
}

export default UpcomingActivities;
