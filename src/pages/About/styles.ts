import styled from "styled-components";
import Title from "../../Componets/Title";

function getStatusColor(status?: string): string {
    if (status === "sucesso") {
        return "green";
    }

    if (status === "erro") {
        return "red";
    }

    if (status === "em_processo") {
        return "orange";
    }

    return "#ffffff"
}

export const StyledTitle = styled(Title)`
    color: ${props => getStatusColor(props.$textColor)};
    font-size: 50px;
`