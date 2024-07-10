import "../../index.css";
import ContrataLogo from "./assets/images/contrata-logo.svg";
import MenuPrincipal from "./Components/MenuPrincipal";
import MenuOutros from "./Components/MenuOutros";
import { Sidebar } from "react-pro-sidebar";

import LogoIcon from "./assets/icon/logo.svg";
import MenuOutrosMobile from "./Components/Mobile/MenuOutrosMobile";
import MenuPrincipalMobile from "./Components/Mobile/MenuPrincipalMobile";

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
        <div className="lg:hidden max-sm:hidden w-24">
          <aside className="px-0 pb-0 h-screen w-24">
            <div className="flex justify-center pt-5 mb-10">
              <img src={LogoIcon} alt="Contrata Logo" />
            </div>
            <MenuPrincipalMobile />
            <MenuOutrosMobile />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
