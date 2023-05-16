import { Categoria, Container, Data, Descricao, Instituicao, Valor } from "./Style";

const ItemExtrato = ( props ) => (
    <Container>
        <Categoria>{props.cat}</Categoria>
        <Instituicao>{props.inst}</Instituicao>
        <Data>{props.data}</Data>
        <Descricao>{props.descri}</Descricao>
        <Valor>{props.valor}</Valor>
    </Container>
);

export default ItemExtrato;