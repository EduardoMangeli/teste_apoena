import styled from "styled-components";

const MeuNav = styled.nav`
    display: flex;
    gap: 2px;
    flex-direction: row;
    justify-content: space-around;

    a {
        text-decoration: none;
        font-size: larger;
        border: solid black 1px;
        border-radius: 3px;
        padding: 0 10px;
    }
`;

export default MeuNav;