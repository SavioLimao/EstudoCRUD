import styled from "styled-components";
import LinkNav from "../LinkNav";

export const AsideTheme = styled.aside`
    display: flex;
    align-content: end;
    justify-content: end;
    flex-direction: column;
    flex-wrap: wrap;
    outline: solid #42053b;
`

export const AsideButton = styled.button`
    background-color: #42053b;
`

export const StyledLink = styled(LinkNav)`
    color: red;
`