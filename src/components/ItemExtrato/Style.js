import styled from "styled-components";
import { medioMobile } from "../../utils";



const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (min-width: ${medioMobile}px) {
        flex-wrap: nowrap;
        justify-content: normal;
    }
`;

const Categoria = styled.span`
    font-weight: bolder;
    border: solid black 1px;
    border-radius: 50%;
    width: 1em;
    padding: 0 2px;
    text-align: center;
`;

const Instituicao = styled.span`
    font-weight: bolder;
    border: solid black 1px;
    border-radius: 50%;
    width: 1em;
    padding: 0 2px;
    text-align: center;
`;

const Data = styled.span`
    font-family: monospace;
    font-size: large;
    width: 6em;
    text-align: center;
`;

const Descricao = styled.span`
    width: 23em;
    text-align: center;
    
    @media screen and (min-width: 321px) {
        text-align: unset;
    }

`;

const Valor = styled.span`
    background-color: gray;
`;

export {Container, Categoria, Data, Instituicao, Descricao, Valor};