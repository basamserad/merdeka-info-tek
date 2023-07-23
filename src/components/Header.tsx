import logo from "../../public/logo/merdaka.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NavBarMobile from "./NavBarMobile";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex gap-4">
        <img className="h-14 w-14" src={logo} alt="merdaka logo" />
        <p className="text-lg font-medium">
          Merdaka Information
          <br /> Teknologi
        </p>
      </div>
      <NavBarMobile
        style={openMenu ? { display: "block" } : { display: "none" }}
        closeBtn={() => setOpenMenu(!openMenu)}
      />
      <MenuOutlinedIcon
        style={{ height: "30px", width: "30px" }}
        onClick={() => setOpenMenu(!openMenu)}
      />
    </header>
  );
}

export default Header;
