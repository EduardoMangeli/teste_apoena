import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";

function App() {
  return (
    <>
    <Menu/>
    <h1>Meu cabeçalho</h1>
    <p className="meu_p">um etxto</p>
    <Link to="/teste">Clique para ir par a página de teste</Link>
    </>
  );
}

export default App;
