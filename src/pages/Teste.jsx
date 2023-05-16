import ItemExtrato from "../components/ItemExtrato/ItemExtrato";
import Menu from "../components/Menu/Menu";

const Teste = ( ) => (
    <div id='nova_pagina'>
        <Menu />
        <p>Meu parágrafo</p>
        <ItemExtrato 
            cat="U"
            inst="P"
            data="21/06/1987"
            descri="Uma descrição"
            valor="98000"
        />
        <ItemExtrato 
            cat="W"
            inst="J"
            data="20/06/1989"
            descri="Outra descrição"
            valor="36500"
        />
    </div>
);

export default Teste;