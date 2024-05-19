import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerHomePage = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerBody = styled.body`
    display: flex;
    padding: 0 6rem;
    justify-content: space-between;
    height: 75%;
    width: 100%;
    background-color: ${colors.bgcolor} ;
    @media screen and (max-width: 768px) {
       flex-direction: column;
       align-items: center;
       justify-content: center;
    }
`;

export const ContainerAux = styled.section`
  width: 26rem;
  height: 50%;
`;