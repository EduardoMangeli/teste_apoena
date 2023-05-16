import { Link } from "react-router-dom";
import MeuNav from "./Style";

const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/teste">Teste</Link>
    </MeuNav>
);

export default Menu;