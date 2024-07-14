import "../../index.css";
import ContrataLogo from "./assets/images/contrata-logo.svg";
import MenuPrincipal from "./Components/MenuPrincipal";
import MenuOutros from "./Components/MenuOutros";
import { Sidebar } from "react-pro-sidebar";

function Navigation() {
  return (
    <div className="  text-gray-900">
      <div className="items-center bg-slate-50">
        <div className="max-lg:hidden">
          <Sidebar className="px-0 pb-0 h-screen">
            <div className="flex justify-center pt-5 mb-10">
              <img src={ContrataLogo} alt="Contrata Logo" />
            </div>
            <MenuPrincipal />
            <MenuOutros />
          </Sidebar>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
