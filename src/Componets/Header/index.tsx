// import { Link } from "react-router-dom";
import { AsideButton, AsideTheme, StyledLink } from "./styles";
import LinkNav from "../LinkNav";

const Header = () => {
  return (
    <div className="HeaderDiv">
      <header>
        <img
          src="https://www.sesc-ce.com.br/wp-content/uploads/2022/08/extrafarma.png"
          alt=""
        />
        <div>
          <nav>
            <LinkNav to="/">Home</LinkNav>
            <a href="#">Remédios</a>
            <StyledLink to={"/about"}>About</StyledLink>
          </nav>
        </div>
          <AsideTheme>
            <AsideButton onClick={() => alert("okok")}>Teste</AsideButton>
          </AsideTheme>
      </header>
    </div>
  );
};
export default Header;
