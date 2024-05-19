import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerHeader = styled.header`
    display: flex;
    background-color: ${colors.primary};
    height: 25%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 5px 5px 0 ${colors.color_transparent};
   
`;

