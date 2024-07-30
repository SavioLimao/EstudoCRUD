import { Link } from "react-router-dom";

Link
const Header = () => {
  return (
    <header>
      <img
        src="https://www.sesc-ce.com.br/wp-content/uploads/2022/08/extrafarma.png"
        alt=""
      />
      <div>
        <nav>
          <Link to={"/"}>Home</Link>
          <a href="#">Remídios</a>
          <Link to={"/about"}>About</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
