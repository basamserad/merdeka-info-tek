import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../../public/logo/merdaka.png";

function NavBar() {
  return (
    <nav className="flex items-center justify-between mx-2 my-2">
      <div className="flex gap-4 items-center">
        <img className="h-14 w-14" src={logo} alt="merdaka logo" />
        <p className="text-lg font-medium">
          Merdaka Information
          <br /> Teknologi
        </p>
      </div>
      <MenuOutlinedIcon style={{ height: "30px", width: "30px" }} />
    </nav>
  );
}

export default NavBar;
