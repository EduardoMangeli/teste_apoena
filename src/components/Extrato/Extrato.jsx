import ItemExtrato from "../ItemExtrato/ItemExtrato";
import Container from "./Style";
import dados from "../../data/transacoes.json";
import { useState, useRef } from "react";

const Extrato = () => {
    const valor = useRef();
    const [texto, setTexto] = useState('');
    const [transacoes, setTransacoes] = useState(dados);

    const filtra = (entrada) => {
        
        setTransacoes(dados.filter(
            (e) => {
               return e.descricao.toLowerCase().includes(entrada.toLowerCase())
            }
            ));
    }

    return (
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
                <input type='text' onChange={(e) => filtra(e.target.value)}/>
                <span ref={valor}>{texto}</span>
            </Container>
    );
};

export default Extrato;