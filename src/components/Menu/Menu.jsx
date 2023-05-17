import { Link } from "react-router-dom";
import MeuNav from "./Style";
import {AiOutlineHome} from "react-icons/ai";
import {TbTestPipe} from "react-icons/tb";

const Menu = () => (
    <MeuNav>
        <Link to="/"><AiOutlineHome />Home</Link>
        <Link to="/teste"><TbTestPipe />   Teste</Link>
        <Link to="/transacoes">Transações</Link>
    </MeuNav>
);

export default Menu;