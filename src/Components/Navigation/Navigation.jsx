import "../../index.css";

import ContrataLogo from "./assets/images/contrata-logo.svg";
import MenuPrincipal from "./Components/MenuPrincipal";
import MenuOutros from "./Components/MenuOutros";
import { Sidebar } from "react-pro-sidebar";

function Navigation() {
  return (
    <Sidebar className="p-0">
      <div className="flex justify-center pt-5 mb-10">
        <img src={ContrataLogo} alt="" />
      </div>
      <MenuPrincipal />
      <MenuOutros />
    </Sidebar>
  );
}

export default Navigation;
