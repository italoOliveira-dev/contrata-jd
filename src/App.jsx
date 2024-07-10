import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";

import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./Components/Navigation/Components/Header";
import Recrutamento from "./pages/Recrutamento/Recrutamneto";
import Agendamento from "./pages/Agendamento/Agendamento";
import Colaboradores from "./pages/Colaboradores/Colaboradores";
import Departamento from "./pages/Departamento/Departamento";
import Suporte from "./pages/Suporte/Suporte";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-white">
        <div className="flex">
          <Navigation />
          <div className="w-full">
            <Header />

            <div className="">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/recrutamento" element={<Recrutamento />} />
                <Route path="/agendamento" element={<Agendamento />} />
                <Route path="/colaboradores" element={<Colaboradores />} />
                <Route path="/departamento" element={<Departamento />} />
                <Route path="/suporte" element={<Suporte />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
