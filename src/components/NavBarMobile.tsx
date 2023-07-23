import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import logo from "../../public/logo/merdaka.png";

import { Link } from "react-router-dom";

function NavBarMobile({ style, closeBtn }: { style: any, closeBtn: any}) {

  return (
    <nav
      style={style}
      className="flex flex-col bg-green-700 text-white w-screen h-screen absolute bottom-0 left-0"
    >
      <div className="flex p-4 items-center justify-between mb-16">
        <div className="flex gap-4">
          <img className="h-14 w-14" src={logo} alt="merdaka logo" />
          <p className="text-lg font-medium">
            Merdaka Information
            <br /> Teknologi
          </p>
        </div>
        <CloseOutlinedIcon style={{ height: "30px", width: "30px" }} onClick={closeBtn} />
      </div>
      <div className="flex flex-col text-4xl font-semibold items-center gap-4">
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBarMobile;
