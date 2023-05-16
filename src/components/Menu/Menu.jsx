import { Link } from "react-router-dom";
import MeuNav from "./Style";

const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/teste">Teste</Link>
        <Link to="/transacoes">Transações</Link>
    </MeuNav>
);

export default Menu;