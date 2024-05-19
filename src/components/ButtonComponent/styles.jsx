import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ButtonStyled = styled.button`
    background-color: ${(props) => props.bgcolor || colors.text_primary};
    color: ${(props) => props.textColor || colors.secundary};
    border: none;
    cursor: pointer;
    width:  ${props => props.width || "100%"};
    padding: 0 1rem;
    height: ${props => props.size || "1.5rem"};
    font-size: 1rem;
    border-radius: 5px;
    &:hover {
        color: ${colors.text_primary};
        background-color: #40adc0;
    }
    @media screen and (max-width: 768px) {
        height: ${props => props.size || "2rem"};
    }
`;