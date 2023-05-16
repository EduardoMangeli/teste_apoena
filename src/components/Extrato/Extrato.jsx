import ItemExtrato from "../ItemExtrato/ItemExtrato";
import Container from "./Style";
import transacoes from "../../data/transacoes.json";


const Extrato = () => (
    <Container>
        {
            transacoes.map(
                (ele, ind) => (
                    <ItemExtrato
                        key={ind}
                        cat={ele.categoria}
                        inst={ele.instituicao}
                        data={ele.data}
                        descri={ele.descricao}
                        valor={ele.valor}
                    />
                )
            )
        }
    </Container>
);

export default Extrato;