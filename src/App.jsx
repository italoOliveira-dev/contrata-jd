import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex w-screen h-screen bg-white text-gray-900">
        <Navigation />
        <div className="w-screen">
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recrutamento" element={""} />
            <Route path="/agendamento" element={""} />
            <Route path="/colaboradores" element={""} />
            <Route path="/departamento" element={""} />
            <Route path="/suporte" element={""} />
            <Route path="/settings" element={""} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
